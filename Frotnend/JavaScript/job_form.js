let requiredSkills = [] //Defining array list variable of "requiredSkills" which adds the skills in the list which will be sent to the server side 
let meetingType = [] //Defining array list variable of "meetingType" which adds the meeting types in the list which will be sent to the server side 

function addRequiredSkills(event){ //Defining the function "addRequiredSkills" that deals with adding and removing skills in the list 
    event.preventDefault() 
    const Required_Skills = document.getElementById("Required_Skills").value; //Defining variable "Required_Skills" to get the input field, where it tracks down what staff is typing 
    const required_Skills = document.getElementById("required_Skills") //Defining a varable "required_Skills" which gets the ul element name "required_Skills" which is integrated in HTML document "2.3_staff_portal_job_post_form_page.html" which is inserted as an ID ("getElementById")

    if(Required_Skills !== ""){ //Uses if statement to check if skills valie (Required_Skills) is not empyty where if it's not, then it will display the list, createsa a "li" element that stores staffs selected skills in the list (li element) and adds it to the "required_Skills" list
        required_Skills.style.display="block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "required_Skills" ul element. "block" meams that list is displayed 
        const listRequiredSkills = document.createElement("li"); //Defining variable "listRequiredSkills" which adds a element of "li" in within JavaScript document 
        listRequiredSkills.textContent = Required_Skills //Using ".textContent" attribute to insert a text within the "li" list in "listRequiredSkills", where the text is set to staffs input value 
        required_Skills.appendChild(listRequiredSkills) + required_Skills.appendChild(document.createElement("br")) //Using ".appendChild" attribute to add the skills list in the "ul" tag 
        requiredSkills.push(Required_Skills) //Using ".push" attribute to add the staff selected skills in the array list "requiredSkills"
        document.getElementById("Required_Skills").value=""

        const removeButton = document.createElement('button') //Defining the variable "removeButton" to create a element of "button" which will be used to remove the selected skills from the array list
        removeButton.classList.add("removeButton") //Using attribute of ".classList" to add the classnae of "removeButton" in the remove button element ("removeButton")
        removeButton.textContent = "REMOVE" //Using ".textContent" attribute to insert a text within the "button", where it will display as "REMOVE" in the button 
        removeButton.addEventListener('click', function(){ //Using attribute of ".addEventListener" to add an event lisetener to the remove button has clicked, where it will remove a selected skill list. It includes 2 attribute, when the action will happen ("click") and an action (created a function to handle the action)
            listRequiredSkills.remove() //Using attribute of ".remove" to remove the selected skills from the list, which is refered to "listRequiredSkills"
        })
        listRequiredSkills.appendChild(removeButton) //Using attribute of "appendChild" to add the remove button in the selected skill list ("listRequiredSkills")
    }
}






function addMeetingType(event){ //Defining the function "addMeetingType" that deals with adding and removing meeting type in the list 
    event.preventDefault()
    const Meeting_Type = document.getElementById("Meeting_Type").value; //Defining variable "Meeting_Type" to get the input field, where it tracks down what staff is typing 
    const meeting_Type = document.getElementById("meeting_Type_List") //Defining a varable "meeting_Type" which gets the ul element name "meeting_Type_List" which is integrated in HTML document "2.3_staff_portal_job_post_form_page.html" which is inserted as an ID ("getElementById")

    if(Meeting_Type !== ""){ //Uses if statement to check if meeting type valie (Meeting_Type) is not empyty where if it's not, then it will display the list, createsa a "li" element that stores staffs selected meeting type in the list (li element) and adds it to the "meeting_Type" list
        meeting_Type.style.display="block"; //Using ".style" attribute to add a style of "display" whuch is set to "block" within the "meeting_Type" ul element. "block" meams that list is displayed 
        const listMeetingType = document.createElement("li"); //Defining variable "listMeetingType" which adds a element of "li" in within JavaScript document 
        listMeetingType.textContent = Meeting_Type //Using ".textContent" attribute to insert a text within the "li" list in "listMeetingType", where the text is set to staffs input value
        meeting_Type.appendChild(listMeetingType) + meeting_Type.appendChild(document.createElement("br")) //Using ".appendChild" attribute to add the meeting type list in the "ul" tag 
        meetingType.push(Meeting_Type) //Using ".push" attribute to add the staff selected meeting type in the array list "meetingType"
        document.getElementById("Meeting_Type").value=""

        const removeButton = document.createElement('button') //Defining the variable "removeButton" to create a element of "button" which will be used to remove the selected skills from the array list
        removeButton.classList.add("removeButton") //Using attribute of ".classList" to add the classnae of "removeButton" in the remove button element ("removeButton")
        removeButton.textContent = "REMOVE" //Using ".textContent" attribute to insert a text within the "button", where it will display as "REMOVE" in the button 
        removeButton.addEventListener('click', function(){ //Using attribute of ".addEventListener" to add an event lisetener to the remove button has clicked, where it will remove a selected meeting type list. It includes 2 attribute, when the action will happen ("click") and an action (created a function to handle the action)
            listMeetingType.remove() //Using attribute of ".remove" to remove the selected skills from the list, which is refered to "listMeetingType"
        })
        listMeetingType.appendChild(removeButton) //Using attribute of "appendChild" to add the remove button in the selected skill list ("listMeetingType")
    }
}


