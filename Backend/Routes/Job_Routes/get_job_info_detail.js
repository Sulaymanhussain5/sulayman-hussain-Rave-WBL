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

router.get("/:Job_Name/:Job_Type/:Industry_Name/:Project_Type", async(req,res) => { //Using "get" HTTP method to get values within collection "Job_Post" located in "Job" database MongoDb Server. It is used to make the job description page once students, staff or admin clicks in "Read Description" button . It takes parameters of "Job_Name", "Industry_Name", "Project_Type" and "Job_Type" which is used to find the values  in the collection and send the response to the client side, where it will be extracted  
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        let jobName = decodeURIComponent(req.params.Job_Name) //Defining "jobName" variable that decodes the URL value for Job Name (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Job_Name" by using ".params" attribute (req.param.Job_Name)
        let jobType = decodeURIComponent(req.params.Job_Type) //Defining "jobType" variable that decodes the URL value for Job Type (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Job_Type" by using ".params" attribute (req.param.Job_Type)
        let industryName = decodeURIComponent(req.params.Industry_Name) //Defining "industryName" variable that decodes the URL value for Industry Name (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Industry_Name" by using ".params" attribute (req.param.Industry_Name)
        let projectType = decodeURIComponent(req.params.Project_Type) //Defining "projectType" variable that decodes the URL value for Job Name (That was encoded once request was sent from client side), by using "decodeURIComponent" attribute. It gets the parameters of "Project_Type" by using ".params" attribute (req.param.Project_Type)
        const db = client.db("Job") //Defining "db" variable which is used to connect to the database "Job" by using "client.db" attribute
        const jobPostFormCollection = db.collection("Job_Post") //Defining "jobPostFormCollection" variable that connects to the collection name of "Job_Post" by using "db.collection" attribute
        const jobDetailSearch = await jobPostFormCollection.findOne({ //Defining "jobDetailSearch" dictiory list variable that finds job posts by fied of Job_Name, Industry_Name, Project_Type and Job_Type (key), where it uses extracted values from the URL which has been decoded (value). This is done by using ".findOne" arrtibute
            Job_Name: jobName, //Adding field name of "Job_Name" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "jobName" variable (value)
            Job_Type: jobType, //Adding field name of "Job_Type" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "jobType" variable (value)
            Industry_Name: industryName, //Adding field name of "Industry_Name" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "industryName" variable (value)
            Project_Type: projectType //Adding field name of "Project_Type" (Key) and value will be a value in the URL that has been passed by the client side, which has been decoded in "projectType" variable (value)
        })
    
        if(!jobDetailSearch){ //Uses an if statement to check if job details does not exists within the collection, where if not then it will return a 404 error message response
            return res.status(404).json() //Responding with a 404 error message by status code of "404"
        }else{ //If jobs details is found it will respond with a job details that it has been found which is converted into json format
            res.status(200).json(jobDetailSearch) //Responds with a job post data that has been sent to client side with a status code of "200"
        }

    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({err: "Fail to find the job name"}) //Sends a response with an error ("status(401)") with an error message, structured in JSON format
    }
})

module.exports = router; //Exporting the router so that it can be used in the main server (server.js)