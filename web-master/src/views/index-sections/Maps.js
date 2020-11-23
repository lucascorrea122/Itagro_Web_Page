import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { directive } from "@babel/types";

class Maps extends Component{
    render(){
        return(
            <div className="Maps">
                <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
   name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
 
  </InfoWindow>
</Map>
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyCnP8GwyDcyzjguwoVs6KMmXoxojcHdhbc ")
  })(Maps)