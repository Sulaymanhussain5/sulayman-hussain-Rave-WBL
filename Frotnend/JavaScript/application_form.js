let skills=[] //Defining array variable "skills" which is used to integrate students skills which will be sent to the backend which will be stored in the database server as a "array" data type 
let experiences=[] //Defining array variable "experiences" which is used to integrate students experiences which will be sent to the backend which will be stored in the database server as a "array" data type 
let certifications=[] //Defining array variable "certifications" which is used to integrate students certifications which will be sent to the backend which will be stored in the database server as a "array" data type 
let avalability=[] //Defining array variable "avalability" which is used to integrate students avalability which will be sent to the backend which will be stored in the database server as a "array" data type 
let documentItem = [] //Defining array variable "documentItem" which is used to integrate students documents which will be sent to the backend which will be stored in the database server as a "array" data type 
let linkItem = [] //Defining array variable "linkItem" which is used to integrate students links which will be sent to the backend which will be stored in the database server as a "array" data type 
let enrolled = null //Defining variable "enrolled" which changes when student selects if they are enrolled in WBL 



function addSkills(event){ //Defining the function of "addSkills" which is used to  dynamically input students value as a list, where it is added in the array list variable "skills". Additionally, it enables students a choice to remove the skills once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const skillsList = document.getElementById("skillsList") //Defining "skillsList" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById") 
    const Skills = document.getElementById("Skills").value //Defining "Skills" variable that is used to track students value


    if(Skills !== ""){ //Uses if statement to check if skills valie (Skills) is not empyty where if it is not empty, then it will display the list, createsa a "li" element that stores students selected skills in the list (li tag) and adds it to the "skills" list
        skillsList.style.display = "block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "skillsList" ul element. "block" means that list is visable once "Add" button is clicked 
        const listSkills = document.createElement("li"); //Defining variable "listSkills" which adds a element of "li" in within JavaScript document 
        listSkills.textContent = Skills //Using ".textContent" attribute which stores student skills in the "<li>" tag
        skillsList.appendChild(listSkills) + skillsList.appendChild(document.createElement("br")) //Using ".appendChild" attribute to add list of students skills in the "<ul>" tag which is stored in the "skllsList" variable, additionally it also adds a space in each of the skills that is being inputed in the list ("br") in the "<ul>" tag
        skills.push(Skills) //Using ".push" attribute to add students selected skills "(Availability)" in the array list "skills"
        document.getElementById("Skills").value="" //Using "getElementById" attribute which gets the input field element which is stored as a id, where it removes the value once students has added a skill in the list

        const removeButton = document.createElement('button') //Defining "removeButton" variable that creates a button which will be used to remove the selected skills within the list
        removeButton.classList.add("removeButton") //Using ".classList" and "add" attribute which is used to add the class name which is used to style the button ("removeButton")
        removeButton.textContent = "REMOVE" //Using ".textContent" attribute which stores the text "REMOVE" in the button element 
        removeButton.addEventListener('click', function(){ //Using ".addEventListener" which adds a action (or event) once the "REMOVE" button has been pressed. It uses 2 attribute of when should the event occur ("click") and action (which is used to create a function that removes the skills in the list)
            listSkills.remove() //Using ".remove" attribute to remove the element from the client side once remove button has been pressed
            skills.splice(Skills) //Using ".splice" attribute to remove the selected skills value from the defined array list variable "skills" once student removes the skills from the list
        })
        listSkills.appendChild(removeButton) //Using ".appendChild" attribute to add the remove button ("removeButton) in the list which is stored in "<ul" tag which is defined in "listSkills" variable
    }

}


