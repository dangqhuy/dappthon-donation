
import * as React from 'react'
import Header from './Header'
import Menu from './Menu'
import HomePage from './HomePage'
import Events from './Events'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page-main">
                    <Header />
                    <Menu />
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={HomePage}></Route>
                            <Route path="/events/:id" component={Events}></Route>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}
export default App;