const express = require('express') //Defining "express" variable that adds the express library in the document
const router = express.Router(); //Defining "router" variable that adds the router in the express by using ".Router" attribute which requests in job_post_routes document

const {MongoClient} = require('mongodb'); //Defining variable "MongoClient" variable that adds mongodb library in the document, which is used to handle data in MongoDb database server 
const url = "mongodb+srv://hsulayman29:0jgE3JIDBWUs2FVU@rave-wbl.bpntf.mongodb.net/" //Defining "url" variable that inputs the link of Mongodb server
const client = new MongoClient(url) //Defining "client" variable that creates a MongoClient whuch is used to interact with the MongoDb server

const connectToDb = async()=>{ //Defining "connectToDb" variable that creates a variable that connects to the MongoDb server
    try{ //Using try and catch block which tries to extract the data  in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        await client.connect() //Using ".connect" attribute to tell the programme to connect to the mongodb server link that it has been provided
        console.log("Your Database is running...") //Once the MongoDb server is connected then it will display a console message stating that database is running
    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log("There is an error running the Database", err) //Printing error message in console 
    }
}
connectToDb() //Calls the function ("connectToDb") whilst express server is running 


router.delete("/:Job_Name", async(req,res) =>{ //Using "delete" HTTP method to delete document which is inserted in collection "Job_Post" located in "Job" database MongoDb Server. It takes parameters of "Job_Name" which is used to find the job name in the collection and delete the document once job name has been detected
    try{
        JobName = decodeURIComponent(req.params.Job_Name) //Defining "jobName" variable that gets the value of "Job_Name" in the URL by using "req.params.Job_Name" attribute
        const db = client.db("Job") //Defining "db" variable which is used to connect to the database "Job" by using "client.db" attribute 
        const jobPostFormCollection = db.collection("Job_Post") //Defining "jobPostFormCollection" variable that connects to the collection name of "Job_Post" by using "db.collection" attribute
        const deleteJob = jobPostFormCollection.deleteOne({Job_Name: JobName}) //Using "deleteOne" attribute to delete the value in the "Job_Name" field once staff has deleted the job in the client side, where it uses "jobName" which is the value that was passed in the URL
        if(deleteJob){ //Uses an if statement to check if application  form data has been inserted in collection of "Application_Form" where if yes then it will return a response of status code "201" indictating form has been added in collection
            return res.status(200).json({"Message": "Job has been deleted"}) //Sending response message to client side with status code of "200 (success)" in json format with key("Message") and value ("custome message written")
        }else{ //Uses an else statement which gives an error once it fail to integrate a form in collection 
            return res.status(401).json({err: "There was a problem deleting the job"}) //Returns response a "401" status code error indicating that it has failed to insert a form in the datbase
        }

    }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({err:"There was a problem connecting to the server"}) //Sends a response with an error ("status(401)") with an error message, structured in JSON format
    }
    
    
})


module.exports = router; //Exporting the router so that it can be used in the main server (server.js)