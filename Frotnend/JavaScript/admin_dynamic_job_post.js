async function jobPost(){  //Defining the function of "JobPost" which handles adding job vacancy which has been extracted from the database in MongoDb (backend) in database of "Job" in "Job_Post" collection, where it integrates data of logo, job name, industry name, job location, meeting type and job type to make a component
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const getJobDetail = await fetch("http://localhost:8080/get-job-post"); //Defining a variable  "getJobDetail"  which makes request to the backend route with endpoint of "get-job-post" ("fetch") and it makes sure that fetching is done before moving to next line ("await")
        const job = await getJobDetail.json(); //Defining a variable "job" which converts the received job data (taken in "getJobDetail" variable) into json, which makes the data readable and structured making it easier for the machine to process and extract data
        const jobContainer = document.getElementById("job-vacancy-container"); //Defining a varable "jobContainer" which gets the div element name "job-vacancy-container" which is integrated in HTML document "1.0_studentPortal_homepage.html" which is inserted as an ID ("getElementById")

        console.log("Database received", job) //It prints the job items in JSON format ("job")as a console, which will be displayed in devtools in browsers (Chrome, Edge, etc)

        job.forEach(jobListItem => { //Using ".forEach" attribute which is used to iterates through the data of Job details which has been converted into JSON in the variable of "job" to pick out data of Image, Job Name, Industry Name, Job Location and Meeting Type. Each iterated job is represented as name "jobListItem" 
            const jobList = document.createElement('div'); //During the iteration stage, it creates a element of "div" which will be used to create a job vacancy container that holds job details 
            jobList.classList.add("job-container") //Using attribute "classList" to add a class in the div element named "job-container"


            //Using attrribute "innerHTML" to add a HTML in Javascript within div element. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}. 
            jobList.innerHTML = ` 
                <img src="${jobListItem.Image}" width="183px" height="118px"> 
                <h1 style="font-size: 32;">${jobListItem.Job_Name}</h1> 
                <h2 style="color: #938484; font-size: 24;">${jobListItem.Industry_Name}</h2> 
                <h2 style="color: #D27E7E; font-size: 24;">${jobListItem.Job_Location}</h2> 
                <h2 style="color: #604F4F; font-size: 24;">${jobListItem.Meeting_Type}</h2> 
                <h2 style="color: #44B527; font-size: 24;">${jobListItem.Job_Type}</h2> 
                <a href="3.3_admin _dynamic_job_description.html?Job_Name=${encodeURIComponent(jobListItem.Job_Name)}&Industry_Name=${encodeURIComponent(jobListItem.Industry_Name)}&Job_Type=${encodeURIComponent(jobListItem.Job_Type)}&Project_Type=${jobListItem.Project_Type}"><button class="description-button">READ DESCRIPTION</button>
            `
            jobContainer.appendChild(jobList) //After adding all the tag in the "div" element, this is being added in the "job-vacancy-container" by using attribute "appendChild" which is stored in variable "jobContainer"

        })
    }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log(err) //Printing message in console 
    }
}

window.onload = jobPost; //Using "window.onload" to load saved job vacancy once student / job portal homepage is refreshed