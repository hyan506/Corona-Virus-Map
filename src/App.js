import React, {useState, useEffect}from 'react';
import './App.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import Map from './Map/Map';
import Container from './containers/Container/Container';
import axios from 'axios';
import TopBar from './containers/TopBar/TopBar';
import Layout from './containers/Layout/Layout';
import List from './List/List'
import Side from './containers/Side/Side'
import LastUpdated from './LastUpdated/LastUpdated'
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
        <Container>
          <Side>
            <List data={data}></List>
            <LastUpdated data={data}></LastUpdated>
          </Side>
          
          <Map data ={data}/>
        </Container>
      </Layout>
  );
}

export default App;
