import React from 'react';
import classes  from './List.module.css';
const List = (props) =>{

    let list = []
    if(typeof props.data !== "undefined"){
      props.data.map((countryData) =>{
        list.push({
          country: countryData.country,
          case: countryData.cases});
        return 1;
      })
  
    }
    list.sort((a, b) => b.case - a.case);

    return(
        <div className={classes.List}>
              {
                   list.map((country, index) => {
                    return (
                    <div className ={classes.ListElement}>
                      <div classes={classes.countryRank}>{index}</div>
                      <div className={classes.countryName}>{country.country}</div>
                      <div className={classes.caseNumber}>{country.case}</div> </div>
                    );
                  })   
              }
        </div>
    )
};

export default List;