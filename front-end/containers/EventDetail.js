import * as React from 'react'
import Plans from '../components/Plans'
import { API_URL } from '../config'

const id = window.location.pathname.split('/')[2]

class EventDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      event: null,
      loading: true,
    }
  }

  fetchDetailEvent() {
    fetch(`${API_URL}/api/v1/events/${id}`)
      .then(resp => resp.json())
      .then(event => this.setState({ event, loading: false }))
  }

  componentDidMount() {
    this.fetchDetailEvent()
  }

  render() {
    const { event, loading } = this.state
    if (loading) {
      return (
        <h1>LOADING</h1>
      )
    }
    return (

      <div className="my-3 my-md-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-lg-1">
              <div className="text-center"><h3>{event.title}</h3></div>
              <div className="list-group list-group-transparent mb-0">
                <div className="timeline-custom">
                  <ul className="timeline">
                    <React.Fragment>
                      {event.activities.map(a =>
                        <Plans key={a.id} title={a.title} balance={3000} success={a.status} />
                      )}
                    </React.Fragment>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card">
                <div className="card-body">
                  <div className="text-wrap p-lg-6">
                    <h2 className="mt-0 mb-4">Introduction</h2>
                    <p>While the Foundation strives to generate its own income and operate in a self-sustaining manner, as non-profit initiative we do rely on the generous donations of like-minded individuals and organisations.!</p>
                    <h3 id="setup-environment">Details</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventDetail;