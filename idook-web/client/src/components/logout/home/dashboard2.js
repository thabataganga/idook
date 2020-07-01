import React, { Component } from 'react';
import classes from './assets/css/Contact.module.css';
import Ipad from "./assets/img/ipad_pro_land_gold.png"




class Home extends Component {

    render() {

        return (
            <div className={classes.Container} >
                <div className={classes.Content}>
                    <div className={classes.SubContent} >
                        <div class="row">
                            <div class="col s12 m12 l6">
                                <div className="center">
                                    <img alt="Ipad" src={Ipad} className={classes.iphone} />
                                </div>
                            </div>
                            <div class="col s12 m12 offset-l1 l5">
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
                                <button className="btn z-depth-0">Contato</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}

export default Home;
