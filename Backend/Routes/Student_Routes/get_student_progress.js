const express = require('express') //Defining "express" variable that adds the express library in the document 
const router = express.Router(); //Defining "router" variable that adds the router in the express by using ".Router" attribute which requests in job_post_routes document 


const {MongoClient} = require('mongodb'); //Defining variable "MongoClient" variable that adds mongodb library in the document, which is used to handle data in MongoDb database server 
const url = "mongodb+srv://hsulayman29:0jgE3JIDBWUs2FVU@rave-wbl.bpntf.mongodb.net/" //Defining "url" variable that inputs the link of Mongodb server
const client = new MongoClient(url) //Defining "client" variable that creates a MongoClient whuch is used to interact with the MongoDb server

const connectToDb = async()=>{ //Defining "connectToDb" variable that creates a variable that connects to the MongoDb server
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        await client.connect() //Using ".connect" attribute to tell the programme to connect to the mongodb server link that it has been provided
        console.log("Your Database is running...") //Once the MongoDb server is connected then it will display a console message stating that database is running
    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log("There is an error running the Database", err) //Printing error message in console 
    }
}
connectToDb() //Calls the function ("connectToDb") whilst express server is running


router.get("/", async(req,res) => { //Using ".get" HTTP method to get a student application form details where it is connecting to database name "Application_Form" within a collection name "Application_Form"
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const db = client.db("Application_Form") //Defining "db" variable which is used to connect to the database "Application_Form" by using "client.db" attribute 
        const studentProgressCollection = db.collection("Application_Form") //Defining "studentProgressCollection" variable which is used to connect to collection "Application_Form" by using "client.db" attribute 
        const studentProgressDetail = await studentProgressCollection.find().toArray(); //Defining "studentProgressDetail" variable that finds all the data within the "Application_Form" collection (".find") whuch is converted to array ("toArray()") which makes list of student application form 
        res.status(200).json(studentProgressDetail) //Sending a repsonse message to the client side with the status code of "200" which indicates that request was successfull and it sends the student application form 

    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({err: "There is an error"}) //Sends a response with an error ("status(401)") with an error message, structured in JSON format
    }
})


router.post("/:Student_id/:Status", async(req,res) => { //Using ".post" HTTP method to change the value within the field name of "Status" once 2 buttons has been interacted in the client side, which are "Accept" and "Decline". 
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        let {Student_id, Status} = req.params //Defining the variables of "Student_id" and "Status" which is been requested to get the parsed value from the URL link
        const db = client.db("Application_Form")
        const studentProgressCollection = db.collection("Application_Form")
        const findUser = await studentProgressCollection.findOne({Student_id: Student_id}) //Defining "studentProgressCollection" which is used to find the student id, which checks if the student exists before it updates the field 
        if(findUser){ //Using if statement to process if student exists (refered to "findUser" variable)
            const insertStatus = await studentProgressCollection.updateOne({Student_id: Student_id},{$set: {Status: Status}}) //Defining "insertStatus" variable to set the "Status" field value "Accept" or "Decline" which is refered to the client side of the system. 
            return res.status(201).json({"Message": "Student Status has now been updated"}) //It sends the response message with status code of "201" which means that request was successfull and field has been updated
        }else{ //Using else statement to send a response message with status code "401" which means that it has failed to update the field
            res.status(401).json({"Error": "Sorry we cannot update this user"}) //Sends a response with error stating that it cannot update the user status code of "401"
        }

    }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({"Error": "There was an error inserting Status in database" }) //Sends a response with an error ("status(401)") with an error message, structured in JSON format
    }
})

module.exports = router; //Exporting the router so that it can be used in the main server (server.js)