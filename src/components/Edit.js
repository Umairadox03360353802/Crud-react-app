import axios from 'axios'
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Edit() {
    const navigate= useNavigate()
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

   useEffect(() => {
     setId(localStorage.getItem('id'))
     setName(localStorage.getItem('name'))
     setAge(localStorage.getItem('age'))
     setEmail(localStorage.getItem('email'))
   
   }, [])

   function handleUpdate(e) {
    e.preventDefault()
    axios.put(`https://657068af09586eff664151ae.mockapi.io/crud/${id}`,{
        e_name:name,
        e_age:age,
        e_email:email
    }).then(()=>{
        navigate('/')
    }).catch((err)=>{console.log(err)})
   }
   
  return (
    <div className='row' >
    <div className='col-md-4'>
    <div className='mt-2 mb-2'>
      <Link to='/'>
      <button className='btn btn-primary'>Read Data</button>
      </Link>
    </div>
        <div className='bg-primary p-4 text-center'>
            <h1>Update Data</h1>
        </div>
             <form onSubmit={handleUpdate} >
                <div className='form-group'>
                    <label >Nmae:</label>
                    <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control' />
                </div>
                <div className='form-group'>
                    <label >Age:</label>
                    <input type="text" placeholder='age'value={age} onChange={(e)=>{setAge(e.target.value)}} className='form-control'  />
                </div>
                <div className='form-group'>
                    <label >Email:</label>
                    <input type="text" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control' />
                </div>
                <br />
              <div className='d-grid'>
              <input type="submit" value='update' className='btn btn-primary'  />
              </div>
             </form>

           
    </div>
</div>
  )
}

export default Edit