import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import Content2 from "./components/content2/Content2";
import Content3 from "./components/content3/Content3";
import Widget from "./components/widget/Widget";
import {BrowserRouter, Route} from "react-router-dom";

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
                                    <Navbar/>
                                </div>
                                <div className="col-sm-9">
                                    <Route path='/content' component={Content}/>
                                    <Route path='/content2' component={Content2}/>
                                    <Route path='/content3' component={Content3}/>
                                    <Route path='/widget' component={Widget}/>
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
