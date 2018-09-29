import * as React from 'react'
import { NavLink } from 'react-router-dom'
class Menu extends React.Component {

  render() {
    return (
      <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg order-lg-first">
              <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link"><i className="fa fa-home"></i> Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/events/:id" className="nav-link"><i className="fas fa-box"></i>Interface</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;