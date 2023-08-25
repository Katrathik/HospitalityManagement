import React, { useState,useEffect } from 'react';
import './map.css';
import mapImg from './image/map.png';
import {mapLoc} from './mapLoc'
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer,RecenterAutomatically, useMap  } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
// import { MapLibreTileLayer } from './MapLibreTileLayer.tsx';
// import arcades from './arcades.json';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Map() {
  // const loc = [12.909069,77.566582]
  const RecenterAutomatically = ({loc}) => {
    const map = useMap();
     useEffect(() => {
       map.setView(loc);
     }, loc);
     return null;
   }
	const [loc, setLoc] = useState([12.909069,77.566582])
  useEffect(() => {
    // You can set the map center to the updated loc value
    if (mapRef.current) {
      mapRef.current.setView(loc, 13); // Adjust the zoom level as needed
    }
  }, [loc]);

  const mapRef = React.useRef();
  // useEffect(() => {
  //   // Create a map using Leaflet
  //   const map = L.map('map').setView([51.505, -0.09], 13);

  //   // Add a tile layer to the map
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution:
  //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //   }).addTo(map);

  //   // Add a marker to the map
  //   L.marker([51.505, -0.09]).addTo(map);
  // }, []);

  return (
    <div className='map'>
      <h1>We are Located at?</h1>
      <div className='map_grid'>
        <div className='map_karnataka'>
          <div
            className='chikkamagalure'
            style={{
              position: 'absolute',
              left: '11rem',
              top: '30rem',
              zIndex: '400',
              backgroundColor: 'transparent',
              height: '80px',
              width: '80px',
              borderRadius: '50%',
            }}
						onClick={()=>setLoc([12.909069,77.566582])}
          ></div>
					<div
            className='hassan'
            style={{
              position: 'absolute',
              left: '13.5rem',
              top: '32.5rem',
              zIndex: '400',
              backgroundColor:'transparent',
              height: '80px',
              width: '80px',
              borderRadius: '50%',
            }}
						onClick={()=>setLoc([13.0646016,77.57824])}
          ></div>
          <div
            className='raichur'
            style={{
              position: 'absolute',
              left: '18rem',
              top: '13.5rem',
              zIndex: '400',
              backgroundColor: 'transparent',
              height: '80px',
              width: '80px',
              borderRadius: '50%',
            }}
						onClick={()=>setLoc([13.4239835,75.2191222])}
          ></div>
          <img src={mapImg}></img>
        </div>
        <div className='circle'></div>
        {/* <mapLoc loc={loc}/> */}
        {true && <MapContainer
          center={loc}
          zoom={13}
          scrollWheelZoom={false}
          whenCreated={mapInstance => {
            mapRef.current = mapInstance;
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={loc}>
          <RecenterAutomatically loc={loc} />
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> }
      </div>
    </div>
  );
}

export default Map;
