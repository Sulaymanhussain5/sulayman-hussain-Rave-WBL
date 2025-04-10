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


router.post("/", async(req,res) =>{ //Using "post" request to integrate requested job post form from the client side to the database, which has an endpoint of "/" with the "async" function which means that it can handle multiple of tasks without stopping other tasks, and "req(request - used to request the data in the client side) and "res(respond - used to send reponse in the client side )"
    try{
        const jobPostForm = { //Defining "jobPostForm" variable/ object that deals with handling receiving the requested input field from the front end (client side) sent by staff 
            Image: req.body.Image, //Adding  field  name of "Image" in Mongodb with the value of requested image data that was sent in client side(req.body.Image)
            Job_Name: req.body.Job_Name, //Adding  field  name of "Job_Name" in Mongodb with the value of requested Job name  data that was sent in client side(req.body.Job_Name)
            Job_Type: req.body.Job_Type, //Adding  field  name of "Job_Type" in Mongodb with the value of requested job type data that was sent in client side(req.body.Job_Type)
            Job_Location: req.body.Job_Location, //Adding  field  name of "Job_Location" in Mongodb with the value of requested job location data that was sent in client side(req.body.Job_Location)
            Job_Course: req.body.Job_Course, //Adding  field  name of "Job_Course" in Mongodb with the value of requested job course data that was sent in client side(req.body.Job_Course)
            Required_Skills: req.body.Required_Skills, //Adding  field  name of "Required_Skills" in Mongodb with the value of requested required skills data that was sent in client side(req.body.Required_Skills)
            Project_Type: req.body.Project_Type, //Adding  field  name of "Project_Type" in Mongodb with the value of requested project type data that was sent in client side(req.body.Project_Type)
            jobRequirement: req.body.jobRequirement, //Adding  field  name of "jobRequirement" in Mongodb with the value of requested job requirement data that was sent in client side(req.body.jobRequirement)
            Job_Description: req.body.Job_Description, //Adding  field  name of "Job_Description" in Mongodb with the value of requested job description data that was sent in client side(req.body.Job_Description)
            industryOffer: req.body.industryOffer, //Adding  field  name of "industryOffer" in Mongodb with the value of requested industry offer data that was sent in client side(req.body.industryOffer)
            Meeting_Type: req.body.Meeting_Type, //Adding  field  name of "Meeting_Type" in Mongodb with the value of requested meeting type data that was sent in client side(req.body.Meeting_Type)
            Industry_Name: req.body.Industry_Name, //Adding  field  name of "Industry_Name" in Mongodb with the value of requested industry name  data that was sent in client side(req.body.Industry_Name)
            Industry_Email_Address: req.body.Industry_Email_Address, //Adding  field  name of "Industry_Email_Address" in Mongodb with the value of requested industry email address data that was sent in client side(req.body.Industry_Email_Address)
            Industry_Job_Role: req.body.Industry_Job_Role, //Adding  field  name of "Industry_Job_Role" in Mongodb with the value of requested industry job role data that was sent in client side(req.body.Industry_Job_Role)
            Start_Date:req.body.Start_Date , //Adding  field  name of "Start_Date" in Mongodb with the value of requested start date data that was sent in client side(req.body.Start_Date)
            End_Date: req.body.End_Date, //Adding  field  name of "End_Date" in Mongodb with the value of requested end date data that was sent in client side(req.body.End_Date)
            Number_Of_Interest: 0 //Adding  field  name of "Number_Of_Interest" in Mongodb with the value set to 0
            
        }
    
        const db = client.db("Job") //Defining "db" variable to connect to the database name "Job" which is found in my mongodb server
        const jobPostFormCollection = db.collection("Job_Post") //Defining "jobPostFormCollection" variable which uses the Job database to connect to collection name "Job_Post"
        const insertJobPost = jobPostFormCollection.insertOne(jobPostForm) //Using "insertOne" attribute to insert the data which was sent in the client side to the database (referred to the variable "jobPostForm")
        if(insertJobPost){ //Uses an if statement to check if job form data has been inserted in collection of "Job_Post" where if yes then it will return a response of status code "201" indictating form has been added in collection
            return res.status(200).json({message: "We have received your job form"}) //Sending response message to client side with status code of "200 (success)" in json format with key("Message") and value ("custome message written")
        }else{ //Uses an else statement which gives an error once it fail to integrate a form in collection 
            return res.status(401).json({err: "There was a error receving the form"}) //Returns response a "401" status code error indicating that it has failed to insert a form in the datbase
        }

    }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({err: "There was a error connecting to the database"}) //Sends a response with an error ("status(500)") with an error message, structured in JSON format
    }
   
    
})


module.exports = router; //Exporting the router so that it can be used in the main server (server.js)
