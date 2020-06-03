
import React from 'react'
import IDSummary from './IdSummary';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';


const IDList = ({ids}) => {

  return (
    <div className="project-list section">
      { ids && ids.map(ids => {
        return (
          <Link to={'/id/' + ids.id} key={ids.id}>
            <IDSummary ids={ids} />
          </Link>
        )
      })}  
    </div>
  )
}

export default IDList