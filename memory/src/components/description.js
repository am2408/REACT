import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div>
      <h2>Description</h2>
      <input
      onChange={(e)=>{
        let val = e.currentTarget.value;
        this.props.changeSentence(val);
      }}
      />
      </div>
    )
  }
}

export default Description;
