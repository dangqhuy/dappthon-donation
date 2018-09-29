import * as React from 'react'
import { Link } from 'react-router-dom'


const Event = (props) => {
  return (
    <li className='timeline-item'>
      <div className='timeline-badge bg-red'>
      </div>
      <h4 className='mb-0'>
      <Link to={`/courses/${props.eventId}/lessons/${props.id}`}>
        {props.title}
      </Link>
      </h4>
    </li>
  )
}

export default Event;