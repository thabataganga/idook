import React, { Component } from 'react';
import M from "materialize-css";

import classes from './assets/css/Contact.module.css';

import Ipad from "./assets/img/ipad_pro_land_gold.png"



class Home extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {

        return (
            <div className={classes.Container} >


                <div className={classes.Content}>
               
                <div className={classes.SubContent} >
                        <h1>Conheça o IDook</h1>
                        <p class="white-text ">Entre em contato com o nosso time e marque uma demonstração</p>                
                    </div>

                    

                </div>
            </div>

            



        );
    };

}

export default Home;
