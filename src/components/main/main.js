import React from 'react';

function Main(props) {
    return (
    <dir className="main-item">
      <h1>{props.user.name}</h1>
      <img src={props.user.image} alt={props.user.name}/>
      <p>{props.user.band}</p>
    </dir>
    );
}

export default Main;
