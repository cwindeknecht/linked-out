import React from 'react';

function Main(props) {
    return (
    <dir>
      <h1 style={{textAlign:'center'}}>{props.user.name}</h1>
      <img src={props.user.image} style={{borderRadius:"50%", height:'150px', width:'150px'}} alt={props.user.name}/>
      <p style={{textAlign:'center'}}>{props.user.band}</p>
    </dir>
    );
}

export default Main;
