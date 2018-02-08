import React from 'react';

function Main(props) {
    return (
    <dir>
      <h1>{props.user.name}</h1>
      <img src={props.user.image} alt={props.user.name}/>
      <p>{props.user.band}</p>
    </dir>
    );
}

export default Main;
