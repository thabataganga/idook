import React, { Component } from 'react';

import classes from './assets/css/Dash.module.css';

import Ipad from "./assets/img/ipad_pro_land_gold.png"





class Home extends Component {

    render() {

        return (
            <div className={classes.Container} >


                <div className={classes.Content}>
               
                <div className={classes.SubContent} >
                        <h1>Dashboard</h1>
                        <p class="white-text ">A solução em gestão de Matrículas e
                        ID Digital para a sua Entidade que as
                        carteiras físicas não conseguem fazer</p>
                        <p>- Fluxo digital para emissão de IDs</p>
                        <p>- Gestão de IDs e controle de acesso</p>
                        <p>- Notificação e alertas</p>
                        <p>- Pesquisas rápidas</p>
                        <p>- Implantação rápida via .CSV</p>
                        <p>- Moderação de Fotos</p>                       
                    </div>

                   
                    <img alt="Ipad" src={Ipad} className={classes.iphone} />
                    

                   
                    
                    
                    

                </div>
            </div>

            



        );
    };

}

export default Home;
