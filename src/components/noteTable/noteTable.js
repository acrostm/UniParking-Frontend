// ESLint Validated

import React, { Component } from 'react';
import { getAllNotes } from "../../api";
// import { NoteForm } from "./noteForm";
import { NavLink } from 'react-router-dom';

class NoteTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []

        };
    }


    async  fetchNotes() {
        const data = await getAllNotes();
        this.setState({ notes: data, isLoaded: true });
    }

    componentDidMount() {
        this.fetchNotes();
    }




    render() {
        console.log(this.state);
        return (
            <main>
                <h1>Your Parking Place Notes Here!</h1>
                <div className='notetable'>

                    <table>
                        <thead>
                            <tr>
                                <th >Time</th>
                                <th >Loction</th>
                                <th >Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.notes.map((value, key) => (
                                <tr active key={key}>
                                    <td>{value["parkingDate"]}</td>
                                    <td>{value["parkName"]}</td>
                                    <td>{value["parkingNote"]}</td>
                                </tr>
                            ))}
                            <tr>
                            </tr>

                            <NavLink className='btnbtm' to='/AddNote'><button className="btnall">Add a New Note</button></NavLink>


                        </tbody>
                    </table>

                </div>
            </main>
        );

    }
}

export default NoteTable;