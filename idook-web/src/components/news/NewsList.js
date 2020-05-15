import React from 'react'
import NewsSummary from './NewsSummary'
import { Link } from 'react-router-dom'

const NewsList = ({news}) => {
  return (
    <div className="project-list section">
      { news && news.map(news => {
        return (
          <Link to={'/news/' + news.id} key={news.id}>
            <NewsSummary news={news} />
          </Link>
        )
      })}  
    </div>
  )
}

export default NewsList