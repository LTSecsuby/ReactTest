import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import GroupsContainer from "./components/GroupsComponent/GroupsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import WeatherWidgetContainer from "./components/WeatherComponent/WeatherWidgetContainer";
import FriendsContainer from "./components/FriendsComponent/FriendsContainer";
import DialogsContainer from "./components/DialogsComponent/DialogComponent/DialogsContainer";
import Footer from "./components/footer/Footer";
import FooterContainer from "./components/footer/FooterContainer";
import ProfileContainer from "./components/ProfileComponent/ProfileContainer";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div className={'Header'}>
                    <Header/>
                </div>

                <NavbarContainer/>

                <div className={'Content'}>
                    <Route path={'/Profile'} render={
                        () => <div><ProfileContainer /></div>
                    }
                    />

                    <Route path={'/Dialogs'} render={
                        () => <div><DialogsContainer/></div>
                    }
                    />

                    <Route path={'/Groups'} render={
                        () => <div><GroupsContainer/></div>
                    }
                    />
                    <Route path={'/Friends'} render={
                        () => <div><FriendsContainer/></div>
                    }
                    />
                    <Route path={'/Weather'} render={
                        () => <div><WeatherWidgetContainer/></div>
                    }
                    />
                </div>
                <div className={'FooterContainer'}>
                <div className={'Footer1'}>
                    <Footer/>
                </div>
                <div className={'Footer2'}>
                    <Footer/>
                </div>
                <div className={'Footer3'}>
                    <Footer/>
                </div>
            </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