function addExperience(event){ //Defining the function of "addExperience" which is used to  dynamically input students experience value as a list, where it is added in the array list variable "experiences". Additionally, it enables students to remove the experiences once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const experienceList = document.getElementById("experienceList") //Defining "experienceList" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById") 
    const Experience_Name = document.getElementById("Experience_Name").value //Defining "Experience_Name" variable that is used to track students value
   
    if(Experience_Name !== ""){//Uses if statement to check if experience value (Experience_Name) is not empyty where if it is not empty, then it will display the list, createsa a "li" element that stores students selected experience in the list (li tag) and adds it to the "experiences" list
        experienceList.style.display = "block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "experienceList" ul element. "block" means that list is visable once "Add" button is clicked 
        const listExerience = document.createElement("li"); //Defining variable "listExerience" which adds a element of "li" in within JavaScript document 
        listExerience.textContent = Experience_Name //Using ".textContent" attribute which stores student experiences in the "<li>" tag
        experienceList.appendChild(listExerience) + experienceList.appendChild(document.createElement("br")) //Using ".appendChild" attribute to add list of students experiences in the "<ul>" tag which is stored in the "experienceList" variable, additionally it also adds a space in each of the experiences that is being inputed in the list ("br") in the "<ul>" tag
        experiences.push(Experience_Name) //Using ".push" attribute to add students selected experiences "(Experience_Name)" in the array list "experiences" 
        document.getElementById("Experience_Name").value="" //Using "getElementById" attribute which gets the input field element which is stored as a id, where it removes the value once students has added their experiences in the list

        const removeButton = document.createElement('button') //Defining "removeButton" variable that creates a button which will be used to remove the selected experience within the list
        removeButton.classList.add("removeButton") //Using ".classList" and "add" attribute which is used to add the class name which is used to style the button ("removeButton")
        removeButton.textContent = "REMOVE" //Using ".textContent" attribute which stores the text "REMOVE" in the button element 
        removeButton.addEventListener('click', function(){ //Using ".addEventListener" which adds a action (or event) once the "REMOVE" button has been pressed. It uses 2 attribute of when should the event occur ("click") and action (which is used to create a function that removes the experience in the list)
            listExerience.remove() //Using ".remove" attribute to remove the element from the client side once remove button has been pressed
            experiences.splice(Experience_Name) //Using ".splice" attribute to remove the selected experience value from the defined array list variable "experience" once student removes the experience from the list
        })
        listExerience.appendChild(removeButton) //Using ".appendChild" attribute to add the remove button "(removeButton)" in the list which is stored in "<ul" tag which is defined in "listExerience" variable 
    }

}

function addCertification(event){ //Defining the function of "addCertification" which is used to  dynamically input students certification value as a list, where it is added in the array list variable "certifications". Additionally, it enables students to remove the certifications once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const certificationList = document.getElementById("certificationList") //Defining "certificationList" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById") 
    const Name_of_certification = document.getElementById("Name_of_certification").value //Defining "Name_of_certification" variable that is used to track students value


    if(Name_of_certification !== ""){ //Uses if statement to check if experience value (Name_of_certification) is not empyty where if it is not empty, then it will display the list, createsa a "li" element that stores students selected certification in the list (li tag) and adds it to the "certifications" list
        certificationList.style.display = "block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "certificationList" ul element. "block" means that list is visable once "Add" button is clicked 
        const listCertification = document.createElement("li"); //Defining variable "listCertification" which adds a element of "li" in within JavaScript document 
        listCertification.textContent = Name_of_certification //Using ".textContent" attribute which stores student certification ("Name_of_certification") in the "<li>" tag
        certificationList.appendChild(listCertification) + certificationList.appendChild(document.createElement("br")) //Using ".appendChild" attribute to add list of students certification in the "<ul>" tag which is stored in the "certificationList" variable, additionally it also adds a space in each of the certification that is being inputed in the list ("br") in the "<ul>" tag
        certifications.push(Name_of_certification) //Using ".push" attribute to add students selected certification "(Name_of_certification)" in the array list "certifications" 
        document.getElementById("Name_of_certification").value="" //Using "getElementById" attribute which gets the input field element which is stored as a id, where it removes the value once students has added their certifications in the list

        const removeButton = document.createElement('button') //Defining "removeButton" variable that creates a button which will be used to remove the selected certifications within the list
        removeButton.classList.add("removeButton") //Using ".classList" and "add" attribute which is used to add the class name which is used to style the button ("removeButton")
        removeButton.textContent = "REMOVE" //Using ".textContent" attribute which stores the text "REMOVE" in the button element
        removeButton.addEventListener('click', function(){ //Using ".addEventListener" which adds a action (or event) once the "REMOVE" button has been pressed. It uses 2 attribute of when should the event occur ("click") and action (which is used to create a function that removes the certification in the list)
            listCertification.remove() //Using ".remove" attribute to remove the element from the client side once remove button has been pressed
            certifications.splice(Name_of_certification) //Using ".splice" attribute to remove the selected certification value from the defined array list variable "certifications" once student removes the certification from the list
        })
        listCertification.appendChild(removeButton) //Using ".appendChild" attribute to add the remove button "(removeButton)" in the list which is stored in "<ul" tag which is defined in "listCertification" variable 
    }

}


