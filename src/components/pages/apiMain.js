// ESLint Validated

import React, { Component } from 'react';

import "../../style/style.css";

import {
    NavLink
} from 'react-router-dom';





class APIMenu extends Component {

    render() {
        return (
            <div className="extended">


                <NavLink className="link" to='/AllUsers'>All Registered Users</NavLink>


                <NavLink className="link" to='/AllParks'>All Available Parks</NavLink>


                <NavLink className="link" to='/AddPark'>Add a new Carpark</NavLink>


            </div>
        );
    }
}


export default APIMenu;