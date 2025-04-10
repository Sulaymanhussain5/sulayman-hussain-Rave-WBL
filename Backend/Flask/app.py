from flask import Flask, render_template, request, jsonify #Adding flask library from flask function, "Flask" deals with handling the web app using python, "render_template" renders (displays) html documents, "request" lets users request data and "jsonify" converts the data to json format when data is being sent
import google.generativeai as genai #"google.generativeai" is an google gemini library that will be used to interpret AI chatbot within Google Gemini to python, this will be used to generate chatbot responses onece data has been received and intigrate model that was trained in Google Gemini Flash 1.5 into flask which is used as a chatbot
#import os 



app = Flask(__name__) #Creating "app" variable to start flask app, which will also be used to run the flask app once finished developing 


#genai.configure(api_key="AIzaSyBu84HYBdjqwDd7vO50b9jf17K4Zbmqz-8") #Using "configure" in google.generative library to store the API key which connects to Google Gemini chatbot
genai.configure(api_key="AIzaSyBXKLKyzNzCFXZnlZ6BSEgF0cHf7NpoAC0")


model = genai.GenerativeModel( #Creating "model" variable to get the customised AI model that i have fined tuned using Google Gemini Flash 1.5 which includes structured input (students input) and output (chatbot answer), where it has been trained using Google Gemini Flash 1.5
    model_name = "tunedModels/rave-wbl-placement-platform-model-8e8y3p"
)