function addAvalability(event){ //Defining the function of "addAvalability" which is used to  dynamically input students avalability value as a list, where it is added in the array list variable "avalabiltiyList". Additionally, it enables students to remove the avalability once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const avalableList = document.getElementById("avalableList") //Defining "avalabilityList" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById") 
    const Avalability = document.getElementById("Avalability").value //Defining "Availability" variable that is used to track students value

    if(Avalability !== ""){ //Uses if statement to check if avalability valie (Availability) is not empyty where if it is not empty, then it will display the list, createsa a "li" element that stores students selected avalability in the list (li tag) and adds it to the "avalableList" list
        avalableList.style.display = "block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "avalabilityList" ul element. "block" means that list is visable once "Add" button is clicked 
        const listAvalability = document.createElement("li"); //Defining variable "listAvalability" which adds a element of "li" in within JavaScript document 
        listAvalability.textContent = Avalability  //Using ".textContent" attribute which stores student avalability in the "<li>" tag
        avalableList.appendChild(listAvalability) + avalableList.appendChild(document.createElement("br")) //Using ".appendChild" attribute to add list of students avalability in the "<ul>" tag which is stored in the "avalabilityList" variable, additionally it also adds a space in each of the avalability that is being inputed in the list ("br") in the "<ul>" tag
        avalability.push(Avalability)  //Using ".push" attribute to add students selected avalability "(Availability)" in the array list "avalabileList"        
        document.getElementById("Avalability").value="" //Using "getElementById" attribute which gets the input field element which is stored as a id, where it removes the value once students has added their avalability in the list

        const removeButton = document.createElement('button') //Defining "removeButton" variable that creates a button which will be used to remove the selected avalability within the list
        removeButton.classList.add("removeButton") //Using ".classList" and "add" attribute which is used to add the class name which is used to style the button ("removeButton")
        removeButton.textContent = "REMOVE" //Using ".textContent" attribute which stores the text "REMOVE" in the button element 
        removeButton.addEventListener('click', function(){ //Using ".addEventListener" which adds a action (or event) once the "REMOVE" button has been pressed. It uses 2 attribute of when should the event occur ("click") and action (which is used to create a function that removes the avalability in the list)
            listAvalability.remove() //Using ".remove" attribute to remove the element from the client side once remove button has been pressed
            avalability.splice(Avalability) //Using ".splice" attribute to remove the selected avalability value from the defined array list variable "avalableList" once student removes the availablity from the list
        })
        listAvalability.appendChild(removeButton) //Using ".appendChild" attribute to add the remove button "(removeButton)"" in the list which is stored in "<ul" tag which is defined in "listAvalability" variable
    }

}

