import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import data from '../../data/trash.json';

const getIcon = (type) => {
  if (type.match(/Dog Bag Dispenser/)) {
    return '🐶';
  }

  return '🗑';
};

export default class TrashMap extends Component {
  constructor() {
    super();
    this.state = { position: null };
  }

  componentDidMount() {
    if ('geolocation' in navigator) {
      this.watchID = navigator.geolocation.watchPosition((position) => {
        this.setState({ position });
      });
    }
  }

  componentWillUnmount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.clearWatch(this.watchID);
    }
  }

  renderPositionMarker() {
    const { position } = this.state;

    if (!position) {
      return [];
    }

    const { latitude, longitude } = position.coords;

    return (
      <div
        lat={latitude}
        lng={longitude}
        style={{
          transform: 'translate(-50%, -100%)',
          width: 30,
          textAlign: 'center',
          fontSize: 40,
        }}
      >
      📍
      </div>
    );
  }

  render() {
    return (
      <GoogleMap
        style={{ height: '100vh' }}
        defaultCenter={{ lat: 48.429668, lng: -123.365540 }}
        defaultZoom={16}
      >
        {data.map(({ lat, lng, type }, i) =>
          <div
            key={i}
            lat={lat}
            lng={lng}
            style={{
              fontSize: 20,
              background: '#fff',
              border: '1px solid #222',
              borderRadius: '50%',
              width: 26,
              height: 26,
              transform: 'translate(-50%, -50%)',
              lineHeight: '26px',
              textAlign: 'center',
            }}
          >
          {getIcon(type)}
          </div>
        )}
        {this.renderPositionMarker()}
      </GoogleMap>
    );
  }
}
