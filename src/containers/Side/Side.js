import React from 'react';
import classes  from './Side.module.css';
const Side = (props) =>{
    return(
        <div className={classes.Side}>
            {props.children}
        </div>
    )
};

export default Side;