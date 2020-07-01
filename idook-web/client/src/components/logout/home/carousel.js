import React, { Component } from 'react';
import App from './app'
import Dashboard from './dashboard'

import { Carousel } from 'react-materialize';

class Beneficios extends Component {

    
    render() {
        

        return (

            <section >
           <Carousel className="carousel2" options={{
    fullWidth: true,
    indicators: true,
  }}>
               <div><App/></div>
               <div><Dashboard/></div>
           </Carousel>
          </section>
              

        );
    };

}

export default Beneficios;
