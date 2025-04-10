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


router.post("/:Project_Type/:Job_Type/:Job_Course", async (req, res) => { //Using "get" request to get requested filtered option from client side (front end) using  database of "Job", which has an endpoint of "/" with the "async" function which means that it can handle multiple of tasks without stopping other tasks, and "req(request - used to request the data in the client side) and "res(respond - used to send reponse in the client side )"
    try { //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const db = client.db("Job"); //Defining "db" variable to connect to the database name "Job" which is found in my mongodb server
        const jobPostFormCollection = db.collection("Job_Post"); //Defining "jobPostFormCollection" variable which uses the Job database to connect to collection name "Job_Post"
        const {Project_Type, Job_Type, Job_Course} = req.params //Defining a variable which includes the following value added in the URL for filter selection ("Project_Type", "Job_Type" and "Job_Type") and server extracts the value by using "req.param"

        const filterJobVacancy = {} //Defines a dictionary list variable "filterJobVacancy" which stores an object

        if(Project_Type && Project_Type != "Project Type")filterJobVacancy.Project_Type = Project_Type; //Adding if statement to process if the value in Project_Type that student or staff has selected ("Project_Type") and it is not a default selection which is Project_Type in filter tab ("Project_Type != "Project_Type") then it will be added to the dictionary list with the key as "Project_Type" and value of the value that students or staff has selected 
        if(Job_Type && Job_Type != "Job Type")filterJobVacancy.Job_Type = Job_Type; //Adding if statement to process if the value in Job_Type that student or staff has selected ("Job_Type") and it is not a default selection which is Job_Type in filter tab ("Job_Type != "Job_Type") then it will be added to the dictionary list with the key as "Job_Type" and value of the value that students or staff has selected 
        if(Job_Course && Job_Course != "Course")filterJobVacancy.Job_Course = Job_Course; //Adding if statement to process if the value in Job_Course that student or staff has selected ("Job_Course") and it is not a default selection which is Job_Course in filter tab ("Job_Course != "Job_Course") then it will be added to the dictionary list with the key as "Job_Course" and value of the value that students or staff has selected 

        const jobVacancies = await jobPostFormCollection.find(filterJobVacancy).toArray() //Defining "getAllJobs" variable that finds all the data within the "Job_Post" collection (".find") whuch is converted to array ("toArray()") which makes list of job posts 
    
        res.json(jobVacancies); //Sending a response in json format ("res.json") which dispays data of job post details 
    } catch (err) { //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log(err); //Printing error message in console
        res.status(500).json({"Error":"We cannot find the job"}); //Sends a response with an error ("status(500)") with an error message, structured in JSON format
    }
});

module.exports = router; //Exporting the router so that it can be used in the main server (server.js)