import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Labels from './Labels/Labels';

const Map = (props)=> {
  const [viewport, setViewport] = useState({
    width :"100%",
    height :"100%",
    latitude: 0,
    longitude: 0,
    zoom: 1.5
  });
  return (
    <ReactMapGL
      {...viewport}
      mapStyle = "mapbox://styles/blueberrypie/ck8lj4cgn02221ikg4mu2uz3h"
      
      onViewportChange={setViewport}
      mapboxApiAccessToken={"pk.eyJ1IjoiYmx1ZWJlcnJ5cGllIiwiYSI6ImNrOGs5Z3hyMjA1ankza29icWZrOHJ6bnAifQ.9JUhm90bB_TCER56V88ntg"}
    >
      <Labels data = {props.data}/>

    </ReactMapGL>
  );
}
export default  Map;