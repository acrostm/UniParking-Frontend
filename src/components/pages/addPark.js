// ESLint Validated

import React from "react";

// import { Table, Tr } from 'styled-table-component';
import { Button, Input } from './usefulComponents';
import { addNewCarpark } from "../../api";

class AddPark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parkName: null,
            parkAddress: null,
            error: null,
            isLoaded: false,
            parks: [],
        };



        this.handleSubmit = this.handleSubmit.bind(this);

    }


    async handleSubmit(event) {
        // the following call will stop the form from submitting
        event.preventDefault();

        // get the form data
        const data = new FormData(event.target);
        var carparkObject = {};
        data.forEach((value, key) => { carparkObject[key] = value; });
        // call the API update the author details
        console.log(carparkObject);
        await addNewCarpark(carparkObject);

        // reload the page
        window.location.replace("/AllParks");

    }


    // render a HTML table with park information
    render() {

        const { error, parkAddress, parkName, parkHeight, parkCost, parkNote } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Carpark Name: <Input name="parkName" type="text" value={parkName} /> <br />
                        Carpark Address: <Input name="parkAddress" type="text" value={parkAddress} /> <br />
                        Height Limit: <Input name="parkHeight" type="number" value={parkHeight} /> <br />
                        Park Cost: <Input name="parkCost" type="text" value={parkCost} /> <br />
                        Note: <Input name="parkNote" type="text" value={parkNote} /> <br />
                        <Button>Add</Button>
                    </form>
                </div>

            );
        }
    }
}

export default AddPark;