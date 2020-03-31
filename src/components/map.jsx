import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';

class SimpleMap extends Component {

  static defaultProps = {
    center: [48.884211, 2.34689],
    zoom: 14,
  };


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap
        center={this.props.center}
        zoom={this.props.zoom}>
        <Marker lat={this.props.selectedFlat.lat} lng={this.props.selectedFlat.lng} />
      </GoogleMap>
    );
  }
}


export default SimpleMap;
