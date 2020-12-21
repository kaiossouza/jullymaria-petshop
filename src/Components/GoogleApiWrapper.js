import React, { Component } from 'react';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        stores: [
          { latitude: -27.59084332317319, longitude: -48.51211872090946, local: "Jully Maria Pet Shop" }]
      }
    }

    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
          lat: store.latitude,
          lng: store.longitude
        }}
        />
      })
    }

    render() {
      return (
  
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{ lat: -27.59084332317319, lng: -48.51211872090946 }}
        >
          {this.displayMarkers()}
        </Map>
  
      );
    }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyBO9m97iFeQgFi7Z645y-yjGnjJWU8K8j8',
    }
))(MapContainer)