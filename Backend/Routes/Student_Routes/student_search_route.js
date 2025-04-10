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



router.post("/", async(req,res) => {
    try{
        const { studentSearchBox } = req.body;
        const db = client.db("Application_Form");
        const studentProgressCollection = db.collection("Application_Form");
        const getStudentDetails = await studentProgressCollection.find().toArray()
        const convertSearchToLowerCase = studentSearchBox.toLowerCase()

        const studentDetails = getStudentDetails.filter(student => 
            student.First_Name.toLowerCase().includes(convertSearchToLowerCase)||
            student.Last_Name.toLowerCase().includes(convertSearchToLowerCase)||
            student.Course.toLowerCase().includes(convertSearchToLowerCase)||
            student.Job_Type.toLowerCase().includes(convertSearchToLowerCase)||
            student.Project_Type.toLowerCase().includes(convertSearchToLowerCase)        
        );


        res.json(studentDetails);
    }catch(err){
        console.log(err)
        res.status(500).json({"Error": err})
    }
});


module.exports = router;