import React, { Component } from 'react';
import Display from '../../component/Display/Display';
import Key from '../../component/Key/Key';
import classes from './Calculator.module.css';

class Calculator extends Component {

    state = {
        pressed: null,
        expression: ' ',
        displayValue: ' '
    };

    keys = [{
        displayValue: "C",
        value: "C",
        type: 'clear'
    }, {
        displayValue: "(",
        value: "(",
        type: 'op'
    }, {
        displayValue: "%",
        value: "%",
        type: 'op'
    }, {
        displayValue: ")",
        value: ")",
        type: 'op'
    }, {
        displayValue: "7",
        value: "7",
        type: 'num'
    },
    {
        displayValue: "8",
        value: "8",
        type: 'num'
    },
    {
        displayValue: "9",
        value: "9",
        type: 'num'
    }, {
        displayValue: "x",
        value: "*",
        type: 'op'
    },
    {
        displayValue: "4",
        value: "4",
        type: 'num'
    },
    {
        displayValue: "5",
        value: "5",
        type: 'num'
    },
    {
        displayValue: "6",
        value: "6",
        type: 'num'
    },
    {
        displayValue: "-",
        value: "-",
        type: 'op'
    },
    {
        displayValue: "1",
        value: "1",
        type: 'num'
    }, {
        displayValue: "2",
        value: "2",
        type: 'num'
    }, {
        displayValue: "3",
        value: "3",
        type: 'num'
    },
    {
        displayValue: "+",
        value: "+",
        type: 'op'
    },
    {
        displayValue: ".",
        value: ".",
        type: 'dot'
    },
    {
        displayValue: "0",
        value: "0",
        type: 'num'
    },
    {
        displayValue: "÷",
        value: "/",
        type: 'op'
    },
    {
        displayValue: "=",
        value: "=",
        type: 'eval'
    }];

    onKeyPress = (event, displayValue, value) => {

    
        this.setState((state, prop) => {
            let finalDisplayValue = state.displayValue + displayValue;
            let finalExpression = state.expression + value;
            if (value === '=') {
                try{
                finalExpression = eval(state.expression);
                finalDisplayValue = finalExpression;
                }
                catch(error){
                    alert('Faulty Expression');
                    finalExpression = ' ';
                    finalDisplayValue = ' ';
                }
            }
            if(value === 'C'){
                finalExpression = ' ';
                finalDisplayValue = ' ';
            }
            return {
                expression: finalExpression,
                displayValue: finalDisplayValue
            };
        });
    
    }

    render() {
        let keys = this.keys.map(key => (
            <Key label={key.displayValue}
            key={key.value}
                clicked={(event) => this.onKeyPress(event, key.displayValue, key.value)}
                value={key.value}
                type={key.type} />
        ));

        return (
            <div className={classes.Calculator}>
                <Display
                    value={this.state.displayValue} />
                {keys}
            </div>
        )
    }
}

export default Calculator;