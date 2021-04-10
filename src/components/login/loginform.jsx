import React from "react"
import "./form.scss";
import { NavLink } from 'react-router-dom';

export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }

  }



  // change = e => {
  //   this.props.onChange({ [e.target.name]: e.target.value })
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      email: "",
      password: "",
    });
    // this.props.onChange({
    //   email: "",
    //   password: "",
    // });
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">


          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                name="email"
                type="text"
                placeholder="Email Address"
                value={this.state.value}
              // onChange={e => this.change(e)} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
              // onChange={e => this.change(e)} 
              />
            </div>

          </div>

        </div>

        <div className="footer">
          <button className="btntop" onClick={e => this.onSubmit(e)}>Login</button>
          <br />
          <NavLink className='btnbtm' to='/registermain'>Signup here</NavLink>
        </div>
      </div>
    );
  }
}