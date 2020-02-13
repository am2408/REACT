import React from 'react';


class Compter extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      age:21
    };
  }

  incre(){
    this.setState({age : this.state.age+1})
  }

  render(){
    return(
      <div>
      <p>{this.state.age}</p>
      <p onClick={(e)=>
        {this.incre(e)}
      }>Compte</p>
      </div>
    );
  }
}

export default Compter;
