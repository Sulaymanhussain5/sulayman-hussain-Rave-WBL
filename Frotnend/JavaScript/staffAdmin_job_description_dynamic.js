const getJobDetailUrl = new URLSearchParams(window.location.search) //Defining "getJobDetailUrl" variable that gets the query parameters (which means that key values are added in the URL link, which is normally used to add additional data in the URL), which gets the values in job name, industry name, project type and job type.  These values will be sent to the backend. where the backend will process these values to the database collection in MongoDb server, where if the values has been found in the database then it will extract the values from the backend server and integrate it in the client side where it will make a job description page. It uses "URLSearchParams" method to work with the parameters within the URL where it uses "window.location.search" to look for the parameters within the URL
let Job_Name = getJobDetailUrl.get("Job_Name") //Defining "Job_Name" variable to extract the job name value ("Job_Name") in the URL by using ".get" attribute
let Job_Type = getJobDetailUrl.get("Job_Type") //Defining "Job_Type" variable to extract the job type value ("Job_Type") in the URL by using ".get" attribute
let Industry_Name = getJobDetailUrl.get("Industry_Name") //Defining "Industry_Name" variable to extract the industry name value ("Industry_Name") in the URL by using ".get" attribute
let Project_Type = getJobDetailUrl.get("Project_Type") //Defining "Project_Type" variable to extract the project type value ("Project_Type") in the URL by using ".get" attribute




Job_Name = encodeURIComponent(Job_Name) //Using variable "Job_Name" to set special characteristics in values that contains spaces, which avoids bugs in URL, which uses "encodeURIComponent" attribute 
Job_Type = encodeURIComponent(Job_Type) //Using variable "Job_Type" to set special characteristics in values that contains spaces, which avoids bugs in URL, which uses "encodeURIComponent" attribute 
Industry_Name = encodeURIComponent(Industry_Name) //Using variable "Industry_Name" to set special characteristics in values that contains spaces, which avoids bugs in URL, which uses "encodeURIComponent" attribute 
Project_Type = encodeURIComponent(Project_Type) //Using variable "Project_Type" to set special characteristics in values that contains spaces, which avoids bugs in URL, which uses "encodeURIComponent" attribute 





