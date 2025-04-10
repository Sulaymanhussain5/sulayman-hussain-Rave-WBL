const express = require('express'); //Defining "express" variable that adds the express library in the document 
const cors = require("cors"); //Defining "cors" variable that adds the CORS (Cross Origin Resource Sharing) library in the document, which handles the requests from the front end side of the system
const app = express(); //Defining "app" variable that creates a express app 
const port = 8080; //Defining "port" variable that set a port number of "8080" which is used as a main server which receives requests to the front end


const loginRoutes = require('./Routes/login_routes') //Defining "loginRoutes" which adds the directory to  login routes
const signUpRoutes = require('./Routes/signup_routes') //Defining "signUpRoutes" which adds the directory to  sign up routes
const searchJobRoute = require('./Routes/Job_Routes/search_routes') //Defining "searchJobRoute" which adds the directory to  job search routes
const searchStudentRoute = require('./Routes/Student_Routes/student_search_route') //Defining "searchStudentRoute" which adds the directory to  student search routes
const filterJobRoute = require('./Routes/Job_Routes/filter_job_routes') //Defining "filterJobRoute" which adds the directory to  job filtering  routes
const filterStudentRoute = require('./Routes/Student_Routes/filter_student_routes') //Defining "filterStudentRoute" which adds the directory to  student application form filtering routes
const applicationFormRoute = require('./Routes/Job_Routes/application_form_routes') //Defining "applicationFormRoute" which adds the directory to the students application form routes
const jobPostRoute = require('./Routes/Job_Routes/job_post_routes') //Defining "jobPostRoute" which adds the directory to  job post routes
const saveJobsRoute = require("./Routes/Job_Routes/save_jobs_routes") //Defining "saveJobsRoute" which adds the directory to  saving jobs routes
const deleteJobPost = require("./Routes/Job_Routes/delete_job_route") //Defining "deleteJobPost" which adds the directory to  deleting jobs routes
const getJobPost = require("./Routes/Job_Routes/get_job_post") //Defining "getJobPost" which adds the directory to  getting job post routes 
const getJobDescriptionDetail = require("./Routes/Job_Routes/get_job_info_detail") //Defining "getJobName" which adds the directory to to  getting job description data routes 
const getStudentProgressRoute = require("./Routes/Student_Routes/get_student_progress") //Defining "getStudentProgressRoute" which adds the directory to the login routes
const getJobInterestRoute = require("./Routes/Job_Routes/get_job_interest_route") //Defining "getJobInterestRoute" which adds the directory to getting saved jobs routes


app.use(express.json()) //Using ".use" HTTP method to input the middleware (express.json) in every request that is made

app.use(cors({ //Using ".use" HTTP method to use the local host 127.0.0.1:5500 ("127.0.0.1" (number that states that server is used in local drive) and "5500"(my front end server number)) where it will get response to this server
    origin: 'http://127.0.0.1:5500', //Using origin to get the URL of my front end server which is used to communicate with this server such as receiving requests from the client side
    credentials: true //Using credetials to allow authorisation. By setting the credentials to true it will give the authorisation to the front end (when user login) (can also be used for cookies)
}))






app.use("/login", loginRoutes) //Using ".use" HTTP method to define the login route. It has 2 attribute for calling the endpoint of the route ("/login") and variable name which stores the directory of this route ("loginRoutes")
app.use("/add-user", signUpRoutes) //Using ".use" HTTP method to define the sign up route. It has 2 attribute for calling the endpoint of the route ("/add-user") and variable name which stores the directory of this route ("signUpRoutes")
app.use("/search-student", searchStudentRoute) //Using ".use" HTTP method to define the student application form search route. It has 2 attribute for calling the endpoint of the route ("/search-student") and variable name which stores the directory of this route ("searchStudentRoute")
app.use("/search-job-post", searchJobRoute) //Using ".use" HTTP method to define the job searching route. It has 2 attribute for calling the endpoint of the route ("/search-job-post") and variable name which stores the directory of this route ("searchJobRoute")
app.use("/filter-job-post", filterJobRoute) //Using ".use" HTTP method to define the job filtering route. It has 2 attribute for calling the endpoint of the route ("/filter-job-post") and variable name which stores the directory of this route ("filterJobRoute")
app.use("/filter-student", filterStudentRoute) //Using ".use" HTTP method to define the student application form filtering route. It has 2 attribute for calling the endpoint of the route ("/filter-student") and variable name which stores the directory of this route ("filterStudentRoute")
app.use("/application-form/", applicationFormRoute)//Using ".use" HTTP method to define the job application form route. It has 2 attribute for calling the endpoint of the route ("/application-form") and variable name which stores the directory of this route ("applicationFormRoute")
app.use("/job_post", jobPostRoute) //Using ".use" HTTP method to define the job post route. It has 2 attribute for calling the endpoint of the route ("/job_post") and variable name which stores the directory of this route ("jobPostRoute")
app.use("/save-jobs/", saveJobsRoute) //Using ".use" HTTP method to define the save jobs route. It has 2 attribute for calling the endpoint of the route ("/save-jobs") and variable name which stores the directory of this route ("saveJobsRoute")
app.use("/delete_job_post/", deleteJobPost) //Using ".use" HTTP method to define the delete jobs route. It has 2 attribute for calling the endpoint of the route ("/delete_job_post") and variable name which stores the directory of this route ("deleteJobPost")
app.use("/get-job-post", getJobPost) //Using ".use" HTTP method to define the getting job post route. It has 2 attribute for calling the endpoint of the route ("/get-job-post") and variable name which stores the directory of this route ("getJobPost")
app.use("/get-job-post/", getJobDescriptionDetail) //Using ".use" HTTP method to define the getting job description details route. It has 2 attribute for calling the endpoint of the route ("/get-job-post") and variable name which stores the directory of this route ("getJobDescriptionDetail")
app.use("/get-student-progress", getStudentProgressRoute)  //Using ".use" HTTP method to define the getting student progress route. It has 2 attribute for calling the endpoint of the route ("/get-student-progress") and variable name which stores the directory of this route ("getStudentProgressRoute")
app.use("/job-interest", getJobInterestRoute) //Using ".use" HTTP method to define the getting saved jobs route route. It has 2 attribute for calling the endpoint of the route ("/job-interest") and variable name which stores the directory of this route ("getJobInterestRoute")


app.listen(port, () => { //Server listening to the port, when server is runned.
    console.log("SERVER 8080 IS RUNNING") //Displays the message when server gets the port
})
