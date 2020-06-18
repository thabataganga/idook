import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom'

//import {editId} from "../../store/actions/idActions"


const IdDetail = (props) => {

    const downloadQR = () => {
        const canvas = document.getElementById("QrCode");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "QrCode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };


    const { auth, profile } = props;


    //console.log(auth)

    if (!auth.uid) {
        return <Redirect to="/signin" />;
    }

    if (profile.socialreason) {

        return (
            <div className='container section id-details'>

                <div className='row'>

                    <div className='col s12 m8'>

                        <div className='card z-depht-0'>
                            <div className='card-content'>

                                <span className='card-title'>{profile.socialreason} </span>


                            </div>
                            <div className='card-action'>

                                <div className='row'>
                                    <div className='col s12 m7'>
                                        <img alt="perfil" src={profile.url} object-fit='cover' class="circular--portraitM" />
                                    </div>
                                    <div className='col s12 m5  center2'>
                                        <p>Segmento: {profile.setor}  </p>
                                        <p>CNPJ: {profile.cnpj}  </p>
                                        <p>Email: {auth.email}  </p>
                                        <p>Telefone: {profile.phone}  </p>
                                        <p>CEP: {profile.cep} </p>
                                        <p>Número: {profile.numero}  </p>
                                        <p>Complemento: {profile.complemento} </p>
                                    </div>
                                </div>


                            </div>

                            <div className='card-action'>
                                <span className='card-title'>Redes Sociais</span>

                            </div>

                            <div className='card-action'>
                                <div className='row'>
                                    <div className='col s12 m6'>

                                        <p><img alt="website" src="https://img.icons8.com/material/24/000000/domain--v1.png"/> Website: {profile.website}</p>
                                        <p><img alt="facebook" src="https://img.icons8.com/material/24/000000/facebook--v1.png"/> Facebook: {profile.facebook}</p>
                                        <p><img  alt="whatsapp" src="https://img.icons8.com/material/24/000000/whatsapp--v1.png"/> Whatsapp: {profile.whatsapp}</p>

                                    </div>

                                    <div className='col s12 m6'>
                                        <p><img alt="linkedin" src="https://img.icons8.com/material/24/000000/linkedin.png"/> Lindkedin: {profile.linkedin}</p>
                                        <p><img alt="instagram" src="https://img.icons8.com/material/24/000000/instagram-new--v1.png"/> Instagram: {profile.instagram}</p>
                                        <p><img alt="twitter" src="https://img.icons8.com/material/24/000000/twitter-squared.png"/> Twitter: {profile.twitter}</p>
                                    </div>

                                </div>
                            </div>


                        </div>


                    </div>
                    <div className='col s12 m4 '>
                        <div className='card z-depht-0'>
                            <div className='card-content'>

                                <span className='card-title'>Administrar</span>

                            </div>
                            <div className='card-action'>
                                <div object-fit='cover' class="center">

                                    <QRCode
                                        id="QrCode"
                                        class="center3"
                                        value={"MECARD: N:" + profile.socialreason + "; TEL:" + profile.phone + "; EMAIL: " + auth.email + "; "}
                                        responsive={true}
                                        renderAs="png"

                                    />
                                    <p onClick={downloadQR}> Download QR </p>


                                </div>


                            </div>


                            <div className='card-action'>
                                <p>Admnistrador: {profile.contact}  </p>

                            </div>



                            <div className='card-action'>
                                
                                <Link to={'/edituser'}  ><button className="btn z-depth-0">Editar</button></Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );


    }

    else {
        return (
            <div className='container center'>
                <p>Carregando...</p>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}


export default connect(mapStateToProps, null)(IdDetail)
