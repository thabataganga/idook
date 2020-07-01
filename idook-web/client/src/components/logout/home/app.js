import React, { Component } from 'react';

import classes from './assets/css/App.module.css';

import Iphone from "./assets/img/iphone_6_port_gold.png"


class Home extends Component {

    render() {

        return (
            <div className={classes.Container} >


                <div className={classes.Content}>
                    <div className={classes.SubContent} >
                        <h1>ID Digital</h1>
                        <p class="black-text ">A solução em gestão de Matrículas e
                        ID Digital para a sua Entidade que as
                        carteiras físicas não conseguem fazer</p>
                        <p>- Funcionamento Off-line do aplicativo e ID</p>
                        <p>- QR Code escaneável</p>
                        <p>- Assinatura do membro</p>
                        <p>- Upload de foto</p>
                       
                        
                    </div>

                    
                    <img alt="Iphone" src={Iphone} className={classes.iphone} />

                </div>
            </div>

            



        );
    };

}

export default Home;
