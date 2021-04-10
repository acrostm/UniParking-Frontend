import React from "react";
import "./app.scss";
import { Login } from "./loginform";


export default class Loginapp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    onChange = fields => {
        this.setState({ fields });
        window.location.replace("/Home");
    };

    render() {

        return (
            <div className="App">
                <div className="maincontainer">
                    <div className="container">
                        <Login onChange={fields => this.onChange(fields)} />
                        <p>{JSON.stringify(this.state.fields, null, 2)} </p>
                    </div>
                </div>
            </div>
        )
    }

}
