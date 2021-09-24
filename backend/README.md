# INFO30005_NBO

URL to the Back  End: https://no-backing-out-30005.herokuapp.com/

URL to the Front End: https://nbo-front-end.herokuapp.com/Home

URL to the MongoDB databse: https://cloud.mongodb.com/v2/5e96d0b21765523fc23a9c7a#metrics/replicaSet/5e96d2eed1365360a6f50229/explorer/NBO


Coding Style Protocol:
    Variable naming standard: Camel case preferred


The functionalities for both the front-end and back-end:

admin email: admin@NBO.com
admin password: Info30005

Functionality 1: New user sign up
Group: Account Management
Description & How to access:  The Sign-up function allows users to create an account, so they can record their parking spots in the future. This sign up function is designed to not be a necessary step to use the main functionalities of the website. It is designed to unlock the functionality of letting users write a personal note to remind themselves about where they parked their car or other things necessary. On the deployed front end, click the 'Sign up/Login' button (located in the navigation section), then click the 'Sign up here' link below the login button. Once on the register page, the user can create an account by filling in the fields. Last name is optional while all the other fields are compulsory. Validation is implemented to check the existence of these two compulsory fields. If the email is empty or invalid, a message will pop up reminding the user that a valid email is required. In addition, if the confirmation fields do not match, a warning message will pop up to allow users to check and re-enter. After clicking the “Register” button, a POST request will be sent to the backend, if the email address has already been, the user has to choose another email. After completing the signup, currently, the website would redirect to the login page.

Main Relevant Files: Front-End: App.js, api.js, validator.js, and files in the “/src/login/” folder.
 Back-End: “userController.js”, “/models/users.js”, “/routes/users.js”,
Note on Testing: Simply enter “npm test” to run all the tests, the test outcome will be printed out on screen, and a coverage table will display the test coverage. “npm test” can be used both in the front-end or the back-end. The test cases include sign up with valid information, sign up with invalid information entered, and sign up with an already registered email address. In addition, there are integration testings to fetch and delete the new user we just registered, this is to ensure “npm test” do not add any more data into the database. All the tests should pass unless there is something wrong.

Functionality 2: User login
Group: Account Management
Description & How to access:  The login function allows users to write a personal note to remind themselves about where they parked their car or other things necessary. On the deployed front end, click the 'Sign up/Login' button (located in the navigation section), then enter the user credentials. After clicking the “Log in” button, a POST request will be sent to the backend, if the authentication failed, a red warning message will pop up. On the other hand, if the authentication succeeded a token will be sent back to the user, and the token will automatically be included in future HTTP communications. The user will be directed to his/her parking history page, where he/she can view or add new notes. You can also log out or change the account after logging. 

Main Relevant Files: Front-End: App.js, api.js, validator.js and files in the “/src/login/” folder.
 Back-End: “userController.js”, “/models/users.js”, “/routes/users.js”,
Note on Testing: Simply enter “npm test” to run all the tests, the test outcome will be printed out on screen, and a coverage table will display the tests coverage. “npm test” can be used both in the front-end or the back-end. The test cases include login with valid credentials and login with invalid credentials. All the test cases should pass unless there is something wrong.



Functionality 3: Admin mode (View user information, adding car parks, and display all the available car parks).
Group: Administration
Description & How to access:  Please log in with the admin email “admin@NBO.com”, and admin password “Info30005”. The administrator has more power than the regular users. For example, the admin account can view all the users’ parking notes as well as who made these notes. In addition, the admin account can see an extra "API to Backend" button on the navigator. Just click the button, and Add Carpark, where you can type in new carpark information and submit. Besides, the administrator can view all the user information and car park information by clicking the relevant buttons. However, the password is encrypted, so the users’ real passwords would not be revealed. 
Main Relevant Files: Front-End: App.js, api.js, validator.js, noteTable.js, and files in the “/src/login/” folder. Back-End: “userController.js”, “/models/users.js”, “/routes/users.js”, “parkController.js”, “/models/carparks.js”, “/models/parkingLocations.js”, “/routes/parks.js”



