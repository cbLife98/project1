import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';


//Components
import Home from './component/home';
import Artist from './component/artist';

const App = () => {
    return(
        <BrowserRouter>
        <div>
            <Route exact path = "/" component = { Home } />
            <Route exact path = "/artist/:artistId" component = { Artist } />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render (
    <App /> , document.querySelector ("#root")
)