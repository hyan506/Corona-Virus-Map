import React from 'react';
import classes  from './LastUpdated.module.css';
const LastUpdated = (props) =>{
    let formattedDate;
    if(typeof props.data !== "undefined"){
      formattedDate= new Date(props.data[0].updated).toLocaleString();
    }
    
    return(
        <div className={classes.LastUpdated}>
            <h2>Last Updated: {formattedDate}</h2>
        </div>
    )
};

export default LastUpdated;