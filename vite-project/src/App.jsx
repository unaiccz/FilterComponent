
/*
a la hora de aplicar o cambiar el filtro se debe usar BBDD Sistemas FCN o LDMS
este componente hace el fetch, y le pasara a Default el array y el filtro
con esto quiero decir que al guardar un registro hay que hacerlo con el nombre de la asignatura como BBDD Sistemas FCN o LDMS ***
*/

import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Default from './components/Default';


function App() {
  const [Filter, setFilter] = useState("");
  
const [ex, setEx] = useState([]);
const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/clase/api/apunte/');
      setEx(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data from API: ' + error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>Filter
      <br />
      <ul>
        <li onClick={() => setFilter("BBDD")}>BBDD</li>
        <li onClick={() => setFilter("Sistemas")}>Sistemas</li>
        <li onClick={() => setFilter("FCN")}>FCN</li>
        <li onClick={() => setFilter("LDMS")}>LDMS</li>

      </ul>
      <hr />
      <Default ex={ex} Filter={Filter}/>
    </div>
  )
}

export default App