function logoInput(event){ //Defining the function "logoInput" that deals with adding compnay logo 
    const inputImage = document.getElementById("inputImage"); //Defining a varable "inputImage" which gets the "input" element name "inputImage" which is integrated in HTML document "2.3_staff_portal_job_post_form_page.html" which is inserted as an ID ("getElementById")
    const Logo = document.getElementById("logo"); //Defining a varable "Logo" which gets the "img" element name "logo" which is integrated in HTML document "2.3_staff_portal_job_post_form_page.html" which is inserted as an ID ("getElementById")

    if(inputImage.files && inputImage.files[0]){ //Using if statement to check if staff has inputed a image ("inputImage.files") and first image that staff has selected ("inputImage.files[0]")
        const imageProcess = new FileReader() //Defining variable "imageProcess" which is used to read files that staff has inputed ("FileReader" which is a free tool for JavaScript that reads files)
        imageProcess.readAsDataURL(inputImage.files[0]) //Using ".readAsDataURL" attribute to read images staff selected image ("inputImage.files[0]") in URL which makes it easier for data to be handled in browsers. 

        imageProcess.onload = function(event){ //Using ".onload" attribute to perform an action once images has been processed
            Logo.src = event.target.result; //Using ".src" which sets the imag, which is set to image data that browser has received ("event.target.result") 
            Logo.style.display = "block"; //Using ".style" attribute to style the image display which is set to "block" which means image is displayed in the client side 
        }
        console.log(imageProcess) //Prints the image data (imageProcess) in the console
    }
} 

document.getElementById("addRequiredSkillsBtn").addEventListener('click', addRequiredSkills) //Adds an event Listener to add button in Required Skills, where when staff clicks in "Add" then skills will be added in the list as refered to the function "addRequiredSkills"
document.getElementById("meetingTypeAddBtn").addEventListener('click', addMeetingType) //Adds an event Listener to add button in Meeting type, where when staff clicks in "Add" then skills will be added in the list as refered to the function "addMeetingType"


