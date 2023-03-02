import React from 'react'
import { Outlet } from 'react-router-dom';
import HomeAdmin from './HomeAdmin';
export default function Admin() {
  
    return (
        <div className='d-flex' style={{height:"100vh"}}>
            <HomeAdmin></HomeAdmin>
                <Outlet/>
            
            
        </div>

    )
}
