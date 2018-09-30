import * as React from 'react'
import Groups from './Groups'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">
              Groups
            </h1>
            <div className="page-subtitle">1 - 12 of 1713 photos </div>
            <div className="page-options d-flex">
              <div className="input-icon ml-2">
                <span className="input-icon-addon">
                  <i className="fa fa-search"></i>
                </span>
                <input type="text" className="form-control w-10" placeholder="Search company" />
              </div>
            </div>
          </div>

          <div className="my-3 my-md-5">
            <div className="row row-cards">
              <Groups />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage