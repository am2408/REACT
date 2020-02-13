import React from 'react';
import { connect } from 'react-redux';
import {getPhotos} from '../api/api';
import {add} from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      articles: [],
      min:0,
      max:15
    }
  }
  componentDidMount(){
    this.setState(
      ()=>{
        getPhotos()
        .then((response)=>{
          this.setState({articles: response})

        })
      });
    }


  displayPhoto(){
    return this.state.articles.map((article, index)=>{
      if (index < this.state.max && index > this.state.min) {
      return (
        <article className="product-item" key={article.id}>
          <h2>{article.title}</h2>
          <img src={article.url} alt='une photo tmtc' className="productImage"/>
          <div className="add-basket">
          <button
            onClick={()=>{
              this.addToBasket(article);
            }}>Add To Basket</button>
            </div>
        </article>
      );
    }
    })
  }

  next(e){
    e.preventDefault();
    if(this.state.max < 5000){
    this.setState({min:this.state.min+=15});
    this.setState({max:this.state.max+=15});
  }
  }
  previous(e){
    e.preventDefault();
    if(this.state.min > 0){
    this.setState({min:this.state.min-=15})
    this.setState({max:this.state.max-=15})
  }
  }

  addToBasket(product){
    product.quantity = 1;
    let shaker = this.props.item.basket;
    let same = shaker.findIndex((prot)=> prot.id === product.id);
    if(same === -1){
      shaker = [...shaker, product];
    }else{
      shaker[same].quantity += 1;
    }
    this.props.add(shaker);
    console.log(shaker);
  }

  test(){
    getPhotos();
  }

  render(){
    return(
      <section id="contents">
        <div className="container">
          <h1>HOME PAGE</h1>
          <div className="direction">
          <button
            onClick={(e)=>{
              this.previous(e);
            }}>Précédent</button>
            <button
              onClick={(e)=>{
                this.next(e);
              }}>Suivant</button>
          </div>
          {this.displayPhoto()}
        </div>
        <div className="direction">
        <button
          onClick={(e)=>{
            this.previous(e);
          }}>Précédent</button>
          <button
            onClick={(e)=>{
              this.next(e);
            }}>Suivant</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (store)=> {
  return{
    item:store.basket

  }
}

const mapDispatchToProps = {
  add
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
