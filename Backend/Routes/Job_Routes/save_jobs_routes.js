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
        console.log("There is an error running the Database", err)  //Printing error message in console 
    }
}
connectToDb() //Calls the function ("connectToDb") whilst express server is running 


router.post("/:Job_Name/:Industry_Name/:Job_Type/:Project_Type", async(req,res) => { //Using "post" HTTP method which updates the field "Number_Of_Interest" by incrementing the value by 1 every time "Save" button is pressed. It uses  collection "Job_Post" located in "Job" database MongoDb Server. It takes parameters of "Job_Name", "Industry_Name", "Project_Type" and "Job_Type" which is used to integrate these values in "Job_Interest" collection once it has been saved and values has been incremented in "Job_Post" collection
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        let jobName = decodeURIComponent(req.params.Job_Name) //Defining "jobName" variable that decodes the URL value for Job Name (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Job_Name" by using ".params" attribute (req.param.Job_Name)
        let industryName = decodeURIComponent(req.params.Industry_Name) //Defining "industryName" variable that decodes the URL value for Industry Name (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Industry_Name" by using ".params" attribute (req.param.Industry_Name)
        let projectType = decodeURIComponent(req.params.Project_Type) //Defining "projectType" variable that decodes the URL value for Project Type (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Project_Type" by using ".params" attribute (req.param.Project_Type)
        let jobType = decodeURIComponent(req.params.Job_Type) //Defining "jobType" variable that decodes the URL value for Job Type (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Job_Type" by using ".params" attribute (req.param.Job_Type)


        const db = client.db("Job") //Defining "db" variable which is used to connect to the database "Job" by using "client.db" attribute 
        const saveJobCollection = db.collection("Job_Post") //Defining "saveJobCollection" variable that connects to the collection name of "Job_Post" by using "db.collection" attribute
        const addSaveJobs = db.collection("Job_Interest") //Defining "addSaveJobs" variable that connects to the collection name of "Job_Interest" by using "db.collection" attribute

        const saveJobDetail = { //Defining "saveJobDetail" dictionary list variable that creates a object which will be stored in the collection, once the endpoint has beem called. It contains a key (field name) and value (value that will be inserted by the field name)
            Job_Name: jobName, //Adding field name of "Job_Name" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "jobName" variable (value)
            Industry_Name: industryName, //Adding field name of "Industry_Name" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "industryName" variable (value)
            Job_Type: jobType, //Adding field name of "Job_Type" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "jobType" variable (value)
            Project_Type: projectType //Adding field name of "Project_Type" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "projectType" variable (value)
        }
        
        const checkIfJobExist = await saveJobCollection.findOne({Job_Name: jobName}) //Defining "checkIfJobExist" variable that is used to find the job that exists in the list before it increments the interest value in  "Number_Of_Interest" field

        if(checkIfJobExist){ //Uses if statement to check if job exists, where if yes then it will increment the value by 1 by using "$inc" method in mongodb in collection "Job_Post" and it saves the jobs in another collection "Job_Interest" which will be used in student account page where they can view their saved jobs 
            const increaseNumber = await saveJobCollection.updateOne({"Job_Name": jobName}, {$inc:{"Number_Of_Interest": 1}}) //Using ".updateOne" attribute to use JSON format where it has 2 attribute which is finding if the job exists which checks the job name field ({"Job_Name": jobName}) and selecting which field to update once job name has been found ({"Number_Of_Interest": 1}) 
            addSaveJobs.insertOne(saveJobDetail) //Using ".insertOne" attribute to add saved jobs in "Job_Interest" collection
            return res.send({"message": "Number has been added"}) //Sends a response to front end that job has been added 

        } else{ //Uses else statement to perform an action once jobs cannot be found which is to display a 401 error by setting status code by "401" and send a message in json format
            return res.status(401).json({"Message": "Job has not been added"}) //Sending response to front end that job is not added, once it cannot find the job
        }
        

    }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(500).json({err: "Error"}) //Sends a response with an error ("status(500)") with an error message, structured in JSON format
    }
       
})

module.exports = router; //Exporting the router so that it can be used in the main server (server.js)