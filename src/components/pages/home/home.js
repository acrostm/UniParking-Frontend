// ESLint Validated

import React, { Component } from 'react';
import {
    NavLink,
} from 'react-router-dom';
import mapimg from './mapimg.png';
import noteimg from './imgnote.png';
import surveyimg from './imgsurvey.png';
import "../../../style/home.css";



class Home extends Component {

    render() {
        return (
            <main className='homegridcontainer'>
                <div className='map'>

                    <NavLink className='mapimg' to='/Detailmap'>
                        <h3 className="title">Map</h3>
                        <img className='mapimg' src={mapimg} alt='mapimg'></img>
                    </ NavLink>
                </div>
                <div className='survey'>

                    <NavLink className='surveyimg' to='/Survey'>
                        <h3 className="title">Survey</h3>
                        <img className='surveyimg' src={surveyimg} alt='surveyimg'></img>
                    </ NavLink>
                </div>
                <div className='notes'>

                    <NavLink className='noteimg' to='/NoteTable'>
                        <img className='noteimg' src={noteimg} alt='noteimg'></img>
                        <h3 className="title">Notes</h3>
                    </ NavLink>
                </div>

            </main>
        );
    }
}


export default Home;


