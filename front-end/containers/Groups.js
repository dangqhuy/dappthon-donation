import * as React from 'react'
import history from '../History'
import * as image3 from '../assets/images/3.jpg'
import * as image2 from '../assets/images/alex.jpg'

const API_URL = window.location.host.includes('localhost')
  ? 'http://localhost:1337'
  : `${window.location.protocol}//${window.location.host}`

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
                </div>props
              </div>
            </div>
            </div>
  )
}


class Groups extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      groups: [],
    }
  }

  fetchGroups() {
    fetch(`${API_URL}/api/v1/groups`)
      .then(resp => resp.json())
      .then(groups => this.setState({ groups }))
  }
  componentDidMount() {
    this.fetchGroups()
  }
  render() {
    const { groups } = this.state;
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

    // const { group }
    // return (
    //   <div className='container mt-5'>
    //     <div className='row'>
    //       <div className='col-12'>
    //         {
    //           courses.length === 0 ? (
    //             <p>No courses available</p>
    //           ) : (
    //               courses.map((courseInfo, i) => {
    //                 return (
    //                   <div className='card' key={i}>
    //                     <div className='table-responsive'>
    //                       <table className='table table-hover table-outline table-vcenter text-nowrap card-table'>
    //                         <thead>
    //                           <tr>
    //                             <th className='text-center w-1'><i className='icon-people'></i></th>
    //                             <th>Course</th>
    //                             <th>Program</th>
    //                             <th>Begin-End</th>
    //                             <th>Progress</th>
    //                           </tr>
    //                         </thead>
    //                         <tbody className='course'>
    //                           <tr onClick={() => {
    //                             let newCourses = [].concat(courses)
    //                             let index = i
    //                             newCourses[index].expand = !newCourses[index].expand
    //                             this.setState({ courses: newCourses })
    //                           }}>
    //                             <td className='text-center' >
    //                               <div className='avatar d-block' style={{ backgroundImage: `url(${user.Paa})` }}>
    //                                 <span className='avatar-status bg-green'></span>
    //                               </div>
    //                             </td>
    //                             <td>
    //                               <div>{courseInfo.title}</div>
    //                               <div className='small text-muted'>
    //                                 Mentor: {courseInfo.mentor.email}
    //                               </div>
    //                             </td>
    //                             <td>
    //                               <small>{courseInfo.program.name}</small>
    //                             </td>
    //                             <td>
    //                               <small className='text-center'>
    //                                 {formatDate(courseInfo.begin, 'DD/MM/YYYY')} -
    //                                 {formatDate(courseInfo.end, 'DD/MM/YYYY')}
    //                               </small>
    //                             </td>
    //                             <td>
    //                               <div className='clearfix'>
    //                                 <div className='float-left'>
    //                                   <strong>42%</strong>
    //                                 </div>
    //                               </div>
    //                               <div className='progress progress-xs'>
    //                                 <div className='progress-bar bg-yellow' role='progressbar' style={{ 'width': '42%' }} aria-valuenow='42' aria-valuemin='0' aria-valuemax='100'></div>
    //                               </div>
    //                             </td>
    //                           </tr>
    //                         </tbody>
    //                       </table>
    //                     </div>
    //                   </div>
    //                 )
    //               })
    //             )
    //         }
    //       </div>
    //     </div>
    //   </div>
    // )
}


export {
  Groups,
  GroupDetail
}