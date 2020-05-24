import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

const Envelope = () => {
    
    return(
        <div className="wrapper">
            <div className="mail">
                <div className="cover"></div>
                        <Link to='/card'>
                <div className="letter">
                    <h1>
                            @
                    </h1>
                </div>
                        </Link>
            </div>
        </div>
    )
}

export default Envelope