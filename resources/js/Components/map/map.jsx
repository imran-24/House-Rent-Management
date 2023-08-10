
import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocoder from './geocoder';

const SelectMap = ({value, onChange}) => {

  const mapRef = useRef();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if(value){
      setLatitude(value.lat);
      setLongitude(value.lng);
    }
    else{
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        }, function(error) {
          console.error("Error getting location: " + error.message);
        });
      } else {
        console.error("Geolocation is not available in this browser.");
      }
    }
  }, []);

  useEffect(()=>{
    if(onChange){
    onChange({"lng": longitude, "lat": latitude})}
  },[latitude, longitude])

  return (
    <div className='h-full w-full'>
    {
      (longitude !== null && latitude !== null) ?
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken="pk.eyJ1IjoiaW1yYW4xOTU2IiwiYSI6ImNsa3h0ajViOTAwaWEzbW5wdmY4M2M0OWIifQ.I423Zm6aT0dFSw-ocswIdQ"
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 15,
        }}
        style={{ borderRadius: 6, padding: 6}}
        
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker
          latitude={latitude}
          longitude={longitude}
          draggable
          onDragEnd={(e) => {
            setLongitude(e.lngLat.lng) 
            setLatitude(e.lngLat.lat)}
          }
        />
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation
          // onGeolocate={(e) =>
          //   dispatch({
          //     type: 'UPDATE_LOCATION',
          //     payload: { lng: e.coords.longitude, lat: e.coords.latitude },
          //   })
          // }
        />
        <Geocoder setLongitude={setLongitude} setLatitude={setLatitude} />
      </ReactMapGL>
      : <div>Loading map</div>
    }
    </div>
  )
}

export default SelectMap