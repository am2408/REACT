import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
//permet de recup des info dans url $_GET en gros !
render(){
  const set = this.props.match.params;
  return(
    <div>
    <p>Paramètre: {set.id}</p>
    </div>
  );
}
}

export default Detail;
