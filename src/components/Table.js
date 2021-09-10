import React from 'react'
import CoinRow from './CoinRow'
export default function Table({coins}) {
    return (
        <table>
          <thead>
        <tr>
        <td><h3>Name</h3> </td>
        <td><h3>Symbol</h3> </td>
                <td><h3>Price</h3> </td>
                <td><h3>Image</h3> </td>
                <td><h3>%24H</h3> </td>
                
        </tr>
                    
          </thead>
           <tbody>
           {coins.map((coin, index)=>(
                <CoinRow key={index} coin={coin}/>
            ))}
           </tbody>

         
        </table>
    )
}