function toggleIsEnrolledChoice(){ //Defining the function of "toggleIsEnrolledChoice" which is used to add a event once students has selected if they are enrolled in WBL module, where if they are then it will update the variable "enrolled" where it will insert "true", however if they are not then it will update the variable "enrolled" where it will insert "false" and will uccheck the ratio
    const isWblStudent = document.getElementById("isWblStudent"); //Defining "isWblStudent" variable that is used to get the input field that stores the ratio, by the id ("getElementById") 
    const isNotWblStudent = document.getElementById("isNotWblStudent"); //Defining "isNotWblStudent" variable that is used to get the input field that stores the ratio, by the id ("getElementById") 

    if(isWblStudent.checked){ //Uses an if statement to check if the ratio "Yes" is checked which is stored in the "isWblStudent" variable which uses ".checked" attribute
        enrolled = true //Uses an "enrolled" variable to set the variable to true
    } else if(isNotWblStudent.checked){ //Uses an else if to check if ratio "No" is checked which is stored in "isNotWblStudent" variable which uses ".checked" attribute
        enrolled = false //Uses an "enrolled" variable to set the variable to false
        alert("You must be a enrolled to WBL to apply this job") //Display pop up message which states that students must be enrolled to apply for the job
        isNotWblStudent.checked = false //Uses ".checked" attribute which unchecks the ratio by setting "isNotWblStudent" to false
    }
}

function addDoc(event){ //Defining the function of "addDoc" which is used to  dynamically input students documents as a list, where it is added in the array list variable "documentItem". Additionally, it enables students to remove the documents once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const fileItem = document.getElementById("documentList") //Defining "fileItem" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById")
    fileItem.style.display = "block"  //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "fileItem" ul element. "block" means that list is visable once "Add" button is clicked 
    for (file of event.target.files){  //Uses a for loop to iterate through students file selection, where once the students has selected a file ("event.target.files") then it will be added in the list where list will be created which stores students selected document
        const createFileLink = URL.createObjectURL(file) //Defining "CreateFileLink" which is used to create a temporarly link which is directed to document, once it has beeong pressed by using "URL.CreateObjectURL" attribute
        const fileLink = document.createElement('a') //Defining variable "fileLink" which adds a element of "a" in JavaScript document
        const fileList = document.createElement('li') //Defining variable "fileList" which adds a element of "li" in JavaScript  document
        fileLink.textContent = `${file.name}` //Using ".textContent" attribute which stores student document name in the "<a>" tag
        fileLink.href = createFileLink //Using ".href" attribute to add hyperlink to the document name where once it has been clicked it will open the document in new tab
        fileLink.target = "_blank" //Using ".target" attribute to open document in new tab, by setting "_blank"
        fileList.appendChild(fileLink) //Using ".appendChild" to add a link "fileLink" to list of files "fileList"
        fileItem.appendChild(fileList) //Using ".appendChild" attribute to add list of students documents in the "<ul>" ("fileItem") tag which is stored in the "fileList" variable
        documentItem.push(URL.createObjectURL(file)) //Using ".push" attribute to add a temporarly document link to the array list which will be sent in the backend where it will integrate this in the application form collection 

        const removeButton = document.createElement('button') //Defining "removeButton" variable that creates a button which will be used to remove the selected document within the list
        removeButton.classList.add("removeButton") //Using ".classList" and "add" attribute which is used to add the class name which is used to style the button ("removeButton")
        removeButton.textContent = "REMOVE" //Using ".textContent" attribute which stores the text "REMOVE" in the button element 
        removeButton.addEventListener('click', function(){ //Using ".addEventListener" which adds a action (or event) once the "REMOVE" button has been pressed. It uses 2 attribute of when should the event occur ("click") and action (which is used to create a function that removes the documents in the list)
            fileList.remove() //Using ".remove" attribute to remove the element from the client side once remove button has been pressed
            documentItem.splice(file.name) //Using ".splice" attribute to remove the selected document value from the defined array list variable "documentItem" once student removes the document from the list
        })
        fileList.appendChild(removeButton) //Using ".appendChild" attribute to add the remove button "(removeButton)" in the list which is stored in "<ul" tag which is defined in "fileList" variable
    }

}

