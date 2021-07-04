import React from 'react';
import classes from './Display.module.css'

const display = (props) =>{
    return (
        <div className={classes.Display}>{props.value}</div>
    )
};

export default display;