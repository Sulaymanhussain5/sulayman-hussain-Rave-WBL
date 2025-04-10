document.getElementById("courseSearchBar").addEventListener("input", function () { //Adds an event listener to "courseSearchBar" component, which includes what event is being occured ("input") and action (function is created for the action)
    const courseAvalability = [ //Defining "courseAvalability" dictionary list variable that collects objects which contains information about courses whihch will be used to intigrate to the page once students search for course name
        {
            //-------------------------------------OBJECT 1: Computer Science-------------------------------------------------------------------------------------------
            img: "Assets/computer_science.png",
            courseName: "Computer Science",
            link: "computer_science_page.html"
            //-------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
        },
        {
            //-------------------------------------OBJECT 2: Fashion-------------------------------------------------------------------------------------------
            img: "Assets/fashion_icon.png",
            courseName: "Fashion",
            link: "fashion_page.html"
            //-------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
        },
        {
            //-------------------------------------OBJECT 3: Cyber Security-------------------------------------------------------------------------------------------
            img: "Assets/cybersecurity_icon.png",
            courseName: "Cyber Security",
            link: "cyber_security_page.html"
            //-------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
        }
    ]

    let searchBox = this.value.toLowerCase().trim(); //Defining "searchBox" which gets the value that students enters in search box ("this.value()"), converts the text in lower case ("toLowerCase()") and removes extra spaces in start and end of text (".trim()")
    let coursesElement = document.getElementById("course-container") //Defining "coursesElement" variable that collects element ID of <div> tag which contains list of courses



    coursesElement.innerHTML = ""; //Using "innerHTML" attribute to clear whole course container once the keyword has been entered in search box 

    let courseFoundItem = courseAvalability.filter(course => //Defining "courseFoundItem" variable that includes courseAvalability with attribute of filter, which filters the courses 
        course.courseName.toLowerCase().includes(searchBox) //It checks if the course ("courseName") is in the dictionary once students inputs it in the searchbox (".includes(searchhBox)"), it still accepts the search when user writes it in upper or lower case ("toLowerCase")
    );

    //Using the if statement to check if the course has been found once students inputs course name. If it does then it will create a <div> tag which will contain a cotainer of single course elements, however if the course doesn't exist then it will print a error message
    if (courseFoundItem.length > 0) {  //Uses if statement to check if students input matches course items ("courseFoundItem") from dictionary list, where if it's greater than 0 then course will appear  
        courseFoundItem.forEach(course => { //Uses "forEach" attribute to iterate through each items in "courseFoundItem" (where course details inputed) and once the course items has been found then it will use .innerHTML to add a <div> element to add courses
            //-----------uses "innerHTML" attribute to get the id name of "course-container" which is defined in "courseFoundItem" variable and adds coponent of courses. It uses "${}" to refer to dictionary and adds the elements that has been refered to dictionary list-------------------
            coursesElement.innerHTML += `
            <div class="course">
                <a href="${course.link}"><img src="${course.img}" width="200px"height="200px"><b>${course.courseName}</b></a>
            </div>
        `
            //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        })
    } else { //If students input has not matches the dictionary list which is refered to "courseFoundItem" then it will print error message 
        coursesElement.innerHTML = "<p>COURSE IS NOT ADDED TO THIS SYSTEM</p>"; //Uses "innerHTML" attribute to add <p> tag to give error when student input has not matches to dictionary list
    }

})