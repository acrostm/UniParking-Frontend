import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import styles from '../../style/component.module.css';

//implement pin for carpark coordinates
//making layer to remove other location pins

export class Mapcontainer extends Component {
    render() {
        return (
            <div className='map'>
                <Map
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{
                        lat: -37.798825,
                        lng: 144.961051
                    }}
                />
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBw2vVylb_TitKBWaIN4f-JjBeGx-3ztPc'
})(Mapcontainer);
