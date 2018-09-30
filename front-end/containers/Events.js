import * as React from 'react'
import Event from '../components/Event'
import { API_URL } from '../config'


class Events extends React.Component {
  state = {
    groups: [],
    group: {},
  };


  fetchEvent = () => {
    fetch(`${API_URL}/api/v1/groups/`, {
      mode: 'cors',
      method: 'GET',
      credentials: 'include',

      headers: {
        'Content-Type': 'application/json',
      },

    })
      .then(resp => resp.json())
      .then(groupsFetch => {
        this.setState({ groups: groupsFetch })
      })

  }

  componentDidMount() {
      this.fetchEvent();
      this.state.groups.map( groupItem => {
        if(group.id === 1)
        this.setState({group: groupItem});
        console.log(group);
      })

  }

  render() {
    return (

      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Events</h3>
          </div>
          <div className="table-responsive">
            <table className="table card-table table-vcenter text-nowrap">
              <thead>
                <tr>
                  <th className="w-1">No.</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Created</th>
                  <th>Expire</th>
                  <th>Status</th>
                  <th>Target</th>
                  <th>Balance</th>
                  <th></th>
                </tr>
              </thead>
              <React.Fragment>
                <Event name={this.state.group.name} company={"Nam Tran"} created='16-11-2018'
                  expire='20-11-2018' status={'Pending'} target={10000} balance={800} />
              </React.Fragment>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Events;  