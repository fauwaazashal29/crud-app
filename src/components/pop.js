import React, {  useState } from 'react'
import   "../App.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Pop({id}) {
    const nav=useNavigate();
    const [firstname,setfirstname]=useState('')
    const[lastname,setlastname]=useState('')
    const [email,setemail]=useState('')

    function postData(){
        axios.put(`https://6538b11ba543859d1bb1ba7f.mockapi.io/fakeAPI1/${id}`,{
            firstname,lastname,email
        })
nav('/read')

    }
    


  return (
    <div className='form'>
        <div className='border'>
     <div  className='formdata'>update the Detailes</div>
    <div  className='formdata'><label>firstname</label>
    <input type='text' onChange={(e)=>setfirstname(e.target.value)} value={firstname}/></div>
   
     <div  className='formdata'><label>lastname</label>
     <input type='text' onChange={(e)=>setlastname(e.target.value)} value={lastname}/></div>
    
     <div  className='formdata'><label>email</label>
     <input type='text'onChange={(e)=>setemail(e.target.value)} value={email}/></div>
     
     <div  className='formdata'><button className='update' onClick={postData}>update</button></div>
     </div>
     </div>
   
  )
}

export default Pop