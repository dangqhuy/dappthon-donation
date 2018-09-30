import * as React from 'react'

const Plan = (props) => {
  return (
    <li className="timeline-item">
      <a href="#" className="text-dark">
        <div className="timeline-badge bg-red"></div>
        {props.title}
        <div className="timeline-time">{props.balance}</div>
      </a>
    </li>
  )
}
class Plans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      balance: "",
      success: false,
    }
  }


  render() {
    const { title, balance, success } = this.props;
    this.state = { title, balance, success };
    return (
      <li className="timeline-item d-flex justify-content-between">
        <a href="#" className="justify-content-between text-dark">
          <div className="timeline-badge bg-red"></div>
          {this.state.title}
          <div className="timeline-time">{this.state.balance}</div>
        </a>
        <div>

          {this.state.success ? <button className='btn btn-danger'>Donate</button> 
          : <button className='btn btn-success' disabled >Succeed</button>}
        </div>
      </li>
    )
  }
}

export default Plans;