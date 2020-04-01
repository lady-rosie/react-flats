import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';

class SimpleMap extends Component {
  marking = this.props.flats.map((flat) => <Marker lat={flat.lat} lng={flat.lng} />);

  static defaultProps = {
    center: [48.8566, 2.3522],
    zoom: 12,
  };


  render() {
    if (this.props.selectedFlat === "") {
      return (
        <GoogleMap
          center={this.props.center}
          zoom={this.props.zoom}>
          {this.marking}
        </GoogleMap>);
    }
    return (
      <GoogleMap
        center={this.props.center}
        zoom={this.props.zoom}>
        <Marker lat={this.props.selectedFlat.lat} lng={this.props.selectedFlat.lng} />
      </GoogleMap>
    )
  }
}

export default SimpleMap;
