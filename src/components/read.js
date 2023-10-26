import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Read({handleId}) {
    const nav=useNavigate();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get("https://6538b11ba543859d1bb1ba7f.mockapi.io/fakeAPI1")
      .then((response) => setApiData(response.data))
      .catch((error) => console.error(error));
  }, []);
 
function handleclick(id){
    handleId(id)
nav('/pop')
}
function remove(id){
    axios.delete(`https://6538b11ba543859d1bb1ba7f.mockapi.io/fakeAPI1/${id}`).then(()=>{
        axios.get("https://6538b11ba543859d1bb1ba7f.mockapi.io/fakeAPI1").then((response)=>setApiData(response.data))
    })

       
   
}


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item) => (
            <tr key={item.id}>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td><button className='update' onClick={()=>{handleclick(item.id)}}>update</button></td>
              <td><button className='remove' onClick={()=>{remove(item.id)}}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Read;
