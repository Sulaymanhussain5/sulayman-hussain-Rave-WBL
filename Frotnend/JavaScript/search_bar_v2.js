document.getElementById("searchBar").addEventListener("input", async function () { //    
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        let jobContainer = document.getElementById("job-vacancy-container") //Defining a varable "jobContainer" which gets the div element name "job-vacancy-container"  which is inserted as an ID ("getElementById")
        let searchQuery = this.value.toLowerCase().trim(); //Defining a variable "searchQuery" which gets the value that students has inserted in the search box ("this.value") and converts it to lower case ("toLowerCase") and removes extra space in the start and end of the text (".trim"), these attributes is used to make the text readable and organised for computer to read text easily

        
        const getJobPost = await fetch("http://localhost:8080/search-job-post", { //Defining a variable  "getJobPost"  which makes request to the backend route with endpoint of "search-job-post" ("fetch") and it makes sure that fetching is done before moving to next line ("await"). When it client side makes request to server side, it sends the server the students or staff text value which has been inserted in search box, which has been converted to JSON format ("body: JSON.stringify({searchQuery})")
            method: 'POST', //Defining "method" object as  POST HTTP method whicj send the requested value to the server side ("method: 'POST'")
            headers: {"Content-Type": "application/json"}, //Defining the "headers" object as "application/json" which sends the data in json format.
            body: JSON.stringify({searchQuery}) //Defining "body" object as "JSON.stringify" which converts the students or staff serach value  into json format
        })

        

        const jobDetail = await getJobPost.json() //Defining a variable "jobDetail" which converts the response from the server to json format ("getJobPost.json") before moving to next code "(await)". 

        
        
        
        if (jobDetail.length > 0) { //Using if statement to process if job data has been matched once students inserts value in the search box
            jobContainer.innerHTML = "" //Using ".innerHTML" to clear the job vacancy element container which is refered in "jobContainer" variable once user insert value and the data has been matched 
            jobDetail.forEach(job => { //Using ".forEach" attribute which is used to iterates through the data of Job details which has been converted into JSON in the variable of "jobDetail" to pick out data of Image, Job Name, Industry Name, Job Location and Meeting Type. Each iterated job is represented as name "job" 
                //Using attrribute "innerHTML" to add a HTML in Javascript within. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}. 
                jobContainer.innerHTML += `
                <div class="job-container">
                <img src="${job.Image}">
                <div class="job-detail-container">
                    <h1 style="font-size: 32;">${job.Job_Name}</h1>
                    <h2 style="color: #938484; font-size: 24;">${job.Industry_Name}</h2>
                    <h2 style="color: #D27E7E; font-size: 24;">${job.Job_Location}</h2>
                    <h2 style="color: #604F4F; font-size: 24;">${job.Meeting_Type}</h2>
                    <h2 style="color: #44B527; font-size: 24;">${job.Job_Type}</h2>
                </div>
                    <a href="1.5_student_portal_dynamic_job_description.html?Job_Name=${encodeURIComponent(job.Job_Name)}&Industry_Name=${encodeURIComponent(job.Industry_Name)}"><button class="description-button">READ DESCRIPTION</button></a>
                </div>
            `
                //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        })
        } else { 
            jobContainer.innerHTML = "<p>NO JOBS FOUND</p>"; //Uses "innerHTML" attribute to add <p> tag to give error when student input has not matches to dictionary list
            
        }
    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log(err) //Printing message in console 
    }

    
})