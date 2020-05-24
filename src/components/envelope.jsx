import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
// import {GiClick} from 'react-icons/gi'

const Envelope = () => {
    
    return(
        <div className="wrapper">
            <div className="mail">
                <div className="cover"></div>
                <div className="letter">
                    <h1>
                        <Link to='/card'>
                            <div className="box">
                                <span style={{"--i":1}}></span>
                                <span style={{"--i":2}}></span>
                                <span style={{"--i":3}}></span>
                                <span style={{"--i":4}}></span>
                                <span style={{"--i":5}}></span>
                            </div>
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Envelope