import * as React from 'react'


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
                    <tbody>
                      <tr>
                        <td><span className="text-muted">001401</span></td>
                        <td><a href="invoice.html" className="text-inherit">Design Works</a></td>
                        <td>
                          Carlson Limited</td>
                        <td>
                          29 Sep 2018</td>
                        <td>
                          29 October 2018</td>
                        <td>
                          <span className="status-icon bg-success"></span> Paid</td>
                        <td>$887</td>
                        <td>$534</td>
                        <td className="text-right">
                          <a href="#" className="btn btn-secondary btn-sm">Donate</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
    )
  }
}

export default Events;