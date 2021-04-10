// ESLint validated

const axios = require('axios');



const BACKEND_URL = "https://no-backing-out-30005.herokuapp.com";
// const BACKEND_URL = "http://localhost:3000";



export function getAllUsers() {
    const endpoint = BACKEND_URL + `/users/fetchUsers`;
    try {
        return axios.get(endpoint).then(res => res.data);
    } catch (e) {
        return e;
    }
}


export function getAllParks() {
    const endpoint = BACKEND_URL + `/parks/fetchParks`;
    try {
        return axios.get(endpoint).then(res => res.data);
    } catch (e) {
        return e;
    }
}

export function getAllNotes() {
    const endpoint = BACKEND_URL + `/parks/getNotes`;
    try {
        return axios.get(endpoint).then(res => res.data);
    } catch (e) {
        return e;
    }
}


export function addNewCarpark(carpark) {

    const { parkAddress, parkName, parkHeight, parkNote, parkCost } = carpark;
    const endpoint = BACKEND_URL + `/parks/insertCarPark`;
    // check the carpark id is present
    if (!parkName) {
        alert("must include park name");
        return;
    }

    return axios({
        url: endpoint,  // send a request to the library API
        method: "POST", // HTTP POST method
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            parkAddress,
            parkName,
            parkHeight,
            parkNote,
            parkCost
        })
    });
}

export function addNewUser(userIn) {

    const { username, password } = userIn;
	console.log("hi1");
    const endpoint = BACKEND_URL + `/users/signup`;
	console.log("hi2");
    // check the carpark id is present
    if (!username) {
        alert("must include a valid email address");
        return false;
    }

    if (!(username.includes('@'))) {
        alert("must include a valid email address");
        return false;
    }
	console.log(endpoint);




    return axios({
        url: endpoint,  // send a request to the library API
        method: "POST", // HTTP POST method
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            username,
            password
        })
    });
}


export function addNewNote(noteIn) {

    const { noteDate, noteLocation, noteNotes } = noteIn;
    const endpoint = BACKEND_URL + `/parks/newNote`;
    // Ensure the parking location is submitted
    if (!noteLocation) {
        alert("must include a parking location");
        return;
    }

    return axios({
        url: endpoint,  // send a request to the library API
        method: "POST", // HTTP POST method
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            noteDate,
            noteLocation,
            noteNotes
        })
    });
}


export function updateCrowdness(crowdness) {
    let dataPost;
    const { parkName, parkCrowdness } = crowdness;
    const endpoint = BACKEND_URL + `/parks/updateCrowdness`;


    if (!parkName) {
        alert("parkName must be present");
        return;
    }


    dataPost = axios({
        url: endpoint,  // send a request to the library API
        method: "POST", // HTTP POST method
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({ // payload -- values to change
            parkName,
            parkCrowdness
        })
    });

    return dataPost;

}

// module.exports.getAllUsers = this.getAllUsers();