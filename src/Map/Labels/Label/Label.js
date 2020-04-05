import React from 'react';
import {Popup} from 'react-map-gl';
import LabelWindow from '../LabelWindow/LabelWindow';
import classes from './Label.module.css';

const Label = props => {

    const { lat, long: lng } = props.data.countryInfo;
  return (
    <div className={classes.Label}>

        <LabelWindow longitude={lng} latitude={lat}>
          <div>{props.data.country}</div>
          <div>{props.data.cases}</div>
        </LabelWindow>
    </div>
  );
};

export default Label;
