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
                                    <NavbarWrap state={props.state}/>
                                </div>
                                <div className="col-sm-9">
                                    <Route path={'/Profile'} component={Profile}/>
                                    <Route path={'/Dialogs'} render={
                                        () => <Dialogs state={props.state}/>
                                            }
                                    />
                                    <Route path={'/Groups'} render={
                                        () => <Groups state={props.state}/>
                                            }
                                    />
                                    <Route path={'/Friends'} render={
                                        () => <Friends state={props.state}/>
                                            }
                                    />
                                    <Route path={'/Weather'} render={
                                        () => <Weather state={props.state}/>
                                            }
                                    />
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
