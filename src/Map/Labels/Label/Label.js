import React from 'react';
import classes from './Label.module.css';
import LabelWindow from '../LabelWindow/LabelWindow';

const Label = props => {

    const { lat, long: lng } = props.data.countryInfo;

  return (
    <div>
        <LabelWindow longitude={lng} latitude={lat} cases={props.data.cases}>
          <h2>{props.data.country}</h2>
          <div className={classes.line}>
            <div className={classes.text}>Confirmed:</div><div className={classes.number}>{props.data.cases}</div>
          </div>
          <div className={classes.line}>
            <div className={classes.text}>Deaths:</div><div className={classes.number}>{props.data.deaths}</div>
          </div>
          <div className={classes.line}>
            <div className={classes.text}>Recovered:</div><div className={classes.number}>{props.data.recovered}</div>
          </div>
          <div className={classes.line}>
            <div className={classes.text}>Confirmed Today:</div><div className={classes.number}>{props.data.todayCases}</div>
          </div>
        </LabelWindow>
    </div>
  );
};

export default Label;
