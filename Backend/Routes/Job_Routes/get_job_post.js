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


router.get("/", async(req,res) => { //Using "get" HTTP method to get values within collection "Job_Post" located in "Job" database MongoDb Server. It is used to make the job portal page dynamic, by adding job vacancy container which is extracted in this collection
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const db = client.db("Job") //Defining "db" variable which is used to connect to the database "Job" by using "client.db" attribute
        const jobPostFormCollection = db.collection("Job_Post") //Defining "jobPostFormCollection" variable that connects to the collection name of "Job_Post" by using "db.collection" attribute
        const job_Post = await jobPostFormCollection.find().toArray(); //Defining "job_post" variable that finds all the data within the "Job Post" collection (".find") whuch is converted to array ("toArray()") which makes list of job posts 
        if(job_Post){
            return res.status(200).json(job_Post) //Responds with a job post data that has been sent to client side with a status code of "200"
        }else{
            return res.status(401).json({err: "There was a problem getting job posts"})
        }
    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({err: "Fail to get the data from the job form"}) //Sends a response with an error ("status(401)") with an error message, structured in JSON format
    }
})


module.exports = router; //Exporting the router so that it can be used in the main server (server.js)