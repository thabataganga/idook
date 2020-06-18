import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import csv from 'csv';
import { createId } from '../../store/actions/idActions'
import { connect } from 'react-redux'
import M from "materialize-css";




class MultiplesID extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
}

  state = {
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    phone: '',
    matricula: '',
    validade: '',
    newUser: [],
    size: 0

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state.newUser
  //  console.log(data);

    for (var i = 0; i < data.length; i++) {
          
         // console.log(this.state.newUser[i])

        this.props.createId(this.state.newUser[i])


        };
    //this.props.createId(this.state)
    // this.props.history.push('/');
  }

  onDrop(files) {

    this.setState({ files });

    var file = files[0];

//    console.log(file)

    const reader = new FileReader();
    reader.onload = () => {
      csv.parse(reader.result, (err, data) => {

        

     //   console.log(data)

        this.size = data.length

//        console.log(this.size)


        for (var i = 0; i < data.length; i++) {
          this.setState({firstName: data[i][0]})
          this.setState({lastName: data[i][1]})
          this.setState({cpf: data[i][2]})
          this.setState({email: data[i][3]})
          this.setState({phone: data[i][4]})
          this.setState({matricula: data[i][5]})
          this.setState({validade: data[i][6]})

          const strings = {"firstName": this.state.firstName, "lastName": this.state.lastName, "cpf": this.state.cpf, "email": this.state.email, "phone": this.state.phone, "matricula": this.state.matricula, "validade": this.state.validade }

         //this.setState({newUser[i]: strings})
        

         this.state.newUser[i] = strings;

        };

        M.toast({html: this.size + ' IDooks carregados', classes: 'rounded'});      });
    };

    reader.readAsBinaryString(file);
  }

  render() {

  

    return (

      <div>

        <Dropzone onDropAccepted={this.onDrop.bind(this)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button className="btn z-depth-0" >Selecionar</button>
              </div>
            </section>
          )}
        </Dropzone>

        <button className="btn z-depth-0" onClick={this.handleSubmit}>Salvar</button>

      </div>





    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createId: (id) => dispatch(createId(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiplesID)