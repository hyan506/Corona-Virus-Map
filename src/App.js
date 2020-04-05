import React, {useState, useEffect}from 'react';
import './App.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import Map from './Map/Map';
import MapContainer from './containers/MapContainer/MapContainer';
import axios from 'axios';
import TopBar from './containers/TopBar/TopBar';
import Layout from './containers/Layout/Layout';
import List from './List/List'
function App() {

  const [data, setData] = useState();

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
      <Layout>
        <TopBar/>
        <MapContainer>
          <List></List>
          <Map data ={data}/>
        </MapContainer>
      </Layout>
  );
}

export default App;
