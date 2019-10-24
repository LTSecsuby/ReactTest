import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Profile from "./components/ProfileComponent/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import GroupsContainer from "./components/GroupsComponent/GroupsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import WeatherWidgetContainer from "./components/WeatherComponent/WeatherWidgetContainer";
import FriendsContainer from "./components/FriendsComponent/FriendsContainer";
import DialogsContainer from "./components/DialogsComponent/DialogComponent/DialogsContainer";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavbarContainer/>
                <Route path={'/Profile'} component={Profile}/>
                <Route path={'/Dialogs'} render={
                    () => <DialogsContainer/>
                }
                />
                <Route path={'/Groups'} render={
                    () => <GroupsContainer/>
                }
                />
                <Route path={'/Friends'} render={
                    () => <FriendsContainer/>
                }
                />
                <Route path={'/Weather'} render={
                    () => <WeatherWidgetContainer/>
                }
                />
            </div>

        </BrowserRouter>
    );
}

export default App;
