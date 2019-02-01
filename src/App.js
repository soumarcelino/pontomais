import React, { Component } from 'react';
import List from './components/List'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Meus pontos</h3>
        <List/>
      </div>
    );
  }
}

export default App;