function addLink(event){ //Defining the function of "addLink" which is used to  dynamically input students links as a list, where it is added in the array list variable "linkItem". Additionally, it enables students to remove the links once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const linkList = document.getElementById("linkList") //Defining "linkList" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById")
    const Link = document.getElementById("Link").value; //Defining "Link" variable that is used to track students value

    if(Link !== ""){ //Uses if statement to check if links value (Link) is not empyty where if it is not empty, then it will display the list, createsa a "li" element that stores students selected links in the list (li tag) and adds it to the "linkItem" list
        linkList.style.display = "block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "linkList" ul element. "block" means that list is visable once "Add" button is clicked
        const listOfLinks = document.createElement("li"); //Defining variable "fileList" which adds a element of "li" in within JavaScript document
        listOfLinks.textContent = Link //Using ".textContent" attribute which stores student links in the "<li>" tag
        linkList.appendChild(listOfLinks) + linkList.appendChild(document.createElement("br")) //Using ".appendChild" attribute to add list of students links in the "<ul>" tag which is stored in the "linkList" variable, additionally it also adds a space in each of the links that is being inputed in the list ("br") in the "<ul>" tag
        linkItem.push(Link) //Using ".push" attribute to add students selected links "(Link)" in the array list "linkItem"    
        document.getElementById("Link").value="" //Using "getElementById" attribute which gets the input field element which is stored as a id, where it removes the value once students has added their links in the list

        const removeButton = document.createElement('button') //Defining "removeButton" variable that creates a button which will be used to remove the selected links within the list
        removeButton.classList.add("removeButton") //Using ".classList" and "add" attribute which is used to add the class name which is used to style the button ("removeButton")
        removeButton.textContent = "REMOVE" //Using ".textContent" attribute which stores the text "REMOVE" in the button element 
        removeButton.addEventListener('click', function(){ //Using ".addEventListener" which adds a action (or event) once the "REMOVE" button has been pressed. It uses 2 attribute of when should the event occur ("click") and action (which is used to create a function that removes the links in the list)
            listOfLinks.remove() //Using ".remove" attribute to remove the element from the client side once remove button has been pressed
            linkItem.splice(Link) //Using ".splice" attribute to remove the selected links value from the defined array list variable "linkList" once student removes the links from the list
        })
        linkList.appendChild(removeButton) //Using ".appendChild" attribute to add the remove button "(removeButton)" in the list which is stored in "<ul" tag which is defined in "linkList" variable
    }

}

document.getElementById("addSkills").addEventListener('click', addSkills) //Getting the id element of "addSkill" which is stored in the <button> tag and using "addEventListener" attribute to add an action once student adds a skills. It has 2 attribute where when should the event occur ("click") and action (linked to the "addSkills" function which deals with adding skills in the list)
document.getElementById("addAvalability").addEventListener('click', addAvalability) //Getting the id element of "addAvalability" which is stored in the <button> tag and using "addEventListener" attribute to add an action once student adds a avalability. It has 2 attribute where when should the event occur ("click") and action (linked to the "addAvalability" function which deals with adding avalability in the list)
document.getElementById("addExperiences").addEventListener('click', addExperience) //Getting the id element of "addExperiences" which is stored in the <button> tag and using "addEventListener" attribute to add an action once student adds a experiences. It has 2 attribute where when should the event occur ("click") and action (linked to the "addExperience" function which deals with adding experiences in the list)
document.getElementById("addCertification").addEventListener('click', addCertification) //Getting the id element of "addCertification" which is stored in the <button> tag and using "addEventListener" attribute to add an action once student adds a certifications. It has 2 attribute where when should the event occur ("click") and action (linked to the "addCertification" function which deals with adding certifications in the list)

