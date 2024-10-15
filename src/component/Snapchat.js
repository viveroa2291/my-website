import React from 'react';
import Lense from './Lense';
import {Collapse} from 'react-bootstrap';
import './CSS/Lense.css';
function Snapchat() {
    return (
        <Collapse in={Lense}>
            <Lense/>
        </Collapse>
    )
}

export default Snapchat;