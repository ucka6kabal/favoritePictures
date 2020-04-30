import React from 'react';
import './App.css';
import AlbumList from './albums';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AlbumList />
      </div>
    );
  }
}

export default App;