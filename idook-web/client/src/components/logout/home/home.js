import React, { Component } from 'react';
import BackgroundVideo from './video'
import App from './app'
import Dashboard from './dashboard'
import Beneficios from './beneficios'
import Mercados from './mercados'
import Rodape from './rodape'
import Contato from './contato'
import Carousel from './carousel'


class Home extends Component {
    render() {
        return (
            <div>
                <BackgroundVideo />
             
                <Beneficios />
                <Carousel/>
                <Mercados />
                <Contato/>
                <Rodape/>
               
               
             
            </div>
        );
    };
}

export default Home;
