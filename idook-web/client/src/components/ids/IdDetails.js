import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom'

import {deleteId} from "../../store/actions/idActions"
//import {editId} from "../../store/actions/idActions"

import * as moment from 'moment'; import 'moment/locale/pt-br'

const IdDetail = (props) => {

    const handleDelete = (e) => {
        const { id } = props;
        e.preventDefault();
        //console.log(e)
        props.deleteId(id);
        props.history.push('/');
        // you can push to dashboard after deleting...
}

    
    const { sids, id } = props;

    const { auth } = props;

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

    if (!auth.uid) {
        return <Redirect to="/signin" />;
    }



    if (sids) {
        moment.locale('pt-br')

        const start = sids.createdAt.toDate();
      
        //const start = "05/21/2020"
      
        const now = new Date();
      
        //const now = "06/02/2020"
      
        const validade = sids.validade;
        
       // const range = moment.range(start, now)

        let diff = moment(now, "DD/MM/YYYY").diff(moment(start, "DD/MM/YYYY", 'days'));
      

        let duration = moment.duration(diff)
      
        let result = duration.format("ddd")
      
        const expira = validade - result;
        var siteappAndroid = "www.google.com"
        var siteappIOS = 'www.apple.com'

        var whatsapplink = 'https://web.whatsapp.com/send?l=pt-BR&phone=55'+ sids.phone + '&text=' + sids.firstName +', bem%20vindo%20ao%20IDook%20do%20Sindpd.%20Voc%C3%AA%20pode%20fazer%20o%20download%20do%20aplicativo%20em%20' + siteappAndroid + ' ou ' + siteappIOS + '.%20Para%20acessar%20a%20sua%20carteirinha%20digital%20use%20o%20seu%20CPF%20e%20o%20c%C3%B3digo%20token%3A ' + sids.token ;
       // const decimal = Math.random(6);
        console.log(sids.tokenapp)
      //  console.log(decimal)
       
        // console.log(start)
       // console.log(now)

       // console.log(diff)
        //console.log(range)
        //console.log(result)
        //console.log(whatsapplink)


        if (expira <= 0) {
            //console.log(expira)



            return (
                <div className='container section id-details'>

                    <div className='row'>

                        <div className='col s12 m8'>

                            <div className='card z-depht-0'>
                                <div className='card-content'>

                                    <span className='card-title'>{sids.firstName} {sids.lastName} </span>

                                </div>
                                <div className='card-action'>

                                    <div className='row'>
                                        <div className='col s12 m7'>
                                        <img alt="peril" src={sids.url} object-fit='cover' class="center circular--portraitM" />                                        </div>
                                        <div className='col s12 m5 center2'>
                                            <p>Matricula: {sids.matricula} </p>
                                            <p>Cargo: {sids.cargo} </p>
                                            <p>Empresa: {sids.empresa}</p>
                                            <p>CPF: {sids.cpf}</p>
                                            <p>Cidade: {sids.city}</p>
                                            <p>Estado: {sids.uf}</p>
                                        </div>
                                    </div>


                                </div>
                                <div className='card-action'>
                                    <span className='card-title'>Contato</span>
                                    <p>Email: {sids.email}  </p>
                                    <p>Telefone: {sids.phone}  </p>
                                </div>


                            </div>

                        </div>
                        <div className='col s12 m4'>
                            <div className='card z-depht-0'>
                                <div className='card-content'>

                                    <span className='card-title'>Administrar</span>

                                </div>
                                <div className='card-action'>
                                    <div object-fit='cover' class="center">
                                        <QRCode
                                            id="QrCode"
                                            class="center3"
                                            value={"MECARD: N:" + sids.firstName + sids.lastName + "; TEL:" + sids.phone + "; EMAIL: " + sids.email + "; ORG: " + sids.empresa + ";"}
                                            responsive={true}
                                            renderAs="png"

                                        />
                                        <p onClick={downloadQR}> Download QR </p>
                                    </div>
                                </div>

                                <div className='card-action'>
                                    <p className='black-text'>Criado em: {moment(sids.createdAt.toDate()).calendar()}</p>
                                    <p className='black-text'>Validade: {validade} dias</p>
                                    <p className="red-text">Expirou</p>
                                </div>

                                <div className='card-action'>
                                    <button onClick={handleDelete} className="btn z-depth-0">Deletar</button>
                                    <Link to={'/editid/' + id} key={id}><button className="btn z-depth-0">Editar</button></Link>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            );


        }

        return (
            <div className='container section id-details'>

                <div className='row'>

                    <div className='col s12 m8 '>

                        <div className='card z-depht-0'>
                            <div className='card-content'>

                                <span className='card-title'>{sids.firstName} {sids.lastName} </span>

                            </div>
                            <div className='card-action'>

                                <div className='row'>
                                    <div className='col s12 m7'>
                                        <br/>
                                        <img alt="perfil" src={sids.url} object-fit='cover' class="center circular--portraitM" />
                                    </div>
                                    <div className='col s12 m5 center2'>
                                        <p>Matricula: {sids.matricula} </p>
                                        <p>Cargo: {sids.cargo} </p>
                                        <p>Empresa: {sids.empresa}</p>
                                        <p>CPF: {sids.cpf}</p>
                                        <p>Cidade: {sids.city}</p>
                                        <p>Estado: {sids.uf}</p>
                                    </div>
                                </div>


                            </div>
                            <div className='card-action'>
                                <span className='card-title'>Contato</span>
                                <p>Email: {sids.email}  </p>
                                <p>Telefone: {sids.phone}  </p>
                            </div>

                            <div className='card-action'>
                                <a  target="_blank" rel="noopener noreferrer"  href={whatsapplink} className="btn z-depth-0">Reenviar Token</a>
                                </div>


                        </div>

                    </div>
                    <div className='col s12 m4 '>
                        <div className='card z-depht-0'>
                            <div className='card-content'>

                                <span className='card-title'>Administrar</span>

                            </div>
                            <div className='card-action'>
                                <div object-fit='contain' class="center">
                                    <QRCode
                                        class="center3"
                                        value={"MECARD: N:" + sids.firstName + " " + sids.lastName + "; TEL:" + sids.phone + "; EMAIL: " + sids.email + "; ORG: " + sids.empresa + ";"}
                                        responsive={true}
                                        id="QrCode"
                                        renderAs="png"


                                    />
                                    <p onClick={downloadQR}> Download QR </p>
                                </div>
                            </div>

                            <div className='card-action'>
                                <p className='black-text'>Criado em: {moment(sids.createdAt.toDate()).calendar()}</p>
                                <p className='black-text'>Validade: {validade} dias</p>
                                <p>Expira em: {expira} dias </p>
                            </div>

                            <div className='card-action'>
                                <button onClick={handleDelete} className="btn z-depth-0">Deletar</button>
                                <Link to={'/editid/' + id} key={id}><button className="btn z-depth-0">Editar</button></Link>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        )

    }
    else {
        return (
            <div className='container center'>
                <p>Carregando...</p>
            </div>
        )
    }


}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const ids = state.firestore.data.ids;
    const sids = ids ? ids[id] : null
    return {
        id:id,
        sids: sids,
        auth: state.firebase.auth
    }
}

const mapDistpacthToProps = dispatch => {
    return {
        deleteId: (id) => dispatch(deleteId(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDistpacthToProps),
    firestoreConnect([
        { collection: 'ids' }
    ])
)(IdDetail)
