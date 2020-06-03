'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class SketchExample extends React.Component {
    state = {
        displayColorPicker: false,
        color: {
            r: '94',
            g: '167',
            b: '11',
            a: '1',
        },
        displayColorPicker2: false,
        color2: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        },
        displayColorPicker3: false,
        color3: {
            r: '0',
            g: '0',
            b: '0',
            a: '1',
        },
        displayColorPicker4: false,
        color4: {
            r: '0',
            g: '0',
            b: '0',
            a: '1',
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClick2 = () => {
        this.setState({ displayColorPicker2: !this.state.displayColorPicker2 })
    };

    handleClick3 = () => {
        this.setState({ displayColorPicker3: !this.state.displayColorPicker3 })
    };

    handleClick4 = () => {
        this.setState({ displayColorPicker4: !this.state.displayColorPicker4 })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleClose2 = () => {
        this.setState({ displayColorPicker2: false })
    };

    handleClose3 = () => {
        this.setState({ displayColorPicker3: false })
    };

    handleClose4 = () => {
        this.setState({ displayColorPicker4: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    handleChange2 = (color2) => {
        this.setState({ color2: color2.rgb })
    };

    handleChange3 = (color3) => {
        this.setState({ color3: color3.rgb })
    };

    handleChange4 = (color4) => {
        this.setState({ color4: color4.rgb })
    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
                color2: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.state.color2.r}, ${this.state.color2.g}, ${this.state.color2.b}, ${this.state.color2.a})`,
                },
                color3: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.state.color3.r}, ${this.state.color3.g}, ${this.state.color3.b}, ${this.state.color3.a})`,
                },
                color4: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.state.color4.r}, ${this.state.color4.g}, ${this.state.color4.b}, ${this.state.color4.a})`,
                },
                colorprim:{
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
                colorsec:{
                    background: `rgba(${this.state.color2.r}, ${this.state.color2.g}, ${this.state.color2.b}, ${this.state.color2.a})`,
                },
                fontprim:{
                    color: `rgba(${this.state.color3.r}, ${this.state.color3.g}, ${this.state.color3.b}, ${this.state.color3.a})`,
                },
                fontsec:{
                    color: `rgba(${this.state.color4.r}, ${this.state.color4.g}, ${this.state.color4.b}, ${this.state.color4.a})`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (

            <div className="dashboard section container">

                <div className='row'>
                    <div className='col s12 m4'>
                        <div className='card z-depht-0'>
                            <div className='card-content'>
                                <span className='card-title'>Paleta de cores do Idook </span>
                            </div>

                            <div className='card-action'>
                                <p> Cor primária</p>

                                <div>
                                    <div style={styles.swatch} onClick={this.handleClick}>
                                        <div style={styles.color} />
                                    </div>
                                    {this.state.displayColorPicker ? <div style={styles.popover}>
                                        <div style={styles.cover} onClick={this.handleClose} />
                                        <SketchPicker color={this.state.color} onChange={this.handleChange} />
                                    </div> : null}

                                </div>
                            </div>

                            <div className='card-action'>
                                <p> Fonte primária</p>

                                <div>
                                    <div style={styles.swatch} onClick={this.handleClick3}>
                                        <div style={styles.color3} />
                                    </div>
                                    {this.state.displayColorPicker3 ? <div style={styles.popover}>
                                        <div style={styles.cover} onClick={this.handleClose3} />
                                        <SketchPicker color={this.state.color3} onChange={this.handleChange3} />
                                    </div> : null}

                                </div>
                            </div>

                            <div className='card-action'>
                                <p> Cor secundária</p>

                                <div>
                                    <div style={styles.swatch} onClick={this.handleClick2}>
                                        <div style={styles.color2} />
                                    </div>
                                    {this.state.displayColorPicker2 ? <div style={styles.popover}>
                                        <div style={styles.cover} onClick={this.handleClose2} />
                                        <SketchPicker color={this.state.color2} onChange={this.handleChange2} />
                                    </div> : null}

                                </div>
                            </div>

                            <div className='card-action'>
                                <p> Fonte secundária</p>

                                <div>
                                    <div style={styles.swatch} onClick={this.handleClick4}>
                                        <div style={styles.color4} />
                                    </div>
                                    {this.state.displayColorPicker4 ? <div style={styles.popover}>
                                        <div style={styles.cover} onClick={this.handleClose4} />
                                        <SketchPicker color={this.state.color4} onChange={this.handleChange4} />
                                    </div> : null}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col s12 m5 offset-m2'>

                    <div className='card z-depht-0'>
                            <div className='card-content'>
                                <span className='card-title'>Idook </span>
                            </div>

                            <div style={styles.colorprim} className='card-action'>
                                <p style={styles.fontprim}> Cor primária</p> 
                            </div>

                            <div style={styles.colorsec} className='card-action'>
                                <p style={styles.fontsec}> Cor secundária</p> 
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default SketchExample