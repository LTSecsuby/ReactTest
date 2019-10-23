import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavbarWrap from "./components/navbar/NavbarWrap";
import Profile from "./components/ProfileComponent/Profile";
import Dialogs from "./components/DialogsComponent/Dialogs";
import Weather from "./components/WeatherComponent/Weather";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/FriendsComponent/Friends";
import GroupsContainer from "./components/GroupsComponent/GroupsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import WeatherWidgetContainer from "./components/WeatherComponent/WeatherWidgetContainer";





function App() {

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

                                    <NavbarContainer />
                                </div>
                                <div className="col-sm-9">

                                    <Route path={'/Groups'} render={
                                        () => <GroupsContainer />
                                            }
                                    />
                                    <Route path={'/Weather'} render={
                                        () => <WeatherWidgetContainer />
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
