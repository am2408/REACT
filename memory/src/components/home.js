import React from 'react';
import Description from './description';
import {Link} from 'react-router-dom';
import Compter from './compter';
import { connect } from 'react-redux';
import {add} from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:'Abdoul',
      age:21,
      sentence:'coucou'
    };
  }

  change() {
    this.setState({
      name:'Ousmane',
      age:21
    });
  }

  aug(e){
    e.preventDefault();
    let newChiffre = this.props.pika.chiffre+=1;
    this.props.add(newChiffre);
  }

  value=(val)=>{
    this.setState({sentence:val})
  }

  render(){
    return(
      <div>
      <h1>Home</h1>
      <p>{this.state.sentence}</p>
      <p>{this.state.name}</p>
      <p>{this.state.age}</p>
      <p onClick={()=>
        {this.change()}
      }>Click</p>
      <Compter />
      <Description changeSentence={this.value}/>
      <button onClick={(e)=>
        {this.aug(e)}
      }>Augmente !!!</button>
      <p>Ton chiffre est: {this.props.pika.chiffre}</p>
      <Link to="/profil"><p>Go to profil</p></Link>
      </div>
    );
  }
}

const map=(store)=>{
  return{
    pika:store.chiffre
  }
}

const map2={
  add
}

export default connect(map, map2)(Home);
