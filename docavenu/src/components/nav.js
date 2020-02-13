import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <nav className="menu">

          <Link className="nav-title" to="/">Home</Link>
        <Link className="nav-title" to="/basket">panier</Link>
        <span>{this.props.item.basket.length}</span>

      </nav>
    );
  }
}

const mapStateToProps = (store)=> {
  return{
    item:store.basket

  }
}

export default connect(mapStateToProps)(Nav);
