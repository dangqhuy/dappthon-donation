import * as React from 'react'
import { Groups } from './Groups'
import { API_URL } from '../config'

class HomePage extends React.Component {
 
  state = {
    groups:[]
  }

  fetchGroups = () => {
    fetch(`${API_URL}/api/v1/groups`,{
      mode: 'cors',
      method: 'GET',
      credentials: 'include',
      
      headers: {
         'Content-Type': 'application/json',
       },

      })
      .then(resp => resp.json())
      .then(groups => {
        this.setState({
          groups: groups
        })
        console.log(groups)
      })
  }

  componentDidMount(){
    this.fetchGroups();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">
            company
            </h1>
          <div className="page-subtitle">1 - 12 of 1713 photos</div>
          <div className="page-options d-flex">
            <div className="input-icon ml-2">
              <span className="input-icon-addon">
                <i className="fa fa-search"></i>
              </span>
              <input type="text" className="form-control w-10" placeholder="Search company" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 my-md-5">
        <div className="container">
          <div className="row row-cards row-deck">
            <Groups/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default HomePage