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



router.post("/:Job_Name/:Industry_Name/:Job_Type/:Project_Type", async(req,res) => { //Using "post" HTTP method to add students application form in the collection "Application_Form" located in "Application_Form" database MongoDb Server. It takes parameters of "Job_Name", "Industry_Name", "Project_Type" and "Job_Type" which is integrated in the collection 
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const Job_Name = decodeURIComponent(req.params.Job_Name) //Defining "Job_Name" variable that decodes the URL value for Job Name (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Job_Name" by using ".params" attribute (req.param.Industry_Name)
        const Industry_Name = decodeURIComponent(req.params.Industry_Name) //Defining "Industry_Name" variable that decodes the URL value for Industry Name (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Industry_Name" by using ".params" attribute (req.param.Industry_Name)
        const Job_Type = decodeURIComponent(req.params.Job_Type) //Defining "Job_Type" variable that decodes the URL value for Job Type (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Job_Type" by using ".params" attribute (req.param.Job_Type)
        const Project_Type = decodeURIComponent(req.params.Project_Type) //Defining "Project_Type" variable that decodes the URL value for Project Type (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Project_Type" by using ".params" attribute (req.param.Project_Type)

        const applicationForm = { //Defining "applicationForm" dictionary list variable that creates a object which will be stored in the collection, once the endpoint has beem called. It contains a key (field name) and value (value that will be inserted by the field name)
            Job_Name: Job_Name, //Adding field name of "Job_Name" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "Job_Name" variable (value)
            Industry_Name: Industry_Name, //Adding field name of "Industry_Name" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "Industry_Name" variable (value)
            Job_Type: Job_Type, //Adding field name of "Job_Type" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded  in "Job_Type" variable (value)
            Project_Type: Project_Type, //Adding field name of "Project_Type" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "Project_Type" variable (value)
            Student_id: req.body.Student_id, //Adding field name of "Student_id" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Student_id") (value)
            First_Name: req.body.First_Name, //Adding field name of "First_Name" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.First_Name") (value)
            Middle_Name: req.body.Middle_Name, //Adding field name of "Middle_Name" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Middle_Name") (value)
            Last_Name: req.body.Last_Name, //Adding field name of "Last_Name" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Last_Name") (value)
            Student_Email: req.body.Student_Email, //Adding field name of "Student_Email" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Student_Email") (value)
            Course: req.body.Course, //Adding field name of "Course" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Course") (value)
            Gender: req.body.Gender, //Adding field name of "Gender" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Gender") (value)
            Avalability: req.body.Avalability, //Adding field name of "Avalability" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Avalability") (value)
            Skills: req.body.Skills, //Adding field name of "Skills" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Skills") (value)
            Experience_Name :req.body.Experience_Name , //Adding field name of "Experience_Name" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Experience_Name") (value)
            Name_of_certification: req.body.Name_of_certification, //Adding field name of "Name_of_certification" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Name_of_certification") (value)
            Document: req.body.Document, //Adding field name of "Document" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Document") (value)
            Link: req.body.Link, //Adding field name of "Link" (key) and value will be the value that students has inputed. It uses ".body" attribute to get the students value in the client side ("req.body.Link") (value)
            Status: null //Adding field name of "Status" (key) and value is set to "Null" where this value will update once buttons of "Accept" or "Decline" is clicked by Admin (value)
        }
        const db = client.db("Application_Form") //Defining "db" variable which is used to connect to the database "Application_Form" by using "client.db" attribute 
        const ApplicationFormCollection = db.collection("Application_Form") //Defining "ApplicationFormCollection" variable that connects to the collection name of "Application_Form" by using "db.collection" attribute
        const insertApplication = ApplicationFormCollection.insertOne(applicationForm) //Defining "insertApplication" variable that uses "insertOne" attribute to insert the object in the collection once students has submitted their application form and this endpoint has been called 
        if(insertApplication){ //Using if statement to check if datas (Application form) has been added in the database server
            return res.status(200).json({"Message": "Application form has been submitted"}) //Sends a response to the client side with status code "200" which shows that application form has been inserted
        }else{ //Uses else statement to give an error in inserting application form which uses status code "401"
            return res.status(401).json({err: "There was a problem sending the application form"}) //Sending a response with status code "401"
        }

    }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({err: "There was a problem connecting to the error"}) //Sends a response with an error ("status(401)") with an error message, structured in JSON format
    }
    

})

module.exports = router; //Exporting the router so that it can be used in the main server (server.js)