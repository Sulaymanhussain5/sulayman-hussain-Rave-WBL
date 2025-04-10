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

router.post("/:Project_Type/:Job_Type/:Course", async (req, res) => {//Using "post" HTTP method to find  students application form in the collection "Application_Form" located in "Application_Form" database MongoDb Server. It takes parameters of  "Project_Type", "Job_Type" and "Course" which uses these parameters to send filter choices to the backend and it looks for students details
    try { //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        
        const db = client.db("Application_Form"); //Defining "db" variable which is used to connect to the database "Application_Form" by using "client.db" attribute 
        const studentDetail = db.collection("Application_Form"); //Defining "studentDetail" variable which is used to connect to collection "Application_Form" by using "client.db" attribute 
        const {Project_Type, Job_Type, Course} = req.params //Defining a variable which includes the following value added in the URL for filter selection ("Project_Type", "Job_Type" and "Job_Type") and server extracts the value by using "req.param"

        const filterStudentDetail = {} //Defines a dictionary list variable "filterStudentDetail" which stores an object

        if(Project_Type && Project_Type != "Project Type")filterStudentDetail.Project_Type = Project_Type; //Adding if statement to process if the value in Project_Type that admin and staff has selected ("Project_Type") and it is not a default selection which is Project_Type in filter tab ("Project_Type != "Project_Type") then it will be added to the dictionary list with the key as "Project_Type" and value of the value that admin or staff has selected 
        if(Job_Type && Job_Type != "Job Type")filterStudentDetail.Job_Type = Job_Type; //Adding if statement to process if the value in Job_Type that admin and staff has selected ("Job_Type") and it is not a default selection which is Project_Type in filter tab ("Job_Type != "Job_Type") then it will be added to the dictionary list with the key as "Job_Type" and value of the value that admin or staff has selected 
        if(Course && Course != "Course")filterStudentDetail.Course = Course; //Adding if statement to process if the value in Course that admin and staff has selected ("Course") and it is not a default selection which is Course in filter tab ("Course != "Course") then it will be added to the dictionary list with the key as "Course" and value of the value that admin or staff has selected 

        const studentsItem = await studentDetail.find(filterStudentDetail).toArray() //Defining "studentsItem" variable that finds all the data within the "Application_Form" collection (".find") whuch is converted to array ("toArray()") which makes list of student application form 
        res.json(studentsItem); //Sending a response in json format ("res.json") which dispays data of student application form details 
    } catch (err) { //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log(err); //Printing error message in console
        res.status(500).json({"Error":"We cannot find the detail in the table"}); //Sends a response with an error ("status(500)") with an error message, structured in JSON format
    }
});



module.exports = router; //Exporting the router so that it can be used in the main server (server.js)