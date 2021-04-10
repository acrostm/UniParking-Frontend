// ESLint validated

import React from "react";
import "./app.scss";
import { Register } from "./registerform";




export default class Registerapp extends React.Component {

    render() {

        return (
            <div className="App">
                <div className="maincontainer">
                    <div className="container">
                        <Register />
                    </div>
                </div>
            </div>
        );
    }

}
