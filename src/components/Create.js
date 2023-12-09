import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';

function Create() {
    const navigate= useNavigate()
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.post('https://657068af09586eff664151ae.mockapi.io/crud',{
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
                <h1>Create Data</h1>
            </div>
                 <form onSubmit={submitHandler} >
                    <div className='form-group'>
                        <label >Nmae:</label>
                        <input type="text" placeholder='name' className='form-control'onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className='form-group'>
                        <label >Age:</label>
                        <input type="text" placeholder='age' className='form-control' onChange={(e)=>{setAge(e.target.value)}} />
                    </div>
                    <div className='form-group'>
                        <label >Email:</label>
                        <input type="text" placeholder='email' className='form-control'onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <br />
                  <div className='d-grid'>
                  <input type="submit" value='submit' className='btn btn-primary'  />
                  </div>
                 </form>

                 {name}
                 <br />
                 {age}
                 <br />
                 {email}
        </div>
    </div>
  )
}

export default Create