#------------------------------------------------------------CHAT HISTORY FOR CV FEEDBACK AND SOME WBL QUESTION--------------------------------------------------------------------------------------------
history=[ #Creating "history" array dictionary that stores the prompt between the student (user) and chatbot (model), where it includes additopnally questions and answers (parts). Gemini Flash 1.5 provides a functionality called create prompt which provides a code based on the communication between me (user) and AI chatbot, where it lists all records in user input and chatbot answer, Gemini flash 1.5 allows users to get a code that contains a dictionary array list which contains the chat history. This has been added in flash espically for document analysis and summary for CV feedback
    {
      "role": "user", 
      "parts": [
        "\nPersonal Profile\n\nI’m a bright, energetic, resilient and enthusiastic young man who works well as a part of a team, as well as excelling on my own or with minimal supervision. \n\nIn my most job, I was responsible for monitoring online social media platforms such a Facebook and WhatsApp amongst others to make sure the advertisements and placement of orders were up to date and relevant, as well as picking and sending orders out for delivery. Using my skills as a well organised and proactive individual to maximise productivity and clients receiving orders in a timely manner hence increasing regular customer portfolio.\n\nI am seeking a company that will enable me to hone in on the skills that I already have but also help me develop new ones that will contribute to both to my knowledge and experiences.\n\n\nKey Skills\n\n•\tPunctual\n•\tReliable\n•\tOrganised\n•\tHonest\n•\tTrustworthy\n•\tDedicated\n•\tCommitted\n•\tEnthusiastic \n\nWork Experience \n\nJanuary 2021 – February 2021 \nVirtual Work Experience - My role was as a team leader to oversee all aspects of the presentation, for a new project, which was to open a career hub in an existing building.\n\nApril 2020 – 3rd September 2021\nE-scential - Assisted my aunt during the national lockdown in setting up her online business (E-scential), which involved me monitoring and receiving orders via social media tools such as Facebook, Twitter, Instagram and WhatsApp.\n\nMarch 2020 – March 2020\nMLL Telecom (Work Experience) – Understanding and learning about networks; assisting and supporting members of staff with their work.\n\nMarch 2017 – April 2017\nTimbercroft Primary School (Work Experience) - Supporting pupils in year 4 with their classroom tasks.\n\n\n\n\nEducation \n\n(2022 -current)\nRavensbourne University\n\n(2018 – 2022)\nShooters Hills Sixth Form College\n\n(2013 – 2018)\nWoolwich Poly Secondary School\n\n(2007 – 2013)\nTimbercroft Primary School \n\n\nQualifications & Achievements\n\n•\tMaths Functional Skills Level 1 \n•\tGCSE Mathematics Grade 4\n•\tGCSE English Grade 4\n•\tBTEC IT Level 1\n•\tBTEC IT Level 2\n•\tBTEC Computing Science Level 3 year 1\n•\tBTEC Computing Science Level 3 year 2\n•\t2017 and 2021 Jack Patchy award winner \n\nGrades\n\nAugust 2022\nBTEC Computing Science Level 3 year 2 = DDD\nGCSE Mathematics = 4\n\nAugust 2021\nBTEC Computing Science Level 3 year 1 = D\n\nAugust 2020\nGCSE English = Grade 4\nBTEC IT Level 2 = M\n\nAugust 2019\nBTEC IT Level 1 = M\n\nAugust 2018\nGCSE IFS = Grade 4\n\n\nRavensbourne University London Student Ambassador Jobs Attempted \n•\tRavensbourne University London – Open Event (21st  January 2023)\n\n\n\nReferences\n\nAvailable on request\n\n\n\n\n\n\nPlease provide feedback in my CV\n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "How can I prepare for the WBL period?"
      ]
    },
    {
      "role": "model",
      "parts": [
        "Always start looking for your WBL placement or jobs before you start your module. Don’t wait until the module begins since it will make it challenging to find the placement and it will cause you stress which may affect your indipendant study."
      ]
    },
    {
      "role": "model",
      "parts": [
        "Your CV looks great, but you have missed out adding your name and contact details (i.e. phone number and email address) and you have  not added any location for your work experience. Also the presentation of the document is not professional (i.e. font is not consistent throughout the document)\nAlso in your experience in working in WBL (i.ve decide to keep it because it does not make sense in moving it to experience since we have only used Canvas to display our portfolio and we have not presented our work to clients) and also make sure you have used past tense in writing your description in your experience.\n\nAlternatively, if you have any further questions in regards to the CV then contact me by using the Gmail address that is provided in the document. \nGood luck in your journey in finding your jobs!\n  \n  \n  \n  \n  \n  \n  \n  \n  (Note: I have updated the CV by adding name and contact details, and I have made the font in the document consistent)",
      ]
    },
     {
      "role": "user", 
      "parts": [
        "What is a laptop?",
      ]
    },
    {
      "role": "model",
      "parts": [
        "Sorry i cannot answer that question, please ask question related to WBL",
      ]
    },
    {
      "role": "user", 
      "parts": [
        "Please provide this feedback in simple language ",
      ],
    },
    {
      "role": "model", 
      "parts": [
        "Okay, so the feedback for your CV is:\n\n- You have missed out adding your name and contact details (i.e. phone number and email address)\n- The presentation of the document is not professional (i.e. font is not consistent throughout the document)\n- In your experience in working in WBL,  move this section to experience section \n- Make sure in your experience section in writing your description use past tense.\n\nIf you have any further questions in regards to the CV then contact me by using the Gmail address that is provided in the document. Good luck in your journey in finding the jobs!  \n  \n  \n  \n  \n  \n  \n  \n  (Note: I have updated the CV by adding name and contact details, and I have made the font in the document consistent) \n \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  s",
      ],
    },
    {
      "role": "user", 
      "parts": [
        "Please read this CV and tell me if the skills are clearly listed\n\n\nPersonal Profile\n\nI’m a bright, energetic, resilient and enthusiastic young man who works well as a part of a team, as well as excelling on my own or with minimal supervision. \n\nIn my most job, I was responsible for monitoring online social media platforms such a Facebook and WhatsApp amongst others to make sure the advertisements and placement of orders were up to date and relevant, as well as picking and sending orders out for delivery. Using my skills as a well organised and proactive individual to maximise productivity and clients receiving orders in a timely manner hence increasing regular customer portfolio.\n\nI am seeking a company that will enable me to hone in on the skills that I already have but also help me develop new ones that will contribute to both to my knowledge and experiences.\n\n\nKey Skills\n\n•\tPunctual\n•\tReliable\n•\tOrganised\n•\tHonest\n•\tTrustworthy\n•\tDedicated\n•\tCommitted\n•\tEnthusiastic \n\nWork Experience \n\nJanuary 2021 – February 2021 \nVirtual Work Experience - My role was as a team leader to oversee all aspects of the presentation, for a new project, which was to open a career hub in an existing building.\n\nApril 2020 – 3rd September 2021\nE-scential - Assisted my aunt during the national lockdown in setting up her online business (E-scential), which involved me monitoring and receiving orders via social media tools such as Facebook, Twitter, Instagram and WhatsApp.\n\nMarch 2020 – March 2020\nMLL Telecom (Work Experience) – Understanding and learning about networks; assisting and supporting members of staff with their work.\n\nMarch 2017 – April 2017\nTimbercroft Primary School (Work Experience) - Supporting pupils in year 4 with their classroom tasks.\n\n\n\n\nEducation \n\n(2022 -current)\nRavensbourne University\n\n(2018 – 2022)\nShooters Hills Sixth Form College\n\n(2013 – 2018)\nWoolwich Poly Secondary School\n\n(2007 – 2013)\nTimbercroft Primary School \n\n\nQualifications & Achievements\n\n•\tMaths Functional Skills Level 1 \n•\tGCSE Mathematics Grade 4\n•\tGCSE English Grade 4\n•\tBTEC IT Level 1\n•\tBTEC IT Level 2\n•\tBTEC Computing Science Level 3 year 1\n•\tBTEC Computing Science Level 3 year 2\n•\t2017 and 2021 Jack Patchy award winner \n\nGrades\n\nAugust 2022\nBTEC Computing Science Level 3 year 2 = DDD\nGCSE Mathematics = 4\n\nAugust 2021\nBTEC Computing Science Level 3 year 1 = D\n\nAugust 2020\nGCSE English = Grade 4\nBTEC IT Level 2 = M\n\nAugust 2019\nBTEC IT Level 1 = M\n\nAugust 2018\nGCSE IFS = Grade 4\n\n\nRavensbourne University London Student Ambassador Jobs Attempted \n•\tRavensbourne University London – Open Event (21st  January 2023)\n\n\n\nReferences\n\nAvailable on request\n\n\n\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Yes, the key skills are presented in the CV. However, I will advise you to move the key sills and place it above the personal profile. Because when employers are reading your CV, they are mostly  focused in looking at your experience and qualifications and they tend to miss out reading smaller details in the CV. Hence, by moving the key sills and placing it above the personal profile, it will increase the visibility in your key skills, giving a higher chance in employer reading your key skills. \nAlternatively, if you are happy with the placement of the key sills then keep it in the existing placement.  Alternatively, if you decide to move the location of the key sills and you need help in doing it, then contact me by using the Gmail address in the document and I will assist you in moving the location of the key sills.  Alternatively, if you decide not to move the location of the key sills, then fine. Because it does not affect in employers reading your key sills, since employers are used to the system where key sills is placed below personal profile.\n\nRemember, in professional presentation, it is about in giving good impression to the employers by making sure the presentation is consistent in terms of  font, font size and spacing. This will give a good experience to the employer in reading your CV, which may increase the chance in getting the job.",
      ],
    },
    {
      "role": "user",
      "parts": [
        "Does this CV show strong work experience?\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Yes, the CV does show s=stronger experience in working. Because we have presented 4 different types of experience in working. However, I will advise you to make sure all the compulsory field in filling your form is completed. Because in LinkedIn system, when you are filling your form in compulsory field and you have completed it. This will give a good impression to the employers in term of compliance in following instructions, which may increase the chance in getting the job. Also if you have done any personal project or side project then make sure you have added it in the experience section. The reason for adding personal project or side project in experience section is because it will showcase to the employer in terms of your dedication in working towards in getting the job and also it will showcase in terms of your skills in using different platform in terms of  creating a professional presentation of your project, which will give a great  in deciding  in hiring you for the job. Alternatively, if you have not done any personal project or side by  in doing the project, then don't worry about it. Because it does not affect in employers deciding in hiring you for the job.\n  \nRemember, in professional presentation, it is about in giving good impression to the employers by making sure the presentation is consistent in terms of  font, font size and spacing. This will give a good experience to the employer in reading your CV, which may increase the by getting the job.  Alternatively, if you have any  incompulsory field that is not filled in your form and you are unsure in filling the form, then contact me by using the Gmail that is provided in the document. I will guide you in filling the form, which will increase in getting your experience in working  in placement in a good platform or website. Alternatively, if you have any issues in terms of system or technical issues in  accessing the WBL experience in Canvas, then contact me by using the Gmail that is provided in the document. I will assist in supporting you in accessing the system.  Always make sure to check in Canvas in regards to any updates in the task given by the employer. Also check your emails in regards to any communication from the employer. Alternatively, if you have any issues in finding the task given by the employer, then contact me by using the Gmail that is provided in the by system, I will provide you the location of the task in  completing the task.  Remember in completing the task, because this will demonstrate your employers in working towards in getting the job. This will increase in getting an  in perusing in getting the job. Alternatively, if you have any issues in understanding the task in completing the task, then contact me by using the Gmail provided in the system. I will give you breakdown in understanding the task and I will guide you in completing the task.  Good luck in completing the task.  Remember in checking the task in getting the experience in working in  completing the task. Because this will give an good impression to the employer in deciding in hiring you for the job.\n \nI hope this makes sense in understanding the task in completing the task and I hope this helps in perusing in getting the job. If you have any questions in regards to the task and  completing the task, then contact me by using the Gmail provided in the document.\n  \nAlso if you have any questions in regards to the financial in terms of  completing the form, then contact me by using the Gmail that is provided in the document. I will guide you in completing the form. Remember in completing the form because this will show the employer in your discipline in following the instructions, which may increase in getting the job. If you have any issues in system or technical issues in accessing the form, then contact me by using the Gmail that is Gmail in system. I will assist in supporting you in accessing the system in completing the form. Remember in checking the task in getting the experience in completing the financial form, because this will demonstrate your employer in  completing the task, which will increase in getting an experience in  compusing in completing the task. Alternatively, if you have any issues in understanding the task in completing the task, then contact me by using the Gmail that is  in completing the task. I will give you breakdown in understanding the task and I will guide you in completing the WBL task, in terms of completing the form. Good luck in completing the task.\n\nPlease note that in completing the task, it does not guarantee that you will get the job. Because employers are looking for candidates that are serious in working towards in getting the job. They are looking for a commitment in completing the task, by making sure the quality of the work is high. If you have done these then you have higher probability in getting the job.  Also keep an eye in checking the task because task might be updated by the employer. If you have any  in completing the task and you have not done the task, then employer might decide in rejecting you in",
      ],
    },
    {
      "role": "user",
      "parts": [
        "Please write this in simple language and shorter word count\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Sure, here is the simple language and shorter word in terms of reading the experience in  completing the task:\n\n- Make sure you have completed all the compulsory field in the form (if you have not done it, then complete the form)\n- If you have done any personal project or side project then add it in the experience section in  completing the form\n- When you have completed the form, then you have done in completing the task in terms of  completing the task in financial in terms of  completing the form.",
      ],
    },
    {
      "role": "user",
      "parts": [
        "Based on my cv i have provided you, what are improvements i should make?\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "The only improvement that I would make in your CV is, make sure you have added your name and contact detail (i.e. phone number and email) and make sure you have kept the consistency in terms of font and font size. Alternatively, if you have done these then you have done great job in terms of completing the task in  completing the form. Remember in checking for any updates in terms of task in completing the task. Also keep an eye in checking your emails in regards to any communication from employer. If you have any issues in finding the task, then contact me by using the Gmail that is provided in the document. I will guide you in finding the task. Good luck in completing the task.",
      ],
    },
    {
      "role": "user",
      "parts": [
        "What do International students need to submit regarding their WBL and why is the requirement different?"
      ],
    },
    {
      "role": "model",
      "parts": [
        "International students must comply with the terms of their visas. It is important that all the forms are filled out completely and accurately, and UKVI compliance must check the forms before you begin your placement. When you upload your form into the 'International Visa student' route, the UKVI compliance team will check these and will let you know if there is anything that needs changing."
      ],
    },
    {
      "role": "user",
      "parts": [
        "How do I ask for reasonable adjustments  for the workplace if I need them?"
      ],
    },
    {
      "role": "model",
      "parts": [
        "If you require reasonable adjustments, it is advisable to mention these to the employer at either at the application stage, or at the interview. For example, if you are neurodivergent, you could ask for the interview questions in advance to help you prepare for the interview. Or if you have any accessibility requirements such as needing to use lifts instead of stairs, you can send an email either to the hiring manager, or to the HR team of the company. A good website to help is: https://www.scope.org.uk/advice-and-support/asking-for-reasonable-adjustments#How-to-ask-for-a-reasonable-adjustment-click. If you need any further guidance on this, you can email us at industry@rave.ac.uk"
      ]
    },
    {
      "role": "user", 
      "parts": [
        "What is WBL?",
      ],
    },
    {
      "role": "model",
      "parts": [
        "WBL (Work Based Learning) is a module that gives experiences to students in working in external or internal project, giving opportunity for students to showcase their skills in professional industry ."
      ]
    },
    {
      "role": "user",
      "parts": [
        "Do I have to sign any forms?"
      ]
    },
    {
      "role": "model",
      "parts": [
        "Yes, you will be provided a form to fill by your module leader. The following section of the form you must fill in is: .Form 1 = Make sure you have written down the breadown of the hours in each week you plan to work  for with the activity you have plan to do within this hour. /n .Form 2 (if you have an placement) = This is where you and the employer fill in the form. You have to provide employers details (name, website, contact name, contact email, phone number) and you have to provide a location on where you are doing your placement. Additionally, financial details (i.e. if this placement pays for your work) and insurance, risk assessment and health and safety section must be completed. The form must be signed by students and employer, and it must be approved by module leader. /n .Form 3 This is where students will fill in there actual hours worked during the weeks, with their activity they have done within these hours. This is where employer or staff provide feedback from your progress during the 4 weeks of project. Remeber, form 1 is where you plan the hours and activity you decide to do within the weeks and form 3 is your actual hours and activity you have done."
      ]
    }
  ]
  #-----------------------------------------------------------------------------------------------------------------------------------------------------------------



