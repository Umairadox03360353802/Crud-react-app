import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Reade() {
  const [api, setApi] = useState([]);
  function getData() {
    axios.get('https://657068af09586eff664151ae.mockapi.io/crud')
      .then((result) => {
        setApi(result.data)
      }).catch((err)=>{console.log(err)})

      
  }
  function handleDelete(id) {
    axios.delete(`https://657068af09586eff664151ae.mockapi.io/crud/${id}`)
    .then(()=>{getData()}).catch((err)=>{console.log(err)})
  }

  function setDataToLocalStore(id,name,age,email) {
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    localStorage.setItem('email',email);
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='mt-2 mb-2'>
          <Link to='/Create'>
          <button className='btn btn-primary'>Create Data</button>
          </Link>
        </div>
        <table className='table table-bordered table-striped table-dark table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {api.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.e_name}</td>
                    <td>{item.e_age}</td>
                    <td>{item.e_email}</td>
                    <th>
              <Link to='/Edit'>
              <button className='btn btn-primary' onClick={()=>{setDataToLocalStore(item.id,item.e_name,item.e_age,item.e_email)}}>Edit</button>
              </Link>
              </th>
              <th>
              <button className='btn btn-danger'onClick={()=>{if(window.confirm('Are you sure you want to delete')){handleDelete(item.id)}}} >Delete</button>
              </th>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Reade