
import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { connect } from 'react-redux'
import { editUser } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';

class SketchExample extends React.Component {
    state = {
        displayColorPicker: false,
        color: {
            r: '',
            g: '',
            b: '',
            a: '',
        },
        displayColorPicker2: false,
        color2: {
            r: '',
            g: '',
            b: '',
            a: '',
        },
        displayColorPicker3: false,
        color3: {
            r: '',
            g: '',
            b: '',
            a: '',
        },
        displayColorPicker4: false,
        color4: {
            r: '',
            g: '',
            b: '',
            a: '',
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

    handleEdit = (e) => {
        e.preventDefault();
        const { auth } = this.props;
    
        //console.log(url);
    
       //console.log(this.state);
    
        //this.state.image = 'false';


    
        this.props.editUser(this.state, auth.uid)

        //console.log(this.state.color);
    
        //console.log(key)
    
        //this.props.editId(ids, key)
        //this.props.history.push('/');
    }

    render() {


        const { auth, profile } = this.props;
        if (!auth.uid) {
            return <Redirect to="/signin" />;
        }


       
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

        if(profile.color){
            return (

                <div className="dashboard section container">
    
                    <div className='row'>
                        <div className='col s12 m5'>
                            
                            <div className='card z-depht-0'>
                                <div className='card-content'>
                                    <span className='card-title'>Paleta </span>
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
    
                                <div className='card-action'>
                                <button className="btn z-depth-0" onClick={this.handleEdit}>Salvar</button>
                                </div>
                            </div>
                        </div>
                        <div className='col s12 m7'>
                        <div className='card z-depht-0'>
                                <div className='card-content'>
                                    <span className='card-title'>Preview</span>
                                </div>
    
                                <div style={styles.colorprim} className='card-action'>
                                    <p style={styles.fontprim}> Cor primária</p> 
                                </div>
    
                                <div style={styles.colorsec} className='card-action'>
                                    <p style={styles.fontsec}> Cor secundária</p> 
                                </div>
    
    
                            </div>
    
                 
                            
    
                        <div className='card z-depht-0'>
                            
                                <div className='card-content'>
                                    <span className='card-title'>Esquema atual </span>
                                </div>
    
                                <div style={{
                                    background: `rgba(${profile.color.r}, ${profile.color.g}, ${profile.color.b}, ${profile.color.a})`
                                }} className='card-action'>
                                    <p style={{
                                    color: `rgba(${profile.color3.r}, ${profile.color3.g}, ${profile.color3.b}, ${profile.color3.a})`
                                }}> Cor primária</p> 
                                </div>
    
                                <div style={{
                                    background: `rgba(${profile.color2.r}, ${profile.color2.g}, ${profile.color2.b}, ${profile.color2.a})`
                                }} className='card-action'>
                                    <p style={{
                                    color: `rgba(${profile.color4.r}, ${profile.color4.g}, ${profile.color4.b}, ${profile.color4.a})`
                                }}> Cor secundária</p> 
                                </div>
    
    
                            </div>
    
                        </div>
    
                        
                    </div>
                </div>
    
            )
        }


        else{

            return (

                <div className="dashboard section container">
    
                    <div className='row'>
                        <div className='col s12 m5'>
                            <div className='card z-depht-0'>
                                <div className='card-content'>
                                    <span className='card-title'>Paleta </span>
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
    
                                <div className='card-action'>
                                <button className="btn z-depth-0" onClick={this.handleEdit}>Salvar</button>
                                </div>
                            </div>
                        </div>
                        <div className='col s12 m7'>
    
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
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (ids,id) => dispatch(editUser(ids,id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SketchExample)