import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import LeftPanel from "./component/LeftPanel/LeftPanel";
import RightPanel from "./component/RightPanel/RightPanel";
import PollResult from "./component/PollResult/PollResult";

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <LeftPanel/>
                <div className="app-wrapper-content">
                <Switch>
                    <Route exact path="/">
                        <Header/>
                    </Route>
                    <Route exact path="/main">
                        <Main/>
                    </Route>
                    <Route exact path="/pollRezalt">
                        <PollResult/>
                    </Route>
                </Switch>
                </div>
                <RightPanel/>
            </div>
        </Router>
    );
}

export default App;


