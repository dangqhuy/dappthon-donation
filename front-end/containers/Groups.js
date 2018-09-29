import * as React from 'react'
import * as image3 from '../assets/images/3.jpg'
import * as image2 from '../assets/images/alex.jpg'


const Group = (props) => {
  return(
    <div className="my-3 my-md-5">
        <div className="row row-cards">
          <div className="col-sm-6 col-lg-4">
            <div className="card p-3">
              <a href="javascript:void(0)" className="mb-3">
                <img src={image2} alt="Photo by Nathan Guerrero" className="rounded" />
              </a>
              <div className="d-flex align-items-center px-2">
                <div className="">
                  <img className="avatar avatar-md mr-3" src={image3}></img>
                </div>
                <div>
                  <div>Nathan Guerrero</div>
                    <small className="d-block text-muted">12 days ago</small>
                </div>
                <div className="ml-auto text-muted">
                  <a href="#" className="icon"><i className="fa fa-eye mr-1"></i> 112</a>
                    <a href="#" className="icon d-none d-md-inline-block ml-3"><i className="fa fa-heart mr-1"></i>
                      42</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


class Groups extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Group />
        <Group />
      </React.Fragment>
    )
  }

}

const GroupDetail = (props) => {
  return (
    <div>
      
    </div>
  )
} 


export default Groups;