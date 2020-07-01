import React, { Component } from 'react';
import classes from './assets/css/Contact.module.css';
import Ipad from "./assets/img/ipad_pro_land_gold_2.png"
import { Link } from 'react-router-dom'




class Home extends Component {

    render() {

        return (
            <div className={classes.Container} >
                <div className={classes.Content}>
                    <div className={classes.SubContent} >
                        <div class="row">
                            <div class="col s12 m6">
                                
                                    <img alt="Ipad" src={Ipad} className={classes.iphone} />
                               
                            </div>
                            <div class="col s12 offset-m1 m4">
                                <h1>Conheça o IDook</h1>
                                <p class="white-text ">Entre em contato com o nosso time e marque uma demonstração</p>
                                <Link to={'/contato'}><button className="btn z-depth-0">Contato</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}

export default Home;
