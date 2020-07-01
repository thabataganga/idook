import React from "react";
import * as moment from 'moment'; import 'moment/locale/pt-br'
import Moment from 'react-moment';

const CalendarSummary = ({calendar}) => {
  return (
    <div className='card z-depth-0 calendar-summary'>
        <div className='card-content text-darken-3'>
        
            <span className='black-text card-title'>{calendar.title}</span>
   
            <p className='black-text'>{calendar.init_date} às {calendar.init_time}</p> 
        </div>
    </div>
  );
};

export default CalendarSummary;
