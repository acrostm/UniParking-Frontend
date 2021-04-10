# INFO30005_NBO_Front_End_Application

URL to the Back  End: https://no-backing-out-30005.herokuapp.com/

URL to the Front End: https://nbo-front-end.herokuapp.com/Home

URL to the MongoDB databse: https://cloud.mongodb.com/v2/5e96d0b21765523fc23a9c7a#metrics/replicaSet/5e96d2eed1365360a6f50229/explorer/NBO


The functionalities for the demonstration are:

Functionality 1: Sign up and view users
On the deployed front end, click the 'Sign up/Login' button (located in the navigation bar of all pages), then click the 'Sign up here' link below the login button.
This page is also accessible by directly using the web address: https://nbo-front-end.herokuapp.com/registermain
Once on the register page, the user can create an account by filling in the fields. First name and last name is optional, while email and password is compulsory. Validation is implemented to check the existence of these two compulsory fields. If the email is empty, a message will pop up reminding the user that a valid email is required.
This function is still under construction, because there are other validations that can be implemented, for example the confirmation of email and password by letting the user enter the same content twice. Another validation that can be implemented is checking the email is in the format of "xxx@xxx.xxx".
This sign up function is designed to not be a necessary step to use the main functionalities of the website. It is designed to unlock the functionality of letting users write a personal note to remind themselves about where they parked their car or other things necessary.
After completing the signup, currently, the website would redirect to a page displaying all users and their passwords, solely for the purpose of debugging. In the end this user information will naturally be hidden to user.

Functionality 2: Adding car parks and display all the available car parks.
On the home page header, just click the "API to Backend" button, and Add Carpark(https://nbo-front-end.herokuapp.com/AddPark), where you can type in new carpark information. Then submit, and the page will jump to all carparks page(https://nbo-front-end.herokuapp.com/AllParks), the carparks list is displayed there. Then the carparks added will be shown on the Map(https://nbo-front-end.herokuapp.com/Detailmap) with all other carparks (not been applies to the google map yet, just demo now).


Functionality 3 (Record Parking Location & Updating Car Park Status):
The record parking location functionality can be found in the notes page (https://nbo-front-end.herokuapp.com/NoteTable) through the navigation bar, the user can then look at notes already added or add new notes (https://nbo-front-end.herokuapp.com/AddNote). Adding a new note will give the user a form where they can input the date of parking, parking location, and notes.
The updating car park status functionality can be found in the survey page (https://nbo-front-end.herokuapp.com/Survey) through the navigation bar, the user can submit a survey that indicates how full the carpark is. This information is stored on the database and can later be used in the Detailmap section to show an estimate for the availability of carparks.




Note: The basic skeleton was adapted from "create my react app", and a small amount codes are reused from the sample codes provided in the lectures and workshops.
















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
