// ESLint Validated

import React, { Component } from 'react';
import { updateCrowdness } from "../../api";



class Survey extends Component {



  constructor(props) {
    super(props);
    this.state = {
      parkName: null,
      parkCrowdness: null,
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
    var crowdnessObject = {};
    data.forEach((value, key) => { crowdnessObject[key] = value; });
    // call the API update the author details

    await updateCrowdness(crowdnessObject);


    // reload the page
    window.location.replace("/AllParks");
  }

  render() {
    return (

      <div className='surveyform'>
        <h1>Help other drivers with your information</h1>
        <form onSubmit={this.handleSubmit}>

          <div className='label'>
            <label htmlForfor='parkname'>Enter the Carpark Name:</label>
          </div>
          <div className='input'>
            <input type='text' name='parkName' />
          </div>



          <div className='label'>
            <label htmlForfor='parkCrowdness'>How crowd is the carpark?</label>
          </div>
          <div className='input'>
            <select name="parkCrowdness" value={this.state.mycar}>
              <option value="Full">Full</option>
              <option value="Almost Full">Almost Full</option>
              <option value="Empty">Empty</option>
              <option value="NA">Not Sure</option>
            </select>
          </div>
          <div className="btncontainer">
            <button className="btnall">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Survey;