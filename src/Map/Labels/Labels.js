import React from 'react';
import Label from './Label/Label';

const Labels = (props) => {
  

  let data = []
  if(typeof props.data !== "undefined"){
    props.data.map((countryData) =>{
      data.push(countryData);
    })

  }
  

  
  return(
    data.map((countryData, index) => {
        return (
          <Label 
            data={countryData}
            />
        );
      })
)

};

export default Labels;