import React, { Component } from 'react';
import videoSource from '../../../assets/movie.mp4'
import '../../../index.css';
import classes from './assets/css/BackgroundVideo.module.css';




class Home extends Component {

    render() {

        return (
            <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>ID da Era Digital</h1>
                    <p class="white-text ">A Identidade Digital é a porta de entrada para a revolução da informação, meios de comunicação e pagamentos do Século 21.</p>
                    <button  className="btn z-depth-0">Conheça o IDOOK</button>
                </div>
            </div>
        </div>

        );
    };

}

export default Home;
