import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoins from './components/Table'

function App() {

  const [listCoins, setListCoins] = useState([])
  const [filterList, setfilterList] = useState([])
useEffect(() => {
  getCoins()
  
},[])


const getCoins = async()=>{

  await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then(response =>{
    setListCoins(response.data)
    setfilterList(response.data)
  } )
}


const onTypeFilter= (value) => {
var newCoins = [];

listCoins.map(coin => coin.name.toLowerCase().includes(value.toLowerCase()) && newCoins.push(coin))
console.log(newCoins)
setfilterList(newCoins)
}



  return (
    <main>
      <header><h2>GetCoinsPrice</h2>
      <h5 className="m-0">Type the name</h5>

      <input type="text" onChange={(e)=>onTypeFilter(e.target.value)}/>
      </header>


      <section>
        <div className="col">
        <TableCoins coins={filterList}/>
        </div>

      </section>


<footer>
  <h3 className="shadow">Developed by AleV_Dev 😎</h3>
</footer>
    </main>
  );
}

export default App;
