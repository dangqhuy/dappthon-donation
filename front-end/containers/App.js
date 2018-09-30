
import * as React from 'react'
import Header from './Header'
import HomePage from './HomePage'
import Events from './Events'
import { Route ,Switch} from 'react-router-dom'
import { GroupDetail } from './Groups'
import EventDetail from './EventDetail'

class App extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page-main">
                    <Header/>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/groups/:id" component={Events}/>
                    <Route path="/events" component={EventDetail} />
                </div>
            </div>
        )
    }
}
export default App;