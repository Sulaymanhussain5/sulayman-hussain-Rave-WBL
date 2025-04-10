
document.querySelectorAll(".filter").forEach(studentFilter => { //Uses "querySelectorAll" attribute to collect all class name with "filter" which is stored in <select> tag, if "filter" element has been detected then it will perform an event listener of "change" which is defined by "studentFilter"
    studentFilter.addEventListener("change", async function () { //Adds an event listener to "filter" component, which includes what event is being occured ("change") and action (function is created for the action)
        try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
            let studentProgressTable = document.getElementById("student-progress-table") //Defining "studentProgressTable" variable that collects element ID of <table> tag which contains a table that has students application form details

            let filterSelect = { //Defining "filterSelect" variable which is used to track users interaction with the "filter" class
                Project_Type: document.querySelector(".filter:nth-of-type(1)").value, //Tracks students interaction with the filter tab in "project type" which has been inserted in first <select> tag ("nth-of-type(1) defines this")
                Job_Type: document.querySelector(".filter:nth-of-type(2)").value, //Tracks students interaction with the filter tab in "job type" which has been inserted in second <select> tag ("nth-of-type(2) defines this")
                Course: document.querySelector(".filter:nth-of-type(3)").value, //Tracks students interaction with the filter tab in "course" which has been inserted in third <select> tag ("nth-of-type(3) defines this")
            }

        

            studentProgressTable.innerHTML = ""; //Using ".innerHTML" attribute to remove the content in the page once filter is being selected, where "innerHTML" is set to "" to perform this

            

            const getStudentFilter = await fetch(`http://localhost:8080/filter-student/${filterSelect.Project_Type}/${filterSelect.Job_Type}/${filterSelect.Course}`, { //Defining "getStudentFilter" variable that fetches (makes requests) to the backend server (locahost:8080), which calls the endpoint of "application-form" which is stored in the router, where once this endpoint has been called then it will insert the application form to the database once it has been submitted. It uses "await" to not move to next line of function whilst this function is in progress. It adds the parameter of "Project_Type", Job_Type and Job_Course which has been extracted from the variable "filterSelect".
                method: 'POST', //Using http method "POST" to send the selected filter  to the backend server
                headers: {"Content-Type": "application/jsob"}, //It uses "headers" method to send the content as a json which is easier for backend server to retrieve data 
            })
            if(!getStudentFilter.ok){ //Uses if statement to check if there was a problem during  requesting to the backend was  (by using ".ok" attribute) where if yes, then it print a message in the console stating that data provided cannot be found in the databas
                console.log("We are having trouble getting the database") //Prints a error message in console
            }
            const studentItem = await getStudentFilter.json() //Defining "studentItem" variable that converts the response from the localhost 8080 server (backend) into json, where it uses "await" to not move to next function whilst this function is in progress
            

            
            

            //Using the if statement to check if the student application form details has been found once staff selects one of the filter tab in "filterSelect", if it does then it will create a <tr> and <td> tag which will contain a table data of single or multiple of student application form details, however if student application form does not exist then it will print a error message
            if (studentItem.length > 0) {  //Uses if statement to check if staff selected a one of the filter tabs that matches with the  student application form items ("getStudentFilter"), where if it's greater than 0 then student application form details will appear  
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
                //Uses "forEach" attribute to iterate through each items in "studentItem" (student application form details are sent by the backend) and once the student details has been found  then it will use .innerHTML to add a <tr> and <td> to add student details in the table
                studentItem.forEach(student => { 
                    studentProgressTable.innerHTML += `
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
                    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                })
            } else { //If staff selected a filter tab that does not  matches the response from the server side  then it will print error message 
                studentProgressTable.innerHTML = "<p>WE CANNOT FIND THE STUDENT DETAILS</p>"; //Uses "innerHTML" attribute to add <p> tag to give error when values that staff has selected did not match the value in the database
            }

        }catch(err){
            console.log(err)
        }
        



    })
})
