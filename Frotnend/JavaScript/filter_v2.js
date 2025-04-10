document.querySelectorAll(".filter").forEach(projectFilter => { //Uses "querySelectorAll" attribute to collect all class name with "filter" which is stored in <select> tag, if "filter" element has been detected then it will perform an event listener of "change" which is defined by "projectFilter"
    projectFilter.addEventListener("change", async function () { //Adding an event listener to "filter" component, which includes what event is being occured ("change") and action (function is created for the action)
        try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
            let jobVacanciesContainer = document.getElementById("job-vacancy-container") //Defining "jobVacancies" variable that collects element ID of <div> tag which contains list of job vacancy

            let filterSelect = { //Defining "filterSelect" variable which is used to track users interaction with the "filter" class
                Project_Type: document.querySelector(".filter:nth-of-type(1)").value, //Tracks students interaction with the filter tab in "project type" which has been inserted in first <select> tag ("nth-of-type(1) defines this")
                Job_Type: document.querySelector(".filter:nth-of-type(2)").value, //Tracks students interaction with the filter tab in "job type" which has been inserted in second <select> tag ("nth-of-type(2) defines this")
                Job_Course: document.querySelector(".filter:nth-of-type(3)").value, //Tracks students interaction with the filter tab in "course" which has been inserted in third <select> tag ("nth-of-type(3) defines this")
            }



            const getJobVacancyData = await fetch(`http://localhost:8080/filter-job-post/${filterSelect.Project_Type}/${filterSelect.Job_Type}/${filterSelect.Job_Course}`, { //Defining "processApplicationForm" variable that fetches (makes requests) to the backend server (locahost:8080), which calls the endpoint of "application-form" which is stored in the router, where once this endpoint has been called then it will insert the application form to the database once it has been submitted. It uses "await" to not move to next line of function whilst this function is in progress. It adds the parameter of "Project_Type", Job_Type and Job_Course which has been extracted from the variable "filterSelect".
                method: 'POST',  //Using http method "POST" to send the selected filter  to the backend server
                headers: { "Content-Type": "application/json" }, //It uses "headers" method to send the content as a json which is easier for backend server to retrieve data 
            })            
            const jobVacancy = await getJobVacancyData.json() //Defining a variable "jobVacancy" which converts the response from the server to json format ("getJobVacancyData.json") before moving to next code "(await)". 
            
            

            jobVacanciesContainer.innerHTML = ""; //Using ".innerHTML" to clear the job vacancy element container which is refered in "jobVacanciesContainer" variable once user selected their choice in filter 
            if (jobVacancy.length > 0) {  //Uses if statement to check if students selected a one of the filter tabs that matches with the  job vacancy items ("jobVacancy")
                jobVacancy.forEach(job => { //Uses "forEach" attribute to iterate through each items in "jobVacancy" (where job vancancy details inputed) and once the job items has been found then it will use .innerHTML to add a <div> element to add job vacancy
                    //Using attrribute "innerHTML" to add a HTML in Javascript within. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}. 
                    jobVacanciesContainer.innerHTML += `
                    <div class="job-container">
                        <img src="${job.Image}">
                        <div class="job-detail-container">
                            <h1 style="font-size: 32px;">${job.Job_Name}</h1>
                            <h2 style="color: #938484; font-size: 24px;">${job.Industry_Name}</h2>
                            <h2 style="color: #D27E7E; font-size: 24px;">${job.Job_Location}</h2>
                            <h2 style="color: #604F4F; font-size: 24px;">${job.Meeting_Type}</h2>
                            <h2 style="color: #44B527; font-size: 24px;">${job.Job_Type}</h2>
                        </div>
                        <a href="1.5_student_portal_dynamic_job_description.html?Job_Name=${encodeURIComponent(job.Job_Name)}&Industry_Name=${encodeURIComponent(job.Industry_Name)}&Job_Type=${encodeURIComponent(job.Job_Type)}&Project_Type=${job.Project_Type}">
                            <button class="description-button">READ DESCRIPTION</button>
                        </a>
                    </div>`;

                    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                })
            } else { //If students selected a filter tab that does not  matches the data which is refered to "jobVancy" then it will print error message 
                jobVacanciesContainer.innerHTML = "<p>NO JOBS FOUND</p>"; //Uses "innerHTML" attribute to add <p> tag to give error when student input has not matches to the data list
            }

        }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
            console.log(err) //Printing message in console 
        }
        



    })
})
