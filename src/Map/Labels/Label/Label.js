import React from 'react';

import LabelWindow from '../LabelWindow/LabelWindow';

const Label = props => {

    const { lat, long: lng } = props.data.countryInfo;

  return (
    <div>
        <LabelWindow longitude={lng} latitude={lat} cases={props.data.cases}>
          <h2>{props.data.country}</h2>
          <div>Confirmed: {props.data.cases}</div>
          <div>Deaths: {props.data.deaths}</div>
          <div>Recovered: {props.data.recovered}</div>
        </LabelWindow>
    </div>
  );
};

export default Label;
