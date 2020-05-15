import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from 'react-redux'
import { createCalendar } from '../../store/actions/calendarActions'

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
            <div className="container center">                             
                <form onSubmit={this.handleSubmit} className='white'>                
                <h5 className="grey-text text-darken-3">Adicionar calendário</h5>
                        <div className="input-field">
                            <label htmlFor='title'>Titulo</label>
                            <input type='text' id="title" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='subtitle'>Link</label>
                            <input type='text' id="subtitle" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='content'>Conteúdo</label>
                            <input type='text' id="content" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='date'>Data</label>
                            <input type='date' id="date" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='photo'>Foto</label>
                            <input type='text' id="photo" onChange={this.handleChange}/>
                        </div>
                        

                        <div className="input-field">
                            <button className="btn z-depth-0">Criar calendário</button>
                        </div>                                      
                </form>                  
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCalendar: (Calendar) => dispatch(createCalendar(Calendar))
    }
}

export default connect(null, mapDispatchToProps) (CreateCalendar)