async function Job_Post_Form(event){ //Defines a function "Job_Post_Form" which adds the form to the database (which is sent in the server side) and add validation to the form 
    event.preventDefault(); //Using ".preventDefault" attribute from preventing the form to submit automatically 
    const Job_Name = document.getElementById("Job_Name").value; //Defining variable "Job_Name" to get the input field, where it tracks down what staff is typing 
    const Job_Location = document.getElementById("Job_Location").value; //Defining variable "Job_Location" to get the input field, where it tracks down what staff is typing 
    const Job_Course = document.getElementById("Job_Course").value; //Defining variable "Job_Course" to get the input field, where it tracks down what staff is typing 
    const Job_Description = document.getElementById("Job_Description").value; //Defining variable "Job_Description" to get the input field, where it tracks down what staff is typing 
    const jobRequirement = document.getElementById("job_requirement").value; //Defining variable "jobRequirement" to get the input field, where it tracks down what staff is typing 
    const Project_Type = document.getElementById("Project_Type").value; //Defining variable "Project_Type" to get the input field, where it tracks down what staff is typing 
    const Job_Type = document.getElementById("Job_Type").value; //Defining variable "Job_Type" to get the input field, where it tracks down what staff is typing 
    const industryOffer = document.getElementById("what-you-will-do").value; //Defining variable "industryOffer" to get the input field, where it tracks down what staff is typing 
    const Industry_Name = document.getElementById("Industry_Name").value; //Defining variable "Industry_Name" to get the input field, where it tracks down what staff is typing 
    const Industry_Email_Address = document.getElementById("Industry_Email_Address").value; //Defining variable "Industry_Email_Address" to get the input field, where it tracks down what staff is typing 
    const Industry_Job_Role = document.getElementById("Industry_Job_Role").value; //Defining variable "Industry_Job_Role" to get the input field, where it tracks down what staff is typing 
    const Start_Date = document.getElementById("Start_Date").value; //Defining variable "Start_Date" to get the input field, where it tracks down what staff is typing 
    const End_Date = document.getElementById("End_Date").value; //Defining variable "End_Date" to get the input field, where it tracks down what staff is typing 
    const inputImage = document.getElementById("inputImage").files[0] //Defining variable "inputImage" to get the input field type of files which gets the logo of the company, where it gets staff selected image
    let base64 = ""; //Defining "base64" variable which stores an empty string, this variable will be updated once image is stored which will get the image data based on staff image selection

    

    //Adding if statement to process input filed of Job_Name, Job_Location,jobRequirement, industryOffer, Indusrty_Name, Industry_Email_Address,Industry_Job_Role, Start_Date and End_Date is empty, where if it is then it will display an error and prevent from form being submited
    if(Job_Name === "" || Job_Location === "" || Job_Description === "" || jobRequirement === ""|| industryOffer === ""|| Industry_Name === "" || Industry_Email_Address === "" || Industry_Job_Role === "" || Start_Date === "" || End_Date === ""){
        alert("You must fill in the required fied to submit this") //Displays an pop error ("alert") where it displays an error 
        return //Stops the function running, until the staff inserts all the required input field
    }else if(!Job_Description >= 10){
        alert("Job Dec")
    }

    if(inputImage){ //Adding if statement to process if staff selected a image, where if yes, then it will read the image data and add the image data in the variable of "base64"
        const imageProcess = new FileReader() //Defining variable "imageProcess" which is used to read files that staff has inputed ("FileReader" which is a free tool for JavaScript that reads files)
        imageProcess.readAsDataURL(inputImage) //Using ".readAsDataURL" attribute to read images staff selected image ("inputImage.files[0]") in URL which makes it easier for data to be handled in browsers. 
        imageProcess.onload = async function(){ //Using ".onload" attribute to perform an action once images has been processed
            base64 = imageProcess.result //Referencing "base64" variable where image data is added
            console.log("base64 Image", base64) //Prints the image data in the console 
       

        try{ //Using try and catch block which tries to extract the data of job post in the backend, where if there is a problem in backend server then it will jump to catch block where it will provide an error 
            const processJobPost = await fetch('http://localhost:8080/job_post', { //Defining "processJobPost" variable to make request to the client server connected to localhost 8080 ("fetch") that has an endpoint of "job_post"
                method: 'POST', //Defining "method" object as  POST HTTP method whicj send the requested value to the server side ("method: 'POST'")
                headers: {'Content-Type': 'application/json'}, //Defining the "headers" object as "application/json" which sends the data in json format. It also tells the server what type of data will be sent ("Content-Type")
                body: JSON.stringify({ //Defining "body" object as "JSON.stringify" which converts the staff  value  into json format
                    Image: base64, //Adding image data which is converted to "base64", when requesting to the server side
                    Job_Name, //Adding input value "Job_Name" when requesting to the server side
                    Job_Type, //Adding input value "Job_Type" when requesting to the server side
                    Job_Location, //Adding input value "Job_Location" when requesting to the server side
                    Job_Course, //Adding input value "Job_Course" when requesting to the server side
                    Required_Skills: requiredSkills, //Adding list of added skills that staff has inputed (requiredSkills) 
                    Project_Type, //Adding input value "Project_Type" when requesting to the server side
                    Job_Description, //Adding input value "Job_Description" when requesting to the server side
                    jobRequirement, //Adding input value "jobRequirement" when requesting to the server side
                    industryOffer, //Adding input value "industryOffer" when requesting to the server side
                    Meeting_Type: meetingType, //Adding list of added skills that staff has inputed (meetingType) 
                    Industry_Name, //Adding input value "Industry_Name" when requesting to the server side
                    Industry_Email_Address, //Adding input value "Industry_Email_Address" when requesting to the server side
                    Industry_Job_Role, //Adding input value "Industry_Job_Role" when requesting to the server side
                    Start_Date, //Adding input value "Start_Date" when requesting to the server side
                    End_Date //Adding input value "End_Date" when requesting to the server side
                }) 
            }) 

            const response = processJobPost.json()

            if(processJobPost.ok){
                alert("Your job post form has been submitted, thank you for applying")
                window.location.href = "2.0_staffPortal_homepage.html"
            }
    
        
            


        }catch(err){ //Using catch block, to throw an error once javascript fails to extract the data in the backned, where error will be diisplayed in console
            console.log(err) //Printing error  message in console 
        }  
    }} 
 
}



