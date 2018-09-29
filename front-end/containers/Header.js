import * as React from 'react'
import { NavLink } from 'react-router-dom'
class Header extends React.Component {

  render() {
    return (
      <div className="header py-4">
        <div className="container">
          <div className="d-flex">
          <div className="col-lg order-lg-first">
                <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link"><i className="fa fa-home"></i> Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/events/:id" className="nav-link"><i className="fa fa-bars"></i>Events</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/detail" className="nav-link"><i className="fa fa-newspaper-o"></i>Event Detail</NavLink>
                  </li>
                </ul>
              </div>
            <a className="header-brand" href="./index.html">
              <img src="" className="header-brand-img" alt="tabler logo" />
            </a>
            <div className="d-flex order-lg-2 ml-auto align-items-around">
              
              <div className="row">
              </div>
              <div className="dropdown d-none d-md-flex">
                <a className="nav-link icon" data-toggle="dropdown">
                  <i className="fa fa-bell"></i>
                  <span className="nav-unread"></span>
                </a>

                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar mr-3 align-self-center" style={{ backgroundImage: "url('demo/faces/male/41.jpg')" }} ></span>
                    <div>
                      <strong>Nathan</strong> pushed new commit: Fix page load performance issue.
                    <div className="small text-muted">10 minutes ago</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar mr-3 align-self-center" style={{ backgroundImage: "url('demo/faces/female/1.jpg')" }}></span>
                    <div>
                      <strong>Alice</strong> started new task: Tabler UI design.
                    <div className="small text-muted">1 hour ago</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span className="avatar mr-3 align-self-center" style={{ backgroundImage: "url('demo/faces/female/1.jpg')" }}></span>
                    <div>
                      <strong>Rose</strong> deployed new version of NodeJS REST Api V3
                    <div className="small text-muted">2 hours ago</div>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item text-center text-muted-dark">Mark all as read</a>
                </div>
              </div>
              <div className="dropdown">
                <a href="#" className="nav-link pr-0 leading-none profile-custom" data-toggle="dropdown">
                  <span className="avatar" style={{ backgroundImage: "url('demo/faces/female/1.jpg')" }}></span>
                  <span className="ml-2 d-none d-lg-block">
                    <span className="text-default">Jane Pearson</span>
                    <small className="text-muted d-block mt-1">Administrator</small>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fa fa-user"></i> Profile
                </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fa fa-settings"></i> Settings
                </a>
                  <a className="dropdown-item" href="#">
                    <span className="float-right"><span className="badge badge-primary">6</span></span>
                    <i className="dropdown-icon fa fa-mail"></i> Inbox
                </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fa fa-send"></i> Message
                </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fa fa-help-circle"></i> Need help?
                </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fa fa-log-out"></i> Sign out
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header