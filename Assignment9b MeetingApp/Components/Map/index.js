import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {
  constructor() {
    super()
    
    this.state = {
      coords: null
    };

    this.updateCoords = this.updateCoords.bind(this);
  }

  componentDidMount() {
    this.setPosition();
  }

  setPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({coords: position.coords})
    });
  }

  updateCoords({latitude, longitude}) {
    this.setState({coords: {latitude, longitude}})
  }

  render() {
    const {coords} = this.state;
    const {saveLocation} = this.props;
    
    return(
      <div className="map-screen">
        <h1>Set your location pinpoint</h1>
        {coords && <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `65vh`}} />}
          mapElement={<div style={{ height: `100%`}} />}
          coords={coords}
          updateCoords={this.updateCoords}
        />}
        <button className="btn-next btn-next-map"
         onClick={() => saveLocation(coords)}
         type="button"
         >
         Save and Continue to dashboard
        </button>
      </div>
   )
 }

}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
  >
    {props.isMarkerShown && 
    <Marker 
      position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
      draggable={true}
      onDragEnd={position => {
          setTimeout(() => {
                props.updateCoords({latitude: position.latLng.lat(), longitude: position.latLng.lng()})
                }
              ,500);

      }}
      />}
  </GoogleMap>
))

export default Map;