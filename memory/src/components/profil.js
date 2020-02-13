import React from 'react';
import {Link} from 'react-router-dom';
import lol from '../api/dbmovie';
import { connect } from 'react-redux';

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      amis:[
        {name:'Abdoul'},
        {name:'Selmene'},
        {name:'Ousmane'}
      ]
    };
  }

  affiche(){
    return this.state.amis.map((ami,index)=>{
      return <li key={index}>Nom: {ami.name}</li>
    });
  }

  componentDidMount(){
    lol('Dragon ball')
    .then((xd)=>{ //ces 4 lignes sont équivalent à async
      console.log('with then', xd);
    })
    // this.awaitfun(); //lier avc async awaitfun
  }

  // async awaitfun(){//genre ça quoi !
  //   let mdr = await lol('naruto');
  //   console.log('with async', mdr);
  // }


  render(){
    return(
      <div>
      <h1>Profil</h1>
      <p>Ton profil t'as compris ?</p>
      {this.affiche()}
      <p>Ton chiffre est: {this.props.pika.chiffre}</p>
      <Link to="/"><p>Back to home</p></Link>
      </div>
    );
  }
}

const map=(store)=>{
  return{
  pika:store.chiffre
}
}

export default connect(map)(Profil);
