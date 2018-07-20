import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Main from "./contailner/Main";
import WebtoonHome from "./contailner/WebtoonHome";
import Viewer from "./contailner/Viewer";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/webtoon/:webtoonId" component={WebtoonHome} />
                    <Route path="/viewer/:episodeId" component={Viewer} />
                </div>
            </Router>
        );
    }
}

export default App;
