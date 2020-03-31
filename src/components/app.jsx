import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flatList';
import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    };
  };

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render () {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <SimpleMap selectedFlat={this.state.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
