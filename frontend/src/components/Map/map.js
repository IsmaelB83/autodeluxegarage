/* Import node modules */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


export class MapContainer extends Component {
  
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  
  render() {
    return (
        <Map 
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 42.3493, lng: -3.7126 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Auto Deluxe Garage'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      );
    }
    
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAe41b1Bd635J7ObvA6JoueI2DyFKCyFq8',
    language: 'es'
  })(MapContainer);
  
