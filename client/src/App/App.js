import React, { Component } from 'react';
import './App.css';
import Client from './../Client';

class App extends Component {
  state = {
    playlistTitles: []
  }

  componentDidMount() {
    Client.getPlaylistData((titles) => {
      this.setState({
        responseText: titles[1]
      });
    });
  }

  render() {
    return (
      <div>
        <h1>no elo kurwa</h1> 
        <h2>{this.state.responseText}</h2> 
      </div>
    );
  }
}

export default App;
