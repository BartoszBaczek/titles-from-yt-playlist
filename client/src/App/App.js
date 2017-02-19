import React, { Component } from 'react';
import './App.css';
import Client from './../API/Client';
import UserInputResolver from './../API/UserInputResolver';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class App extends Component {
  state = {
    playlistId: '',
    titles: ''
  }


  getValidationState() {
    if (this.state.playlistId){
      return 'success';
    } else {
      return "error"
    }
  }

  handleChange = (e) => {

    let playlistId = UserInputResolver.extractPlaylistId(e.target.value) || '';

    this.setState({
      playlistId: playlistId
    }, () => {
      if (this.state.playlistId) {
        Client.getPlaylistData(this.state.playlistId, (titles) => {
          this.setState({
            titles: titles
          })
        });
      } else {
        this.setState({
          titles: 'Bad URL'
        })
      }
    });
  } 

  render() {
    return (
      <div>
        <form>
          <FormGroup bsSize="large" validationState={this.getValidationState()}>
            <ControlLabel>Url to playlist</ControlLabel>
            <FormControl type="text" placeholder="https://www.youtube.com/watch?v=MRSgvfNZcWA&index=45&list=PLOnoN1ELl39q0ORoNfOqm5x0g6h6EnPg3" onChange={this.handleChange} />
              <FormControl.Feedback />
          </FormGroup>
        </form>
          {this.state.titles}
      </div>
    );
  }
}

export default App;
