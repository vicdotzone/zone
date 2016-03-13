import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Toggle from 'material-ui/lib/toggle';
import data from '../../data/trash.json';
import Paper from 'material-ui/lib/paper';

const styles = {
  toggle: {
    marginBottom: 16,
  },
};


const getIcon = (type) => {
  if (type.match(/Dog Bag Dispenser/)) {
    return '🐶';
  }

  return '🗑';
};

export default class TrashMap extends Component {
  constructor() {
    super();
    this.state = { position: null, dog: true, bin: true };
    this.zoom = 16;
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
    const toggleDog = () => {
      this.setState({ dog: !this.state.dog });
    };

    const toggleBin = () => {
      this.setState({ bin: !this.state.bin });
    };

    return (
      <div>
        <GoogleMap
          style={{ height: '100vh' }}
          defaultCenter={{ lat: 48.429668, lng: -123.365540 }}
          defaultZoom={this.zoom}
        >
          {
            data
              .filter(({ type }) => {
                if (type.match(/Dog Bag Dispenser/)) {
                  return this.state.dog;
                }

                return this.state.bin;
              })
              .map(({ lat, lng, type }, i) =>
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
              )
          }
          {this.renderPositionMarker()}
        </GoogleMap>
        <Paper zDepth={2} style={styles.cardStyle}
          style={{
            position: 'fixed',
            top: 10,
            left: 10,
            width: 220,
            padding: '16px 16px 0 16px',
            background: 'rgba(255, 255, 255, 0.75)',
          }}
        >
          <div>
            <Toggle
              ref="toggleDog"
              label="🐶 Dog bag dispensers"
              toggled={this.state.dog}
              onToggle={toggleDog}
              style={styles.toggle}
            />
            <Toggle
              ref="toggleBin"
              label="🗑 Litter bins"
              toggled={this.state.bin}
              onToggle={toggleBin}
              style={styles.toggle}
            />
          </div>
        </Paper>
      </div>
    );
  }
}
