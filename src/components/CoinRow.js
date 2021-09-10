import React from 'react'

export default function CoinRow({coin}) {
    return (
        <tr>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{`${coin.current_price} $`}</td>
           <td className="flex"> <img src={coin.image} alt="" with="25" height="25" /></td>
           <td className={parseInt(coin.price_change_percentage_24h)<0 ? "red" : "green"}>{coin.price_change_percentage_24h}</td>
        </tr>
    )
}
