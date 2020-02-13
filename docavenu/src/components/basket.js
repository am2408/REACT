import React from 'react';
import { connect } from 'react-redux';
import {supp} from '../actions'


class Basket extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   console.log('number state global', this.props.item);
  //   console.log(this.props.item.basket);
  // }


  delete(him){
    let bananas = this.props.item.basket.filter(banana => banana.id !== him.id);
    console.log(him);
    console.log(bananas);
    this.props.supp(bananas);
  }

  displayBasket(){
    if (this.props.item.basket.length !== 0) {
      return this.props.item.basket.map((product, index)=>{
      return(
        <div key={index}>
        <h2>{product.title}</h2>
        <img src={product.url} alt='une photo tmtc' className="productImage"/>
        <p>{product.quantity}</p>
        <button
          onClick={()=>{
            this.delete(product);
          }}>Supprimer</button>
        </div>
      );
    })
  } else{
    return(
      <div>
      <p>Ton panier est vide t'as capté ?!</p>
      </div>
    );
  }
  }
  render(){
    return(
      <div>
      <h1>Basket</h1>
      {this.displayBasket()}
      </div>
    );
  }
}


const mapStateToProps = (store)=> {
  return{
    item:store.basket

  }
}

const mapDispatchToProps = {
  supp
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
