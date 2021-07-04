import React from 'react';
import classes from './Key.module.css';

const key =(props) => {
    const classList=[classes.Key];
    switch(props.type){
        case 'eval':
            classList.push(classes.Eval);
            break;
        case 'clear':
            classList.push(classes.Clear);
            break;
        case 'op':
            classList.push(classes.Operation);
            break;
        default:
            classList.push();
            break;
    }
    return <button className={classList.join(' ')} onClick={props.clicked}>{props.label}</button>
};

export default key;