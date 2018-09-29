import * as React from 'react'
import Groups from './Groups'
import Event from '../components/Event'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="page-header">
          <h1 className="page-title">
          Company
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
        <Groups/>
      </div>
    )
  }
}
export default HomePage