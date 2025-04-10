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
connectToDb()  //Calls the function ("connectToDb") whilst express server is running 




router.get("/", async(req,res) => { //Using "get" HTTP method to get values within collection "Job_Interest" located in "Job" database MongoDb Server.
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const db = client.db("Job") //Defining "db" variable which is used to connect to the database "Job" by using "client.db" attribute
        const saveJobsCollection = db.collection("Job_Interest") //Defining "jobPostFormCollection" variable that connects to the collection name of "Job_Interest" by using "db.collection" attribute
        const jobInterest = await saveJobsCollection.find().toArray(); //Defining "jobInterest" variable that finds the job details in array, which uses ".toArray"
        res.status(200).json(jobInterest) //Responds with a job post data that has been sent to client side with a status code of "200"

    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({err: "There is an error"}) //Sends a response with an error ("status(500)") with an error message, structured in JSON format
    }
    
})

router.delete("/:Job_Name", async(req,res) => { //Using "delete" HTTP method to delete document which is inserted in collection "Job_Interest" located in "Job" database MongoDb Server. It takes parameters of "Job_Name" which is used to find the job name in the collection and delete the document once job name has been detected 
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const jobName = decodeURIComponent(req.params.Job_Name) //Defining "jobName" variable that gets the value of "Job_Name" in the URL by using "req.params.Job_Name" attribute
        const db = client.db("Job") //Defining "db" variable which is used to connect to the database "Job" by using "client.db" attribute
        const studentAccountCollection = db.collection("Job_Interest") //Defining "studentAccountCollection" variable that connects to the collection name of "Job_Interest" by using "db.collection" attribute
        const deleteJobInterest = await studentAccountCollection.deleteOne({Job_Name: jobName}) //Using "deleteOne" attribute to delete the value in the "Job_Name" field once student has deleted the saved job in the client side, where it uses "jobName" which is the value that was passed in the URL
        if(deleteJobInterest){
            return res.status(200).json({"Message": "Your Saved Job has been removed from the list"})
        }else{
            return res.status(401).json({err: "There was a problem deleting the job"})
        }

    }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({err: "There was a problem connecting to the server"}) //Sends a response with an error ("status(401)") with an error message, structured in JSON format
    }
})



module.exports = router; //Exporting the router so that it can be used in the main server (server.js)
