import React from 'react';
import Fila from './Fila';
import {Table, Container, ThemeProvider} from 'react-bootstrap';

const titles = ["#", "Coin", "Price", "Price Change","24h Volume"];

const Tabla = ({monedas,buscar}) => {
    const monedasFiltradas = monedas.filter((moneda) => 
        moneda.name.toLowerCase().includes(buscar.toLowerCase()) | moneda.symbol.toLowerCase().includes(buscar.toLowerCase()));
    return (
      <Container className='container-sm'>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
            {titles.map((title,index) => (
                        <th key={index}>{title}</th>
                    ))}
            </tr>
          </thead>
          <tbody>
          {monedasFiltradas.map((moneda,index) => (
            <ThemeProvider>
            <Fila moneda={moneda} key={index} index={index + 1} />
            </ThemeProvider>
                ))}
          </tbody>
        </Table>
        </Container>
      );
}

export default Tabla