Functionality 4:(View nearby carparks & Updating Car Park Status):
Group: Carpark Management
Description & How to access:  The view the nearby car parks, simply click the “Map” tab. All the available carparks will be displayed on the screen, the user can click any red pin to view the details of the carpark. In addition, the updating car park status functionality can be found in the survey page (https://nbo-front-end.herokuapp.com/Survey) through the navigation bar, the user can submit a survey that indicates how full the carpark is. This information is stored on the database, so all the users can see the real-time updates.
Main Relevant Files: Front-End: App.js, api.js, validator.js, noteTable.js, and files in the “/src/login/” folder and the “/src/map/” folder. Back-End: “parkController.js”, “/models/carparks.js”, “/models/parkingLocations.js”, “/routes/parks.js”


Functionality 5: Record Parking Location 
Group: Carpark Management
Description & How to access:  
After logged in, the record parking location functionality can be found in the notes page (https://nbo-front-end.herokuapp.com/NoteTable) through the navigation bar, the user can then look at notes already added or add new notes. Adding a new note will give the user a form where they can input the date of parking, parking location, and notes. 
Main Relevant Files: Front-End: App.js, api.js, “noteTable folder”and files in the “/src/login/” folder. Back-End: “parkController.js”, “/models/carparks.js”, “/models/parkingLocations.js”, “/routes/parks.js”


Some basic functionalities for the backend end:

Functionality 1: Adding users and view their information:
    The web app can save the users’ information in the database, only requiring the users to click “sign up” and input their account names and passwords. And as a developing server, clicking “Display Registered Users” can show the user all the accounts and the passwords. The information can be categorized in the database by the users’ account names and accessed with the users’ accounts and passwords. In detail, the information would be like, the car locations notes, recent searching history, finished survey records, and personal details. 
    Thus, with this management system, users can have their personalized settings accessible online.

Functionality 2: Adding car parks and display all the available car parks.
 Currently this function consists of adding a new car park and displaying all car parks, which correspond to the adding and searching functions in the future. The input of adding a car park requires first clicking on the ‘Add Car Park’ button, then entering the eight fields. ‘Car Park Name’ and ‘Car Park Address’ are mandatory fields. Then click the add button will output this document to the MongoDB database. To display the car parks in the database, click the ‘Display Car Parks’ button.
 1.	From the home page (https://no-backing-out-30005.herokuapp.com/), click the 'Add Car Park’ button under the ‘Car Park Management’ tab.
 2.	Give details of this car park. Name and address are mandatory fields. (Currently, the website is using dummy data, but the real data is also under construction in MongoDB.)
 3.	Click the ‘Add’ button on the button of the page (the only button). The page will be redirected to the homepage.
 4.	Click the ‘Display Car Parks’ button and the car park user just added would be displayed on the bottom.


Functionality 3: Record Parking location & Updating car park status
The record parking location function on the website can be used to note down the location of where their car is parked (name of the car park, level, parking number, and personal notes) in order to help them remember a confirmation will be given when the data has been recorded. At this moment the website is not able to display the information back to the user, this will be implemented later.

1. Click “record” in the Record Parking Location section will bring the user to the information page
2. The user can input the Car Park Name, Parking Level, Parking Number and Note
3. Clicking the submit button uploads the information to the server
4. A confirmation page is displayed and the user can return home


The updating car park status function is a survey in which users can undergo to improve the accuracy of the available spaces data that is provided. The user will give the car park name and provide a status in the form of radio buttons, after submitting a confirmation is given. 
1. Click “update status” in the upload car park status section
2. The user can input the Car Park Name and the Car Park Status on radio buttons
3. Clicking the submit button uploads the information to the server
4. A confirmation page is displayed and the user can return home


# UniParking-Backend
