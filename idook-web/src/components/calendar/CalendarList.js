import React from 'react'
import CalendarSummary from './CalendarSummary'
import { Link } from 'react-router-dom'

const CalendarList = ({calendar}) => {
  return (
    <div className="calendar-list section">
      { calendar && calendar.map(calendar => {
        return (
          <Link to={'/calendar/' + calendar.id} key={calendar.id}>
            <CalendarSummary calendar={calendar} />
          </Link>
        )
      })}  
    </div>
  )
}

export default CalendarList