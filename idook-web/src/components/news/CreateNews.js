import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from 'react-redux'
import { createNews } from '../../store/actions/newsActions'

export class CreateNews extends Component {

    state = {
        title:'',
        subtitle: '',
        content:'',
        photo:'',      
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
        props.createNews(state);
    
        props.history.push('/');
      }
    render() {
        return (
            <div className="container center">                             
                <form onSubmit={this.handleSubmit} className='white'>                
                <h5 className="grey-text text-darken-3">Adicionar Noticia</h5>
                        <div className="input-field">
                            <label htmlFor='title'>Titulo</label>
                            <input type='text' id="title" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='subtitle'>Sub Titulo</label>
                            <input type='text' id="subtitle" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='content'>Conteúdo</label>
                            <input type='text' id="content" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='photo'>Foto</label>
                            <input type='text' id="photo" onChange={this.handleChange}/>
                        </div>
                        

                        <div className="input-field">
                            <button className="btn z-depth-0">Criar Noticia</button>
                        </div>                                      
                </form>                  
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNews: (News) => dispatch(createNews(News))
    }
}

export default connect(null, mapDispatchToProps) (CreateNews)
