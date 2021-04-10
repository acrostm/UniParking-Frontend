// ESLint Validated

import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, InfoWindow, Marker } from 'react-google-maps';
import mapstyle from './mapstyle';
import * as carpark from "./sampleParks.json";
function Map() {
    const [selectedPark, setSelectedPark] = useState(null);


    return (


        <div className="googlemap">

            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: -37.798825, lng: 144.961051 }}
                defaultOptions={{ styles: mapstyle }} // adding map styles to the googlemap, the styles are saved in ,mapstyle.js
            >
                {carpark.data.map((park) => (
                    <Marker
                        key={park.properties.PARK_ID}
                        position={{
                            lat: park.properties.coordinates[0],
                            lng: park.properties.coordinates[1]
                        }}
                        // put the data of the selected park into current state, 
                        onClick={() => {
                            setSelectedPark(park);
                        }}
                    />
                ))}
                {/* let the selected marker show infowindow */}
                {selectedPark && (
                    <InfoWindow
                        position={{
                            lat: selectedPark.properties.coordinates[0],
                            lng: selectedPark.properties.coordinates[1]
                        }}
                        // remove the data of selected park from the current state, reset it  to null
                        onCloseClick={() => {
                            setSelectedPark(null);
                        }
                        }
                    >
                        <div>
                            <h3>{selectedPark.properties.PARK_NAME}</h3>
                        </div>
                    </InfoWindow>
                )}

            </GoogleMap>
        </div>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Deatailmap() {
    return (
        <main className='mapgridcontainer'>
            <h1>The Carparks Nearby</h1>
            <div style={{ width: '80vw', height: "80vh", margin: 'auto', marginTop: '10vh' }} className='detailmap'>

                <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBw2vVylb_TitKBWaIN4f-JjBeGx-3ztPc"}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        </main>
    );
}