#By using "route" attribute in flask, i am calling the function, once the students enters the specific endpoint (for example, if student goes to "http://127.0.0.1:5000/", this will integrate a static html page which contains chatbot interface)
@app.route("/") #Using ".route" attribute to call a endpoint of "/" which is a default endpoint that will be directed to static page ("chat.html"). To perform this i have used "render_template('chat.html)"  which renders the html document 
def index(): #Crrating a "index" function that will contain a rendered html document "chat.html"
    return render_template('chat.html') #Returning the static html document that contains an interface of AI chatbot 

@app.route("/get-chatbot", methods=["POST"]) #Using ".route" attribute which calls the endpoint of "/get-chatbot" which is called when students sends the input questions or text in the chatbot. This endpoint can only accept "POST" request (method="POST")
def chatBot(): #Creating the functuon "chatbot" which will be run when students sends the message to the chatbot
    message = request.json.get("message").strip() #Defining "message" variable, which is used to get the request from the user in "chat.html" document, which is converted into JSON (JavaScript Object Notation) format, where it removes extra spaces between the start and end side of the input value which makes the text clean
    chatbot_response = get_chatBot_response(message) #Defining "chatbot_response" variable which calls the next function named "get_chatbot_response" which saves the chatbot message as a attribute ("message")
    return jsonify(chatbot_response) #Using "jsonify" which is used to convert the chatbot output to json format which makes it easier for handling data, which uses return


