import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from 'react-redux'
import { createCalendar } from '../../store/actions/calendarActions'

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';




export class CreateCalendar extends Component {

    state = {
        title:'',
        link: '',
        content:'',
        photo:'', 
        date:'',     
    }

    handleChange = (e) => {
        const { target } = e;
    
        this.setState(state => ({
          ...state,
          [target.id]: target.value,
        }));
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        const { props, state } = this;
        props.createCalendar(state);
    
        props.history.push('/');
      }
    render() {
        return (
            
            <ScheduleComponent height='650px' currentView='Month' dateFormat="dd/MM/yyyy"  >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>                            
                
           
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCalendar: (Calendar) => dispatch(createCalendar(Calendar))
    }
}

export default connect(null, mapDispatchToProps) (CreateCalendar)
