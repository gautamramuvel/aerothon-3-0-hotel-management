import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class HotelGoogleMap extends Component {
    render() { 
        
        return ( 
            
            <Map
                google={this.props.google}
                zoom={17}
                initialCenter={{
                    lat: parseFloat(13.10),
                    lng: parseFloat(80.20)
                }}
            >
                <Marker
                    position={{
                        lat: parseFloat(13.10),
                        lng: parseFloat(80.20)
                    }}
                />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyB2Zn8qf1kw0a0KgAA8_EW6okxAlijDbHY"
})(HotelGoogleMap);