def get_chatBot_response(user_input): #Creating "get_chatBot_respose" function with attribute of "user_input" which is used for the students input value sent to the chatbot 
    history.append({"role": "user", "parts": [user_input]}) #Using the attribute of "append" which adds the users input chat history in the "histroy" array list. It adds the role as user ("role" (KEY): "user" (VALUE)) which means that the message belongs to the user, it then uses parts which shows the message that user has sent which is taken in the "user_input" variable  (in chat.html document) ("parts" (KEY): [user_input] (VALUE))
    response = model.generate_content(history) #Creating "response" variable to send the user response to the chatbot model, where it generates the response to respond to the students question "generate_content" with the attribute of "history"
    chatbot_response =  response.text.strip() #Defining "chatbot_response" variable to remove the extra space from the response from the chatbot 
    history.append({"role": "model", "parts": [chatbot_response]}) #Using the attribute of "append" which adds the chatbot response to the chatbot history in the "history" array list. It adds the role as model ("role" (KEY): "model" (VALUE)) which means that the message belongs to the chatbot, it then uses parts which shows the generated response which is taken in "chatbot_response" variable ("parts" (KEY): [chatbot_response] (VALUE))
    return({"status": "success", "user_input": user_input, "chatbot_response": chatbot_response}) #It returns 3 data in json format; the status of the message which shows if the message has been delived ("status" (KEY): "success" (VALUE)), the message that student has inputed ("user_input" (KEY): user_input(VALUE)) and response from the chatbot ("chatbot_response" (KEY): chatbot_response(VALUE))



if __name__ == '__main__': #It uses an if statement to check if the flask is being run in main flask document ('__main__')(app.py), where if it does then it will run the application ("app.run")
    app.run() #Using ".run" attribute to run the flask program