import React from 'react';

class Popup extends React.Component{
  constructor(props) {
    super(props);
    this.state={
    }
    this.state.close = false;
  }

    closepop(){
      this.setState({close:  !this.state.close});
    }

    render(){
      return(
        <div>
        {this.state.close === false && <div className="popUp">
          <p className="closePopUp" onClick={()=>{
            this.closepop();
          }}>X</p>
          <h4>Félicitation !</h4>
          <p>Vous avez gagner un portable</p>
        </div>}
        </div>
      );
    }
}

export default Popup;
