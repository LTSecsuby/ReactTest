import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavbarWrap from "./components/navbar/NavbarWrap";
import Profile from "./components/ProfileComponent/Profile";
import Dialogs from "./components/DialogsComponent/Dialogs";
import Groups from "./components/GroupsComponent/Groups";
import Weather from "./components/WeatherComponent/Weather";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/FriendsComponent/Friends";

function App(props) {

    return (
        <BrowserRouter>
            <div className="App">

                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Header/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3">
                                    <NavbarWrap navbarData={props.navbarData} />
                                </div>
                                <div className="col-sm-9">
                                    <Route path={'/Profile'} component={Profile} />
                                    <Route path={'/Dialogs'} render={ () => <Dialogs dialogsData={props.dialogsData}/>} />
                                    <Route path={'/Groups'} component={Groups} />
                                    <Route path={'/Friends'} component={Friends} />
                                    <Route path={'/Weather'} component={Weather} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
