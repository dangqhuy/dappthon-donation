import * as React from 'react'
import history from '../History'
import * as image3 from '../assets/images/3.jpg'
import * as image2 from '../assets/images/alex.jpg'


const Group = (props) => {

  return(
      <div className= "col-sm-6 col-lg-4" onClick={() => history.push(`/groups/${props.id}`)}>
            <div className="card p-3">
              <a href="javascript:void(0)" className="mb-3">
                <img src={image2} alt="Photo by Nathan Guerrero" className="rounded" />
              </a>
              <div className="d-flex align-items-center px-2">
                <div className="">
                  <img className="avatar avatar-md mr-3" src={image3}></img>
                </div>
                <div>
                  <div>{props.name}</div>
                  <small className="d-block text-muted">Hoat dong {props.events_count}</small>
                </div>
                <div className="ml-auto text-muted">
                  <a href="#" className="icon"><i className="fa fa-eye mr-1"></i> 112</a>
                    <a href="#" className="icon d-none d-md-inline-block ml-3"><i className="fa fa-heart mr-1"></i>
                      42</a>
                </div>
              </div>
            </div>
            </div>
  )
}


class Groups extends React.Component {

  render() {
    const { groups } = this.props;
    console.log(groups)
    return (
      <React.Fragment>
        {groups.map(group => 
          <Group
            key={group.id}
            id={group.id}
            name={group.name}
            description={group.description}
            events_count={group.events_count}
            created={group.created}
          />  
        )
        }
      </React.Fragment>
    )
  }

}

const GroupDetail = (props) => {

    return(
    <div>
    </div>
    )
} 


export {
  Groups,
  GroupDetail
}