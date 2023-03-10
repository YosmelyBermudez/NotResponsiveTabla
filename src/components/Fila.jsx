import React from "react";
import {ThemeProvider} from 'react-bootstrap'
const Fila = ({moneda,index}) => {
    return (
        <ThemeProvider>
        <tr>
            <td >{index}</td>
            <td>
            <img src={moneda.image} alt={moneda.name} style={{width: '3%'}} />
                <span class="w-25 p-2">
                    {moneda.name}
                    </span>
                <span> {moneda.symbol}</span>
            </td>
            <td>{moneda.current_price}</td>
            <td>{moneda.price_change_percentage_24h}</td>
            <td>{moneda.total_volume}</td>
        </tr>
        </ThemeProvider>
    )
}
export default Fila