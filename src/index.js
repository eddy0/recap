import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from "react-router-dom";

function render() {
    ReactDOM.render(
        <Router>
            <App/>
        </Router>,
        document.getElementById('root')
    )
}

if (module.hot) {
    module.hot.accept('./App', function () {
        setTimeout(render);
    });
}

render()