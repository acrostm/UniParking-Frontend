// ESLint Validated

import React from "react";
// import "./form.scss";
import { addNewNote } from "../../api";
// import {
//     NavLink as NavLink
// } from 'react-router-dom';

export class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteDate: null,
            noteLocation: null,
            noteNotes: null,
            error: null,
            isLoaded: false
        };



        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async handleSubmit(event) {
        // the following call will stop the form from submitting
        event.preventDefault();

        // get the form data
        const data = new FormData(event.target);
        var userObject = {};
        data.forEach((value, key) => { userObject[key] = value; });
        // call the API update the author details

        await addNewNote(userObject);

        // reload the page
        window.location.replace("/NoteTable");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="base-container">
                    <div className="header">Record your parking history</div>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="noteDate">Date of Parking</label>
                                <input type="date" name="noteDate" placeholder="Select the date you parked" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="noteLocation">Parking Location</label>
                                <input type="text" name="noteLocation" placeholder="Which Carpark did you use?" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="noteLocation">Notes</label>
                                <input type="text" name="noteNotes" placeholder="Any extra notes?" />
                            </div>

                        </div>

                    </div>

                    <div className="footer">
                        <button className="btntop">Add Note</button>
                        <br />
                    </div>

                </div>
            </form>
        );
    }
}