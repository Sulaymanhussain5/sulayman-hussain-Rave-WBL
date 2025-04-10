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

router.post("/", async (req, res) => { //Using "post" method to find requested job search from client side (front end) using  database of "Job", which has an endpoint of "/" with the "async" function which means that it can handle multiple of tasks without stopping other tasks, and "req(request - used to request the data in the client side) and "res(respond - used to send reponse in the client side )"
    try { //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const { searchQuery } = req.body; //Defining a variable "searchQuery" with dictionary json structure where it request  the students or staff job search value from the client side
        const db = client.db("Job"); //Defining "db" variable to connect to the database name "Job" which is found in my mongodb server
        const jobPostFormCollection = db.collection("Job_Post"); //Defining "jobPostFormCollection" variable which uses the Job database to connect to collection name "Job_Post"

        const getAllJobs = await jobPostFormCollection.find().toArray() //Defining "getAllJobs" variable that finds all the data within the "Job Post" collection (".find") whuch is converted to array ("toArray()") which makes list of job posts 
        const convertSearchToLowerCase = searchQuery.toLowerCase() //Defining "convertSearchToLowerCase" to convert the requested search value that was extracted from the client side to lower case ("toLowerCase") which avoids case sensative

        //Defining "jobVacncies" variable to filter the list of job searches into Job Name, Industry Name, Job Course and Project Type once students or staff types a value in search bar, each filter is represented as a value "job" 
        const jobVacancies = getAllJobs.filter(job => 
            job.Job_Name.toLowerCase().includes(convertSearchToLowerCase)|| //Converts value within "Job_Name" field to lower case ("toLowerCase") which matches with the student or staff value inputed in search box, it checks if the value inserted by student or staff is matched with word or phase in the "Job_Name" field (".includes(convertSearchToLowerCase)"). It uses "||" to get an additional condition ("or")
            job.Industry_Name.toLowerCase().includes(convertSearchToLowerCase)|| //Converts value within "Industry_Name" field to lower case ("toLowerCase") which matches with the student or staff value inputed in search box, it checks if the value inserted by student or staff is matched with word or phase in the "Industry_Name" field (".includes(convertSearchToLowerCase)") It uses "||" to get an additional condition ("or")
            job.Job_Course.toLowerCase().includes(convertSearchToLowerCase) || //Converts value within "Job_Course" field to lower case ("toLowerCase") which matches with the student or staff value inputed in search box, it checks if the value inserted by student or staff is matched with word or phase in the "Job_Course" field (".includes(convertSearchToLowerCase)") It uses "||" to get an additional condition ("or")
            job.Project_Type.toLowerCase().includes(convertSearchToLowerCase)||
            job.Job_Type.toLowerCase().includes(convertSearchToLowerCase)||
            job.Job_Location.toLowerCase().includes(convertSearchToLowerCase) //Converts value within "Project_Type" field to lower case ("toLowerCase") which matches with the student or staff value inputed in search box, it checks if the value inserted by student or staff is matched with word or phase in the "Project_Type" field (".includes(convertSearchToLowerCase)") 
        );


        res.json(jobVacancies);  //Sending a response in json format ("res.json") which dispays data of job post details 
    } catch (err) { //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log(err); //Printing error message in console 
        res.status(500).json({"ERROR":"We cannot find the job"}); //Sends a response with an error ("status(500)") with an error message, structured in JSON format
    }
});

module.exports = router; //Exporting the router so that it can be used in the main server (server.js)



