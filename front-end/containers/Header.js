import * as React from 'react'

class Header extends React.Component {

  render() {
    return (
      <div className="header py-4">
        <div className="container">
          <div className="d-flex">
            <a className="header-brand" href="./index.html">
              <img src="" className="header-brand-img" alt="tabler logo" />
            </a>
            <div className="d-flex order-lg-2 ml-auto">
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
                <a href="#" className="nav-link pr-0 leading-none" data-toggle="dropdown">
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
            <a href="#" className="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
              <span className="header-toggler-icon"></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Header