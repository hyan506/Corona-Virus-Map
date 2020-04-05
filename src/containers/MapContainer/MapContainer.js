import React from 'react';
import classes  from './MapContainer.module.css';
const MapContainer = (props) =>{
    return(
        <div className={classes.MapContainer}>
            {props.children}
        </div>
    )
};

export default MapContainer;