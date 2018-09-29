import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from 'Header'
import Menu from 'Menu'


class App extends React.Component {

    render() {
        return (
            <div>
                <Header></Header>
                <Menu></Menu>
                <Router>
                    <Route path="/" component={HomePage}></Route>
                </Router>
            </div>
        )
    }
}
export default App;