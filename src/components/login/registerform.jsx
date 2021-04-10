// ESLint validated

import React from "react";


import "./form.scss";
import { addNewUser } from "../../api";
import { NavLink } from 'react-router-dom';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
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
    var userObject = {};
    data.forEach((value, key) => { userObject[key] = value; });
    // call the API update the user details

    var result = await addNewUser(userObject);

    if (result === false) {
      window.location.reload();
    }

    // window.location.reload();
    window.location.replace("/AllUsers");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="base-container">
          <div className="header">Register</div>
          <div className="content">


            <div className="form">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="text" name="username" placeholder="Email Address" />
              </div>

              <div className="form-group">
                <label htmlFor="email2">Confirm Email Address</label>
                <input type="text" name="email2" placeholder="Confirm Email Address" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>

              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" placeholder="Confirm Password" />
              </div>

            </div>

          </div>

          <div className="footer">
            <button className="btntop">Register</button>
            <br />
            <NavLink className='btnbtm' to='/loginmain'>Already have an account? Login here</NavLink>
          </div>

        </div>
      </form>
    );
  }
}