async function jobDescription(){ //Defining the function of "jobDescription" which is used to sends requests to the backend (local host 8080) to get the job description value found in the collection name "Job Post" where it sends the URL parameters of job name, project type, industry name and job type to the backend server to help with the job finding and once it has found the job it will send a request and client side will use this response to extract the value and integrate it to the job description page.  "GET" method has been used
    try{ //Using try and catch block which tries to send the request which sends the form  to the backend , where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        
        console.log(`Retrieving details in job ${Job_Name}`) //Printing the job name that client side has received, in the console log
        const getResponse = await fetch(`http://localhost:8080/get-job-post/${Job_Name}/${Job_Type}/${Industry_Name}/${Project_Type}`); //Defining "getResponse" variable that fetches (makes requests) to the backend server (locahost:8080), which calls the endpoint of "get-job-post" which is stored in the router, where once this endpoint has been called then it will find the values in the database . It uses "await" to not move to next line of function whilst this function is in progress. It sends the parameter of "Job_Name","Industry_Name", "Job_Type", "Project_Type" (Using "$" to call the variable) in the URL where it is also sent to the backend. The backend will extract the given job name, project type, job type and industry name, where it is being decoded.

        const jobDetail = await getResponse.json(); //Defining "jobDetail" variable that converts the response from the localhost 8080 server (backend) into json, where it uses "await" to not move to next function whilst this function is in progress
        const jobDetailContainer = document.getElementById("job-description-container"); //Defining "jobDetailContainer" variable that is used to get the div tag element with the attribute of id integrated, where it will be used to  store job description ("getElementById") 
        console.log(jobDetail) //Printing response from the backend where it will contains json format that displays details about the job

        const jobTitle = document.createElement('div'); //Defining "jobTitle" variable to create the div eleement which will be used in the JavaScript document to make the container dynamic by using attribute of "document.creareElement"
        const jobDescription = document.createElement('div'); //Defining "jobDescription" variable to create the div eleement which will be used in the JavaScript document to make the container dynamic by using attribute of "document.creareElement"
        const jobRequirement = document.createElement('div'); //Defining "jobRequirement" variable to create the div eleement which will be used in the JavaScript document to make the container dynamic by using attribute of "document.creareElement"
        const offer = document.createElement('div'); //Defining "offer" variable to create the div eleement which will be used in the JavaScript document to make the container dynamic by using attribute of "document.creareElement"
        const startEndDate = document.createElement('div'); //Defining "startEndDate" variable to create the div eleement which will be used in the JavaScript document to make the container dynamic by using attribute of "document.creareElement"
        const contactDetail = document.createElement('div'); //Defining "contactDetail" variable to create the div eleement which will be used in the JavaScript document to make the container dynamic by using attribute of "document.creareElement"
        const location = document.createElement('div'); //Defining "location" variable to create the div eleement which will be used in the JavaScript document to make the container dynamic by using attribute of "document.creareElement"

        //Using attrribute "innerHTML" to add a HTML in Javascript within div element. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}. 

        jobTitle.innerHTML = `
            <div><img src="${jobDetail.Image}"  width="316" height="189"></div> <!--Using "<img>" tag to insert AWS logo of AWS (src="Assets/aws_logo.png"). Also using "width" and "height" to size the image by 316x189. Additionally, "alt" attribute is used to add image name -->
                <div class="job-summary-container"> <!--Using "<div>" tag which holds AWS details such as job name, industry, location, meeting type and job type. Additionally, attribute of "class" which is named "job-summary-container" is used as a reference when using css to style this component -->
                <span class="description">${jobDetail.Job_Name}</span> <!--Using "<span>" tag to insert the name of the job ("Front End Development"), additionally, span prevents the element from adding new line once elements are added, also inline styling is used to define the font size, which is in "style" attribute-->
                <span class="description" style="color: #938484; font-size: 24;">${jobDetail.Industry_Name}</span> <!--Using "<span>" tag to insert the industry of the job ("AWS"), additionally, span prevents the element from adding new line once elements are added, also inline styling is used to define the font size and colour (written in hex code), which is in "style" attribute-->
                <span class="description" style="color: #D27E7E; font-size: 24;">${jobDetail.Job_Location}</span> <!--Using "<span>" tag to insert the location of the job ("London England"), additionally, span prevents the element from adding new line once elements are added, also inline styling is used to define the font size and colour (written in hex code), which is in "style" attribute-->
                <span class="description" style="color: #604F4F; font-size: 24;">${jobDetail.Meeting_Type}</span> <!--Using "<span>" tag to insert the meeting type of the  job ("Remote Or In Person"), additionally, span prevents the element from adding new line once elements are added, also inline styling is used to define the font size and colour (written in hex code), which is in "style" attribute-->
                <span class="description" style="color: #44B527; font-size: 24;">${jobDetail.Job_Type}</span> <!--Using "<span>" tag to insert the job type ("Internship"), additionally, span prevents the element from adding new line once elements are added, also inline styling is used to define the font size and colour (written in hex code), which is in "style" attribute-->
            </div> <!--Close the div tag-->
        `

        //Using attrribute "innerHTML" to add a HTML in Javascript within div element. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}.
        jobDescription.innerHTML = `
            <div class="about-the-role"> <!--Using "<div>" tag which holds AWS role details. Additionally, attribute of "class" which is named "about-the-role" is used as a reference when using css to style this component -->
                <h1 style="font-size: 36px;">JOB DESCRIPTION</h1> <!--Using "<h1>" tag to give the heading, which states "ABOUT THE ROLE", it includes a incline styling of font size whihc is set to 36 pixels-->
                <p style="font-size: 32px;">${jobDetail.Job_Description}</p> <!--Using "<p>" tag to add a text about the AWS role, it includes a incline styling of  font size which is set to 32 pixels-->
            </div> <!--Close the div tag-->
        `

        //Using attrribute "innerHTML" to add a HTML in Javascript within div element. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}.
        jobRequirement.innerHTML = `
            <div class="what-you-will-do"> <!--Using "<div>" tag which holds responsibility of AWS. Additionally, attribute of "class" which is named "what-you-will-do" is used as a reference when using css to style this component -->
                <h1 style="font-size: 36px;">WHAT YOU WILL DO?</h1> <!--Using "<h1>" tag to give the heading, which states "WHAT YOU WILL DO?", it includes a incline styling of font size whihc is set to 36 pixels-->
                <p style="font-size: 32px">${jobDetail.jobRequirement}</p> <!--Using "<li>" to give the list of responsibility, it also includes inline styling of font size which is set to 32 pixels-->
            </div>
        `

        //Using attrribute "innerHTML" to add a HTML in Javascript within div element. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}.
        offer.innerHTML = `
            <div class="what-we-offer"> <!--Using "<div>" tag which holds offers of AWS. Additionally, attribute of "class" which is named "what-we-offer" is used as a reference when using css to style this component -->
                <h1 style="font-size: 36px;">WHAT WE OFFER?</h1> <!--Using "<h1>" tag to give the heading, which states "WHAT WE OFFER?", it includes a incline styling of font size whihc is set to 36 pixels-->
                <p style="font-size: 32px;">${jobDetail.industryOffer}</p> <!--Using "<li>" to give the list of offers, it also includes inline styling of font size which is set to 32 pixels-->
            </div> <!--Close the div tag-->
        `
        //Using attrribute "innerHTML" to add a HTML in Javascript within div element. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}.
        startEndDate.innerHTML = `
            <div class="start-end-date"> <!--Using "<div>" tag which holds start and end date of AWS. Additionally, attribute of "class" which is named "start-end-date" is used as a reference when using css to style this component -->
                <img src="Assets/calander_icon.png" width="87" height="96" alt="Calander Icon"> <!--Using "<img>" tag to insert Calander icon  (src="Assets/calander_icon.png"). Also using "width" and "height" to size the image by 87x96. Additionally, "alt" attribute is used to add image name -->
                <p style="font-size: 32px;"><span style="font-weight: bold;">START: ${jobDetail.Start_Date}</span></p> <!--Using "<p>" tag to insert the start date of AWS front end development job, additionally, it uses "<span>" tag prevents the element from adding new line once elements are added, also inline styling is used to define the font size of 32 pixels for date and set font weight to bold for "START", which is in "style" attribute-->
                <p style="font-size: 32px;"><span style="font-weight: bold;">END: ${jobDetail.End_Date}</span></p> <!--Using "<p>" tag to insert the end date of AWS front end development job, additionally, it uses "<span>" tag prevents the element from adding new line once elements are added, also inline styling is used to define the font size of 32 pixels for date and set font weight to bold for "END", which is in "style" attribute-->
            </div> <!--Close the div tag-->
        `
        //Using attrribute "innerHTML" to add a HTML in Javascript within div element. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}.
        contactDetail.innerHTML = `
            <div class="contact-detail"> <!--Using "<div>" tag which holds contact details of AWS. Additionally, attribute of "class" which is named "contact-detail" is used as a reference when using css to style this component -->
                <img src="Assets/email_icon.png" width="87" height="96" alt="Email Icon"> <!--Using "<img>" tag to insert Email icon  (src="Assets/email_icon.png"). Also using "width" and "height" to size the image by 87x96. Additionally, "alt" attribute is used to add image name -->
                <p style="font-size: 32px;">${jobDetail.Industry_Email_Address}</p> <!--Using "<p>" tag to add a text in AWS email address, it includes a incline styling of  font size which is set to 32 pixels-->
            </div> <!--Close the div tag-->
        `
        //Using attrribute "innerHTML" to add a HTML in Javascript within div element. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}.
        location.innerHTML = `
            <div class="location"> <!--Using "<div>" tag which holds location of AWS. Additionally, attribute of "class" which is named "location" is used as a reference when using css to style this component -->
                <img src="Assets/location_icon.png" width="87" height="96" alt="Location Icon"> <!--Using "<img>" tag to insert Location icon  (src="Assets/location_icon.png"). Also using "width" and "height" to size the image by 87x96. Additionally, "alt" attribute is used to add image name -->
                <p style="font-size: 32px;">${jobDetail.Job_Location}</p> <!--Using "<p>" tag to add a text in the location of the job, it includes a incline styling of  font size which is set to 32 pixels-->
            </div> <!--Close the div tag-->
        `
        //Using attrribute "innerHTML" to add a HTML in Javascript within div element. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}.
       
        jobDetailContainer.appendChild(jobTitle) //After adding all the tag in the "div" element, this is being added in the "job-description-container" by using attribute "appendChild" which is stored in variable "jobDetailContainer"
        jobDetailContainer.appendChild(jobDescription) //After adding all the tag in the "div" element, this is being added in the "job-description-container" by using attribute "appendChild" which is stored in variable "jobDetailContainer"
        jobDetailContainer.appendChild(jobRequirement) //After adding all the tag in the "div" element, this is being added in the "job-description-container" by using attribute "appendChild" which is stored in variable "jobDetailContainer"
        jobDetailContainer.appendChild(offer) //After adding all the tag in the "div" element, this is being added in the "job-description-container" by using attribute "appendChild" which is stored in variable "jobDetailContainer"
        jobDetailContainer.appendChild(startEndDate) //After adding all the tag in the "div" element, this is being added in the "job-description-container" by using attribute "appendChild" which is stored in variable "jobDetailContainer"
        jobDetailContainer.appendChild(contactDetail) //After adding all the tag in the "div" element, this is being added in the "job-description-container" by using attribute "appendChild" which is stored in variable "jobDetailContainer"
        jobDetailContainer.appendChild(location) //After adding all the tag in the "div" element, this is being added in the "job-description-container" by using attribute "appendChild" which is stored in variable "jobDetailContainer"

        

    }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log(err) //Printing error message in console 
    }
}

window.onload = jobDescription; //Using "window.onload" method to automatically load the data from the backend once browser has been refreshed


