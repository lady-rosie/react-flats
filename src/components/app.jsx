import React, { Component } from 'react';
import Flat from './flat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <div>
      <div className="flat-list">
        <Flat name="hello" price="140" priceCurrency="EUR" imageUrl="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg"/>
        </div>
      <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
