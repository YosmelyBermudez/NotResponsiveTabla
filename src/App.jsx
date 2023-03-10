import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Tabla from './components/Tabla';
import {Container, ThemeProvider, Row} from 'react-bootstrap';

function App() {

  const [monedas,setMonedas] = useState([])
  const [buscar, setBuscar] = useState('')

  const ConsumirDatos = async() => {
    const respuesta = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    console.log(respuesta.data)
    setMonedas(respuesta.data)
  }
  useEffect(() => {
    ConsumirDatos()
  },[])
  return (
    <>
    <h1>CoinGecko Market</h1>
    <Container>
      <Row className="justify-content-md-center">
      <Container>
      <input type='text' placeholder='Buscar moneda' onChange={e => setBuscar(e.target.value)}/>
      </Container>
      <Container className='container-sm'>
        <ThemeProvider>
      <Tabla monedas ={monedas}  buscar={buscar} />
      </ThemeProvider>
      </Container>
      </Row>
    </Container>
    </>
  );
}

export default App;
