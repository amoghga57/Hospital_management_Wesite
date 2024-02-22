import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import "./nav.css"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Navigation = () => {

     const [OpenClose, setOpenClose] = useState(true)

     const navBar = useRef(null)

     let openCloseButt = () => {
          if (OpenClose) {
               navBar.current.style.display = "flow-root"
               setOpenClose(false)
          } else {
               navBar.current.style.display = "none"
               setOpenClose(true)
          }
     }

     return (
          <div id="outerBox" >
               <div id="InnerBox">
                    <h3>Hospital</h3>
                    <Link to="/" >Home</Link>
                    <Link to="/patient/create"> Patient +</Link>
                    <Link to="/patient/details">Details</Link>
                    <button onClick={openCloseButt}><FontAwesomeIcon icon={faBars} /></button>
               </div>
               <div id="burgerButtShow" ref={navBar} > 
                    <div id="burgerButt">
                         <Link to="/" >Home</Link>
                         <Link to="/patient/create"> Patient +</Link>
                         <Link to="/patient/details">Details</Link>
                    </div>
               </div>
          </div>
     )
}

export default Navigation