const express = require('express') //Defining "express" variable that adds the express library in the document 
const router = express.Router(); //Defining "router" variable that adds the router in the express by using ".Router" attribute which requests in job_post_routes document 

const {MongoClient} = require('mongodb'); //Defining variable "MongoClient" variable that adds mongodb library in the document, which is used to handle data in MongoDb database server 
require('dotenv').config() //Adding "dotenv" or ".env" which generates the jwt secret key (used for adding a secure password which keeps users details secure when using JWT)
const jwt = require('jsonwebtoken'); //Defining "jwt" variable that adds "jsonwebtoken", which is used to insert an access token for user authentication
const cookie = require('cookie-parser') //Defining "cookie" variable that adds "cookie-parser" library which adds a jwt token in cookie tan in devtool (found in Chrome and Edge browser)
const url = "mongodb+srv://hsulayman29:0jgE3JIDBWUs2FVU@rave-wbl.bpntf.mongodb.net/" //Defining "url" variable that inputs the link of Mongodb server
const client = new MongoClient(url)

const connectToDb = async()=>{ //Defining "connectToDb" variable that creates a variable that connects to the MongoDb server
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        await client.connect() //Using ".connect" attribute to tell the programme to connect to the mongodb server link that it has been provided
        console.log("Your Database is running...") //Once the MongoDb server is connected then it will display a console message stating that database is running
    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log("There is an error running the Database", err) //Printing error message in console 
    }
}
connectToDb() //Calls the function ("connectToDb") whilst express server is running

router.post("/", async(req,res) => { //Using ".post" HTTP method to integrate students and staffs account details in the collection "login_detail" located in "Account" database
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const db = client.db("Account") //Defining "db" variable which is used to connect to the database "Account" by using "client.db" attribute 
        const userLoginDetails = db.collection("login_detail") //Defining "userLoginDetails" variable which is used to connect to collection "login_detail" by using "client.db" attribute  
        const findUser = await userLoginDetails.findOne({ //Defining "findUser" variable that is used to find the user input data in the collection name "login_detail" 
            EmailAddress: req.body.EmailAddress, //Adding field name of "Password" (key) and value will be the value that user has inputed. It uses ".body" attribute to get the user value in the client side ("req.body.Password") (value)
            Password: req.body.Password, //Adding field name of "Password" (key) and value will be the value that user has inputed. It uses ".body" attribute to get the user value in the client side ("req.body.Password") (value)
            userType: req.body.userType //Adding field name of "Password" (key) and value will be the value that user has inputed. It uses ".body" attribute to get the user value in the client side ("req.body.Password") (value)
        })
        if(findUser){ //Uses an if statement to check if user exists in the collection before adding thir details in the sysytem where if yes, then it will provide a jwt token and send a response message with status code of "201" indicating that process was a success
            const signToken = jwt.sign(findUser, process.env.JWT_SECRET, {expiresIn: "1h"}) //Defining "signToken" variable which is used to give the jwt token to users (.sign) which contains a payload (users detail), signature (JWT seceret key) and expiration time (set in 1 hour because users will use the system for long time when searching for jobs), 
            res.cookie("token", signToken,{httpOnly: true, secure: true, sameSite: "None"}) //Sending response in the cookie tab (.cookie) which includes the name of the cookie "token", cookie will only be accessed in the browser "httpOnly: true", making cookie avalable to secure connection in web sites like https ("secure: ture") and cookie can be used in browsers with "https" suported connection "sameSite: "None"
            return res.status(201).json({token: signToken, message: "You have logged in successfully"}) //Returning "201" status code resonse indicating tha account has been created, where it will display a jwt token detail (from "signToken" variable)
        } else { //Uses an else statement to respond  401 status  error to front end once users details was not found 
            return res.status(401).json({"Error": "We cannot find you in the database"}) //Returns a response with status code of "401" indicating that there is an error once student doesn not exist  in the collection
        }
        
    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        res.status(401).json({err: "Error"}) //Sends a response with an error ("status(401)") with an error message, structured in JSON format
    }
})




module.exports = router;  //Exporting the router so that it can be used in the main server (server.js)

