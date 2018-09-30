import * as React from 'react'
import Event from '../components/Event'

class Events extends React.Component {


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
                      <Event name={'Nam'} company={"Nam Tran"} created='16-11-2018'
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