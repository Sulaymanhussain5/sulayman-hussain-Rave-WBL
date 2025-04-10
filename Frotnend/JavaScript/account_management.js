let skills = [] //Defining array variable "skills" which is used to integrate students skills which will be sent to the backend which will be stored in the database server as a "array" data type 
let avalabileList = [] //Defining array variable "avalabileList" which is used to integrate students avalability which will be sent to the backend which will be stored in the database server as a "array" data type 
let documentItem = [] //Defining array variable "documentItem" which is used to integrate students documentItem which will be sent to the backend which will be stored in the database server as a "array" data type 
let experiences=[] //Defining array variable "experiences" which is used to integrate students experiences which will be sent to the backend which will be stored in the database server as a "array" data type 
let certifications=[] //Defining array variable "certifications" which is used to integrate students certifications which will be sent to the backend which will be stored in the database server as a "array" data type 



function addSkills(event){ //Defining the function of "addSkills" which is used to  dynamically input students value as a list, where it is added in the array list variable "skills". Additionally, it enables students a choice to remove the skills once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const skillsList = document.getElementById("skillList") //Defining "skillsList" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById") 
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



function addAvalability(event){ //Defining the function of "addAvalability" which is used to  dynamically input students avalability value as a list, where it is added in the array list variable "avalabiltiyList". Additionally, it enables students to remove the avalability once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const avalabilityList = document.getElementById("avalabilityList") //Defining "avalabilityList" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById") 
    const Availability = document.getElementById("Availability").value //Defining "Availability" variable that is used to track students value

    if(Availability !== ""){ //Uses if statement to check if avalability valie (Availability) is not empyty where if it is not empty, then it will display the list, createsa a "li" element that stores students selected avalability in the list (li tag) and adds it to the "avalableList" list
        avalabilityList.style.display = "block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "avalabilityList" ul element. "block" means that list is visable once "Add" button is clicked 
        const listAvalability = document.createElement("li"); //Defining variable "listAvalability" which adds a element of "li" in within JavaScript document 
        listAvalability.textContent = Availability //Using ".textContent" attribute which stores student avalability in the "<li>" tag
        avalabilityList.appendChild(listAvalability) + avalabilityList.appendChild(document.createElement("br")) //Using ".appendChild" attribute to add list of students avalability in the "<ul>" tag which is stored in the "avalabilityList" variable, additionally it also adds a space in each of the avalability that is being inputed in the list ("br") in the "<ul>" tag
        avalabileList.push(Availability) //Using ".push" attribute to add students selected avalability "(Availability)" in the array list "avalabileList"     
        document.getElementById("Availability").value="" //Using "getElementById" attribute which gets the input field element which is stored as a id, where it removes the value once students has added their avalability in the list

        const removeButton = document.createElement('button') //Defining "removeButton" variable that creates a button which will be used to remove the selected avalability within the list
        removeButton.classList.add("removeButton") //Using ".classList" and "add" attribute which is used to add the class name which is used to style the button ("removeButton")
        removeButton.textContent = "REMOVE" //Using ".textContent" attribute which stores the text "REMOVE" in the button element 
        removeButton.addEventListener('click', function(){ //Using ".addEventListener" which adds a action (or event) once the "REMOVE" button has been pressed. It uses 2 attribute of when should the event occur ("click") and action (which is used to create a function that removes the avalability in the list)
            listAvalability.remove() //Using ".remove" attribute to remove the element from the client side once remove button has been pressed
            avalabileList.splice(Availability) //Using ".splice" attribute to remove the selected avalability value from the defined array list variable "avalableList" once student removes the availablity from the list

        })
        listAvalability.appendChild(removeButton) //Using ".appendChild" attribute to add the remove button "(removeButton)"" in the list which is stored in "<ul" tag which is defined in "listAvalability" variable
    }

}

function addDoc(event){ //Defining the function of "addDoc" which is used to  dynamically input students documents as a list, where it is added in the array list variable "documentItem". Additionally, it enables students to remove the documents once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const Document = document.getElementById("Document") //Defining "Availability" variable that is used to get the input field that stores the files, by the id ("getElementById") 
    const fileItem = document.getElementById("documentList") //Defining "fileItem" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById") 
    fileItem.style.display = "block" //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "fileItem" ul element. "block" means that list is visable once "Add" button is clicked 
    for (file of event.target.files){ //Uses a for loop to iterate through students file selection, where once the students has selected a file ("event.target.files") then it will be added in the list where list will be created which stores students selected document
        const fileList = document.createElement('li') //Defining variable "fileList" which adds a element of "li" in within JavaScript document
        fileList.textContent = `${file.name}` //Using ".textContent" attribute which stores student document name in the "<li>" tag
        fileItem.appendChild(fileList) //Using ".appendChild" attribute to add list of students documents in the "<ul>" ("fileItem") tag which is stored in the "fileList" variable
        documentItem.push(file.name) //Using ".push" attribute to add students selected avalability "(Availability)" in the array list "avalabileList"  

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

function addExperience(event){ //Defining the function of "addExperience" which is used to  dynamically input students experience value as a list, where it is added in the array list variable "experiences". Additionally, it enables students to remove the experiences once it is added 
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const experienceList = document.getElementById("experienceList") //Defining "experienceList" variable that gets the element of "ul(unordered list)" which is stored in the html document, by the id ("getElementById") 
    const Experience_Name = document.getElementById("Experience_Name").value //Defining "Experience_Name" variable that is used to track students value
   
    if(Experience_Name !== ""){ //Uses if statement to check if experience value (Experience_Name) is not empyty where if it is not empty, then it will display the list, createsa a "li" element that stores students selected experience in the list (li tag) and adds it to the "experiences" list
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
    const Name_of_certification = document.getElementById("Certificate_Name").value //Defining "Name_of_certification" variable that is used to track students value
   


    if(Name_of_certification !== ""){ //Uses if statement to check if experience value (Name_of_certification) is not empyty where if it is not empty, then it will display the list, createsa a "li" element that stores students selected certification in the list (li tag) and adds it to the "certifications" list
        certificationList.style.display = "block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "certificationList" ul element. "block" means that list is visable once "Add" button is clicked 
        const listCertification = document.createElement("li"); //Defining variable "listCertification" which adds a element of "li" in within JavaScript document 
        listCertification.textContent = Name_of_certification //Using ".textContent" attribute which stores student certification ("Name_of_certification") in the "<li>" tag
        certificationList.appendChild(listCertification) + certificationList.appendChild(document.createElement("br")) //Using ".appendChild" attribute to add list of students certification in the "<ul>" tag which is stored in the "certificationList" variable, additionally it also adds a space in each of the certification that is being inputed in the list ("br") in the "<ul>" tag
        certifications.push(Name_of_certification) //Using ".push" attribute to add students selected certification "(Name_of_certification)" in the array list "certifications" 
        document.getElementById("Certificate_Name").value="" //Using "getElementById" attribute which gets the input field element which is stored as a id, where it removes the value once students has added their certifications in the list

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


function accountInput(event){  //Defining the function of "accountInput" which is used to  dynamically input students profile picture, once student has selected the image from the input field with type of "file"
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const inputImage = document.getElementById("inputImage"); //Defining "inputImage" variable that is used get the input field with input type "file" that is used to insert an image. "getElementById" attribute is used to get the id that contains <input> tag with type "file"
    const accountImg = document.getElementById("profilePic"); //Defining "accountImg" variable that is used to get the "img" tag which is used to dynamically change the image once student has selected the image they want to integrate (as referenced from "inputImage" variable). "getElementById" attribute is used to get the id that contains <img> tag

    if(inputImage.files && inputImage.files[0]){ //Using if statement to process if student has selected an image ("inputImage.files") and if one of the image file has been selected ("inputImgae.files[0]") where if yes then it will read the file and loads the image in the client side of the system 
        const imageProcess = new FileReader() //Defining "imageProcess" variable that process the files once students has selected the image file ("FileReader")
        imageProcess.readAsDataURL(inputImage.files[0]) //Using ".readAsDataURL" attribute which is used to read the files in the URL format, once students has selected the file ("inputImage.files[0]") which is easier for computer to read image when converted in URL

        imageProcess.onload = function(event){ //Using ".onload" attribute to perform an action once image is finished processing and that it is being loaded in the client side of the system
            accountImg.src = event.target.result; //Using ".src (source)" attribute which has been set to students selected file data (event.target.result) which is normally formated in base24 
            accountImg.style.display = "block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "accountImg" img element. "block" means that list is visable once image is loaded 
        }
        console.log(imageProcess) //Prints the image data in the console ( devtools in browsers of chrome, edge, etc)
    }
}
document.getElementById("addSkillBtn").addEventListener('click', addSkills) //Getting the id element of "addSkillBtn" which is stored in the <button> tag and using "addEventListener" attribute to add an action once student adds a skills. It has 2 attribute where when should the event occur ("click") and action (linked to the "addSkills" function which deals with adding skills in the list)
document.getElementById("addAvalabilityBtn").addEventListener('click', addAvalability) //Getting the id element of "addAvalabilityBtn" which is stored in the <button> tag and using "addEventListener" attribute to add an action once student adds a avalability. It has 2 attribute where when should the event occur ("click") and action (linked to the "addAvalability" function which deals with adding avalability in the list)
document.getElementById("Document").addEventListener('change', addDoc) //Getting the id element of "Document" which is stored in the <input> tag and using "addEventListener" attribute to add an action once student selected the document . It has 2 attribute where when should the event occur ("change") and action (linked to the addDoc function which deals with adding document in the list)
document.getElementById("addExperiences").addEventListener('click', addExperience) //Getting the id element of "addExperiences" which is stored in the <button> tag and using "addEventListener" attribute to add an action once student adds a experiences. It has 2 attribute where when should the event occur ("click") and action (linked to the addExperience function which deals with adding experiences in the list)
document.getElementById("addCertification").addEventListener('click', addCertification) //Getting the id element of "addCertification" which is stored in the <button> tag and using "addEventListener" attribute to add an action once student adds a certifications. It has 2 attribute where when should the event occur ("click") and action (linked to the addCertification function which deals with adding certifications in the list)



async function Account_Management(event) { //Defining the function of "Account_Management" which is used to sends requests to the backend (local host 8080) to send the form, whiich uses "POST" method
    event.preventDefault() //Using ".preventDefault" which is used to prevent the action from happening
    const Student_id = document.getElementById("Student_id").value; //Defining "Student_id" variable that is used to track students value
    const First_Name = document.getElementById("First_Name").value; //Defining "First_Name" variable that is used to track students value
    const Middle_Name = document.getElementById("Middle_Name").value; //Defining "Middle_Name" variable that is used to track students value
    const Last_Name = document.getElementById("Last_Name").value; //Defining "Last_Name" variable that is used to track students value
    const Student_Email = document.getElementById("Student_Email").value; //Defining "Student_Email" variable that is used to track students value
    const Course = document.getElementById("Course").value; //Defining "Course" variable that is used to track students value
    const Gender = document.getElementById("Gender").value; //Defining "Gender" variable that is used to track students value
    const Document = document.getElementById("Document") //Defining "Document" variable that is used to get the input field that stores the files, by the id ("getElementById") 
    const inputImage = document.getElementById("inputImage").files[0] //Defining "inputImage" variable that is used get the input field with input type "file" that is used to insert an image. "getElementById" attribute is used to get the id that contains <input> tag with type "file" and it tracks the files that student has selected (".files[0]")
    let base64 = "" ;//Defining "base64" variable which stores an empty string, this variable will be updated once image is stored which will get the image data based on staff image selection


    if(Student_id === "" || First_Name === "" || Last_Name === "" || Student_Email === "" || Course === "" || Gender === "" || Document.files.length === 0){ //Using if statement to process if inputfields are empty where if it is then error will be provided 
        alert("You must fill in the required fied to submit this") //Gives an pop up error stating that input fields must be filled until it is submitted
        return //Using return to stop running the function once input fields are empty
    }
    
    if(inputImage){ //Using if statement to process if student has selected an image ("inputImage.files")  where if yes then it will read the file and loads the image in the client side of the system 
        const imageProcess = new FileReader() //Defining "imageProcess" variable that process the files once students has selected the image file ("FileReader")
        imageProcess.readAsDataURL(inputImage) //Using ".readAsDataURL" attribute which is used to read the files in the URL format, once students has selected the file ("inputImage.files[0]") which is easier for computer to read image when converted in URL
        imageProcess.onload = async function(){ //Using ".onload" attribute to perform an action once image is finished processing and that it is being loaded in the client side of the system. It uses an async (asynchronous) function when performing tasks in the background without stopping the system 
            base64 = imageProcess.result //Using "base64" variable to add a URL data of the image ("imageProcess.result"), which will be sent to the database
            console.log("base64 Image", base64) //Prints the image data in the console 
        try{ //Using try and catch block which tries to send the request which sends the form  to the backend , where if there is a problem in backend server then it will jump to catch block where it will provide an error 
            const processApplicationForm = await fetch('http://localhost:8080/account_management', { //Defining "processApplicationForm" variable that fetches (makes requests) to the backend server (locahost:8080), which calls the endpoint of "account_management" which is stored in the router, where once this endpoint has been called then it will insert the student account form to the database once it has been submitted. It uses "await" to not move to next line of function whilst this function is in progress. 
                method: 'POST', //Using http method "POST" to send the form to the backend server 
                headers: {'Content-Type': 'application/json'}, //It uses "headers" method to send the content as a json which is easier for backend server to retrieve data 
                body: JSON.stringify({ //Defining "body" object as "JSON.stringify" which converts the students  value  into json format
                    Image: base64, //Adding image data which is converted to "base64", when requesting to the server side
                    Student_id, //Adding input value "Student_id" when requesting to the server side
                    First_Name, //Adding input value "First_Name" when requesting to the server side
                    Middle_Name, //Adding input value "Middle_Name" when requesting to the server side
                    Last_Name, //Adding input value "Last_Name" when requesting to the server side
                    Student_Email, //Adding input value "Student_Email" when requesting to the server side
                    Course, //Adding input value "Course" when requesting to the server side
                    Gender, //Adding input value "Gender" when requesting to the server side
                    Skills:skillList, //Adding list of added skills that student has inputed (skillList)
                    Avalability:avalabileList, //Adding list of added avalability that student has inputed (avalabileList)
                    Experience_Name:experiences, //Adding list of added experiences that student has inputed (experiences)
                    Name_of_certification:certifications, //Adding list of added certifications that student has inputed (certifications)
                    Document:documentItem //Adding list of added documents that student has inputed (documentItem)
                })
            })

        
        } catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
            console.log(err) //Printing error message in console 
        }
    }}


}