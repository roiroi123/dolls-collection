import React from 'react'
import Home from '../Home/Home'
import SideMenu from '../SideMenu/SideMenu'

function Container() {
    return (
        <div className="container">
            <div className="row">
            <SideMenu className="col-2" />
            <Home className="col-10"/>

            </div>
        </div>
            
    )
}

export default Container
