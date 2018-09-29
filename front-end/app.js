import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './containers/App'
import './assets/css/tabler.css'
import './assets/css/dashboard.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const routers = (
    <BrowserRouter>
        <Route path ="" component={App}/>
    </BrowserRouter>
)

ReactDOM.render(routers, document.getElementById('root'))