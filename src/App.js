import React, {useState, useEffect}from 'react';
import './App.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import Map from './Map/Map';
import MapContainer from './containers/MapContainer/MapContainer';
import axios from 'axios';
function App() {
  const [data, setData] = useState();
  // useEffect(() => {
  //   const getData = async () =>{
  //     //call api and get data
  //     let response;
  //     try {
  //       response = await axios.get('https://corona.lmao.ninja/countries');
  //     } catch(e) {
  //       console.log(`Failed to fetch countries: ${e.message}`, e);
  //       return;
  //     }
  // },[]);
  
  useEffect(() => {
    const fetchData = async () => {
      let result;
      try{
        result = await axios(
          'https://corona.lmao.ninja/countries',
        );
        setData(result.data);
      }catch(e){
        console.log(`Failed to fetch countries: ${e.message}`, e);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MapContainer>
        <Map data ={data}/>
      </MapContainer>
      
    </div>
  );
}

export default App;
