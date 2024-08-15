import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import '../styles.css';
import {
    CardHeader,
    CardDescription,
    CardContent,
    Card,
} from 'semantic-ui-react'
import axios from 'axios';


const Dashboard = () => {

    const [query, setQuery] = useState('');
    const [Widget, setWidget] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/Widget')
            .then(res => {
                setWidget(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const deleteData=(widgetid)=>{
        axios.delete('http://localhost:4000/Widget/'+widgetid)
          .then(res=>{
            alert('Widget Deleted succ...')
          })
          .catch(err=>{
            alert('Error While Deleting Widget..')
          })
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
        //  onSearch(event.target.value);
    };

    return (
        <div>
            <div className='container-fluid Bgcolor'>
                <div className='row'>
                    <div className='col-md-4 float-l'>
                        <ul className='detailList'>
                            <li><NavLink to="/" className="text-danger">Home</NavLink></li>
                            <li><Icon name="angle double right" /></li>
                            <li><NavLink>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <div className='col-md-5 float-r pad-t'>
                        <input
                            type="text"
                            value={query}
                            onChange={handleChange}
                            placeholder="Search..."
                            className="form-control inputField"
                        />
                    </div>
                </div>
            </div>
            <div className='dashboardSection'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3 className='pad-l'>Dashboard</h3>
                    </div>
                    <div className='col-md-6'>
                        <div className='pad-l'>
                            <NavLink to="addwidget" className='add-btn'>Add Widget +</NavLink>
                        </div>
                    </div>
                </div>
                <div className='row cardSection'>
                        {
                            Widget.map((widget) => {
                                return (
                                    <div key={widget.id} className='col-md-3 display-inline'>
                                        <Card className='card-margin displayService'>
                                            <CardContent>
                                                <Button icon className='delete-btn' onClick={()=>deleteData(widget.id)}>
                                                    <Icon name='delete' />
                                                </Button>
                                                <CardHeader>{widget.name}</CardHeader>
                                                <CardDescription>
                                                    {widget.description}
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default Dashboard 