import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Header from './components/header/header.js'
import Users from './users.js';
import Main from './components/main/main.js';
import Connections from './components/connections/connections.js';
import Ads from './components/ads/ads.js';

class App extends Component {
  state = {
    users: Users,
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="main-container">
          <Connections />
          <ul className="main-items" style={{border:'2px solid white', margin:'5px'}}>
          {this.state.users.map((user) => {
            return <Main 
            key={user.id} 
            user={user}
            />;
          })}
          </ul>
          <Ads />
        </div>
      </div>
    );
  }
}

export default App;
