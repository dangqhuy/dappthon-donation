import * as React from 'react'

const Plan = () => {
  return (
    <div>
      <li className="timeline-item">
        <a>
          <div className="timeline-badge bg-red"></div>
          Vung Tau
        <div className="timeline-time">100.000 VND</div>
        </a>
      </li>
    </div>
  )
}
class Plan extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <React.Fragment>
        <Plan />
      </React.Fragment>
    )
  }
}

export default Plan;