document.getElementById("isWblStudent").addEventListener('change', toggleIsEnrolledChoice) //Getting the id element of "isWblStudent" which is stored in the <input> tag and using "addEventListener" attribute to add an action once student has selected a choice if they are enrolled in WBL. It has 2 attribute where when should the event occur ("change") and action (linked to the "toggleIsEnrolledChoice" function which deals with adding action once "Yes" is selected when asked if they are WBL student)
document.getElementById("isNotWblStudent").addEventListener('change', toggleIsEnrolledChoice) //Getting the id element of "isNotWblStudent" which is stored in the <input> tag and using "addEventListener" attribute to add an action once student has selected a choice if they are enrolled in WBL. It has 2 attribute where when should the event occur ("change") and action (linked to the "toggleIsEnrolledChoice" function which deals with adding action once "No" is selected when asked if they are WBL student)
document.getElementById("Document").addEventListener('change', addDoc) //Getting the id element of "Document" which is stored in the <input> tag and using "addEventListener" attribute to add an action once student selected the document . It has 2 attribute where when should the event occur ("change") and action (linked to the addDoc function which deals with adding document in the list)
document.getElementById("addLink").addEventListener('click', addLink) //Getting the id element of "addLink" which is stored in the <button> tag and using "addEventListener" attribute to add an action once student adds a link . It has 2 attribute where when should the event occur ("click") and action (linked to the "addLink" function which deals with adding links in the list)


