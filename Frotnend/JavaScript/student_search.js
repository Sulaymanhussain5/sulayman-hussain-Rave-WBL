document.getElementById("student-search").addEventListener("input", async function () { //Adds an event listener to "student-search" component, which includes what event is being occured ("input") and action (function is created for the action)
    try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        let studentProgressTable = document.getElementById("student-progress-table") //Defining a varable "jobContainer" which gets the div element name "job-vacancy-container" which is integrated in HTML document "1.0_studentPortal_homepage.html" which is inserted as an ID ("getElementById")
        let studentSearchBox = this.value.toLowerCase().trim();//Defining a variable "searchQuery" which gets the value that students has inserted in the search box ("this.value") and converts it to lower case ("toLowerCase") and removes extra space in the start and end of the text (".trim"), these attributes is used to make the text readable and organised for computer to read text easily
       
        const getStudentProgress = await fetch("http://localhost:8080/search-student", { //Defining a variable  "getJobPost"  which makes request to the backend route with endpoint of "search-job-post" ("fetch") and it makes sure that fetching is done before moving to next line ("await"). When it client side makes request to server side, it sends the server the students or staff text value which has been inserted in search box, which has been converted to JSON format ("body: JSON.stringify({searchQuery})")
            method: 'POST', //Defining "method" object as  POST HTTP method whicj send the requested value to the server side ("method: 'POST'")
            headers: {"Content-Type": "application/json"}, //Defining the "headers" object as "application/json" which sends the data in json format.
            body: JSON.stringify({studentSearchBox}) //Defining "body" object as "JSON.stringify" which converts the students or staff serach value  into json format
        });


        const studentProgress = await getStudentProgress.json() //Defining a variable "jobDetail" which converts the response from the server to json format ("getJobPost.json") before moving to next code "(await)". 
        studentProgressTable.innerHTML = "" //Using ".innerHTML" to clear the job vacancy element container which is refered in "jobContainer" variable once user insert value and the data has been matched 

        
        if (studentProgress.length > 0) { //Using if statement to process if job data has been matched once students inserts value in the search box 
            studentProgressTable.innerHTML += `
                <tr>
                    <th>Student ID</th>
                    <th>Job Name</th>
                    <th>Industry</th>
                    <th>Project Type</th>
                    <th>Job Type</th>
                    <th>Job Course</th>
                    <th>Student First Name</th>
                    <th>Student Last Name</th>
                    <th>Student Email Address</th>
                    <th>Student Gender</th>
                    <th>Student Avalability</th>
                    <th>Student Skills</th>
                    <th>Student Documents</th>
                    <th>Student Links</th>
                    <th>Status</th>
                </tr>
            `
            studentProgress.forEach(student => { //Using ".forEach" attribute which is used to iterates through the data of Job details which has been converted into JSON in the variable of "jobDetail" to pick out data of Image, Job Name, Industry Name, Job Location and Meeting Type. Each iterated job is represented as name "job" 
                const studentData = document.createElement("tr")
                //Using attrribute "innerHTML" to add a HTML in Javascript within. By using "${}" data is taken from the json format which has been received from the backend and it integrated in the client side ${}.
                studentData.innerHTML += `
                    <tr>
                        <td>${student.Student_id}</td>
                        <td>${student.Job_Name}</td>
                        <td>${student.Industry_Name}</td>
                        <td>${student.Project_Type}</td>
                        <td>${student.Job_Type}</td>
                        <td>${student.Course}</td>
                        <td>${student.First_Name}</td>
                        <td>${student.Last_Name}</td>
                        <td>${student.Student_Email}</td>
                        <td>${student.Gender}</td>
                        <td>${student.Avalability}</td>
                        <td>${student.Skills}</td>
                        <td><a href="${student.Document}">View Document</a></td>
                        <td><a href="${student.Link}">Student Profile</a></td>
                        <td>${student.Status}</td>
                    </tr> 
                    `
            studentProgressTable.appendChild(studentData)
                //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            })
        } else { //Uses an else statement, where it displays an error message which uses an innerHTML stating that students application form detail cannot be found once the backend cannot find students application form detail 
            studentProgressTable.innerHTML = "<p>NO STUDENT FOUND</p>"; //Uses "innerHTML" attribute to add <p> tag to give error when student application form cannot be found
        }

    }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log(err) //Printing message in console
    }
    

})