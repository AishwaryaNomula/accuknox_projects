import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';

const AddWidget = () => {
    const [id, setId]=useState('');
    const [name, setName]=useState('');
    const [description, setDescription]=useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/Widget',{id,name,description})
         .then(res=>{
          alert('Widget added succ...')
            setId('')
           setName('')
           setDescription('')
         })
         .catch(err=>{
          alert('error while Adding Widget')
         })
      }
  return (
    <div>
        <div className="container">
        <div className="row">
            <div className="post mb-5">
              <ul className="serviceNav">
                <li><NavLink to="/" className="text-danger">Dashboard</NavLink></li>
                <li><Icon name="angle double right" /></li>
                <li><NavLink to="">Add Widget</NavLink></li>
              </ul>
            </div>
            <div className="col-md-8 m-auto">
                    <h4 className="serviceHead">Add Widget</h4>
            <div className="serviceForm serviceStyle">
            <form onSubmit={submitHandler} className='m-auto'>
                <div className="form-group">
                    <label className="labelForm m-2">ID</label>
                    <input type="text" name="id" placeholder="ID" className="form-control" value={id} onChange={(e)=>setId(e.target.value)} />
                </div>
                <div className="form-group">
                <label className="labelForm m-2">Name</label>
                    <input type="text" name="name" placeholder="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="form-group">
                <label className="labelForm m-2">Description</label>
                    <input type="text" name="decript" placeholder="Description" className="form-control p-3" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Widget" className="form-control btnColor" />
                </div>
            </form>
        </div>
            </div>
        </div> 
       </div>
    </div>
  )
}

export default AddWidget