async function Application_Form(event) { //Defining the function of "Application_Form" which is used to sends requests to the backend (local host 8080) to send the form, whiich uses "POST" method
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const Student_id = document.getElementById("Student_id").value; //Defining "Student_id" variable that is used to track students value
    const First_Name = document.getElementById("First_Name").value; //Defining "First_Name" variable that is used to track students value
    const Middle_Name = document.getElementById("Middle_Name").value; //Defining "Middle_Name" variable that is used to track students value
    const Last_Name = document.getElementById("Last_Name").value; //Defining "Last_Name" variable that is used to track students value
    const Student_Email = document.getElementById("Student_Email").value; //Defining "Student_Email" variable that is used to track students value
    const Course = document.getElementById("Course").value; //Defining "Course" variable that is used to track students value
    const Gender = document.getElementById("Gender").value; //Defining "Gender" variable that is used to track students value
    const isEnrolled = document.querySelector('input[name="isEnrolled"]:checked')?.value; //Defining "isEnrolled" variable that is used to track input type "ratio" which tracks if student has selected if they are enrolled in WBL or they are not enrolled where it uses the input name of "isEnrolled" ("('input[name="isEnrolled"]:checked')?.value;)")
    const Document = document.getElementById("Document") //Defining "Document" variable that is used to get the input field that stores the files, by the id ("getElementById") 


    if(Student_id === "" || First_Name === "" || Last_Name === "" || Student_Email === "" || Course === "" || Gender === "" || !isEnrolled || Document.files.length === 0){ //Using if statement to process if inputfields are empty where if it is then error will be provided 
        alert("You must fill in the required fied to submit this") //Gives an pop up error stating that input fields must be filled until it is submitted
        return //Using return to stop running the function once input fields are empty
    }else if(Student_id.length !== 8){
        alert("Your Account ID must be 8 digit long")
        return
    }else if(!Student_Email.endsWith("@rave.ac.uk")){ //It uses an else if to process if student email address belongs to university, where if the email does not belong to university then it will provide a pop up error stating that they must be university student to apply this application form 
        alert("You have to be a Ravensbourne student to apply for this") //Gives an pop up error 
    }



    

    try{ //Using try and catch block which tries to send the request which sends the form  to the backend , where if there is a problem in backend server then it will jump to catch block where it will provide an error 
        const getJobDetailUrl = new URLSearchParams(window.location.search) //Defining "getJobDetailUrl" variable that gets the query parameters (which means that key values are added in the URL link, which is normally used to add additional data in the URL), which gets the values in job name, industry name, project type and job type. These values will be integrated to the database collection in MongoDb server, which says which jobs students are applying. It uses "URLSearchParams" method to work with the parameters within the URL where it uses "window.location.search" to look for the parameters within the URL
        let Job_Name = getJobDetailUrl.get("Job_Name") //Defining "Job_Name" variable to extract the job name value ("Job_Name") in the URL by using ".get" attribute
        let Industry_Name = getJobDetailUrl.get("Industry_Name") //Defining "Industry_Name" variable to extract the Industry Name value ("Industry_Name") in the URL by using ".get" attribute
        let Job_Type = getJobDetailUrl.get("Job_Type") //Defining "Job_Type" variable to extract the job type value ("Job_Type") in the URL by using ".get" attribute
        let Project_Type = getJobDetailUrl.get("Project_Type") //Defining "Project_Type" variable to extract the project type value ("Project_Type") in the URL by using ".get" attribute

       


        Job_Name = encodeURIComponent(Job_Name) //Using variable "Job_Name" to set special characteristics in values that contains spaces, which avoids bugs in URL, which uses "encodeURIComponent" attribute 
        Industry_Name = encodeURIComponent(Industry_Name) //Using variable "Industry_Name" to set special characteristics in values that contains spaces, which avoids bugs in URL, which uses "encodeURIComponent" attribute 
        Job_Type = encodeURIComponent(Job_Type) //Using variable "Job_Type" to set special characteristics in values that contains spaces, which avoids bugs in URL, which uses "encodeURIComponent" attribute 
        Project_Type = encodeURIComponent(Project_Type) //Using variable "Project_Type" to set special characteristics in values that contains spaces, which avoids bugs in URL, which uses "encodeURIComponent" attribute 
        const processApplicationForm = await fetch(`http://localhost:8080/application-form/${Job_Name}/${Industry_Name}/${Job_Type}/${Project_Type}`, { //Defining "processApplicationForm" variable that fetches (makes requests) to the backend server (locahost:8080), which calls the endpoint of "application-form" which is stored in the router, where once this endpoint has been called then it will insert the application form to the database once it has been submitted. It uses "await" to not move to next line of function whilst this function is in progress. It adds the parameter of "Job_Name","Industry_Name", "Job_Type", "Project_Type" (Using "$" to call the variable) in the URL where it is also sent to the backend. The backend will extract the given job name, project type, job type and industry name, where it is being decoded and added to the database (CHECK "application_form_routes.js" which is located in Backend/Routes/Job_Routes)
            method: 'POST',  //Using http method "POST" to send the form to the backend server
            headers: {'Content-Type': 'application/json'}, //It uses "headers" method to send the content as a json which is easier for backend server to retrieve data 
            body: JSON.stringify({ //Defining "body" object as "JSON.stringify" which converts the students  value  into json format
                Job_Name:Job_Name, //Adding  value "Job_Name" which has been extracted from the URL, when requesting to the server side
                Industry_Name:Industry_Name, //Adding  value "Industry_Name" which has been extracted from the URL, when requesting to the server side
                Job_Type:Job_Type, //Adding  value "Job_Type" which has been extracted from the URL, when requesting to the server side
                Project_Type:Project_Type, //Adding  value "Project_Type" which has been extracted from the URL, when requesting to the server side
                Student_id, //Adding input value "Student_id" when requesting to the server side
                First_Name, //Adding input value "First_Name" when requesting to the server side
                Middle_Name, //Adding input value "Middle_Name" when requesting to the server side
                Last_Name, //Adding input value "Last_Name" when requesting to the server side
                Student_Email, //Adding input value "Student_Email" when requesting to the server side
                Course, //Adding input value "Course" when requesting to the server side
                Gender, //Adding input value "Gender" when requesting to the server side
                Avalability:avalability, //Adding list of added avalability that student has inputed (avalability)
                Skills:skills, //Adding list of added skills that student has inputed (skills)
                Experience_Name:experiences, //Adding list of added experiences that student has inputed (experiences)
                Name_of_certification:certifications, //Adding list of added certifications that student has inputed (certifications)
                Document:documentItem, //Adding list of added documents that student has inputed (documentItem)
                Link:linkItem //Adding list of added links that student has inputed (linkItem)
            })
        })

        const response = processApplicationForm.json()

        if(processApplicationForm.ok){
            alert("Your Application form has been submitted, thank you for applying. You may close this tab")
        }


        
       

    } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
        console.log(err) //Printing error message in console 
    }


}