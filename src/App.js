// Note: The basic skeleton was adapted from "create my react app",
// and a small amount codes are reused from the sample codes provided in the lectures and workshops.
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Deatailmap from './components/pages//maps/detailpark';
import NoteTable from './components/noteTable/noteTable';
import Survey from './components/survey/surveyTable';
import Home from './components/pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import APIMain from './components/pages/apiMain'



import AllUsers from './components/pages/allUsers';
import Loginapp from './components/login/loginapp';
import AllParks from './components/pages/allParks';
import AddPark from './components/pages/addPark';
import Registerapp from './components/login/registerapp';

//style
import "./style/style.css";
import { NoteForm } from './components/noteTable/noteForm';


class App extends Component {

    render() {
        return (
            <main className="maingridcontainer">
                <Router>

                    <header>
                        <Header />
                    </header>

                    <Route exact path='/apiPage' component={APIMain} />
                    <Route exact path='/AllUsers' component={AllUsers} />
                    <Route exact path='/AllParks' component={AllParks} />
                    <Route exact path='/AddPark' component={AddPark} />
                    <Route exact path='/Addnote' component={NoteForm} />
                    <Route exact path='/Detailmap' component={Deatailmap} />
                    <Route exact path='/loginmain' component={Loginapp} />
                    <Route exact path='/registermain' component={Registerapp} />
                    <Route exact path='/NoteTable' component={NoteTable} />
                    <Route exact path='/Survey' component={Survey} />
                    <Route exact path='/Home' component={Home} />
                    {/* <p>Maps here</p> */}
                    {/* <Mapcontainer /> */}
                    {/* <NoteTable /> */}


                    <footer>
                        <Footer />
                    </footer>

                </Router>

            </main>
        );
    }
}


export default App;