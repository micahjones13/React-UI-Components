import React from 'react';
import './App.css';
//component imports
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperationButton from './components/ButtonComponents/OperationButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
//number declarations
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
const clear = 'clear';
const zero = 0;
//operation declarations
const divide = '÷';
const mult = 'X';
const subtract = '-';
const add = '+';
const equals = '=';

//button class names for props
const buttonStyle = 'btn';
const action = 'action-btn';
const opBtn = 'op-btn';
//display class name
const displayClass = 'calc-display';


  return (
    <div>

    <div className = 'calc-container'>
      <CalculatorDisplay displayClass = {displayClass} text = {zero} />
      
        <div className ='row-1'>
          <ActionButton action = {action} text = {clear} />
          <OperationButton opBtn = {opBtn} text = {divide} />
        </div>
          <div className = 'row-2'>
            <NumberButton buttonStyle = {buttonStyle} text = {seven} />
            <NumberButton buttonStyle = {buttonStyle} text = {eight} />
            <NumberButton buttonStyle = {buttonStyle} text = {nine} />
            <OperationButton opBtn = {opBtn} text = {mult} />
          </div>
             <div className = 'row-3'>
                <NumberButton buttonStyle = {buttonStyle} text = {four} />
                <NumberButton buttonStyle = {buttonStyle} text = {five} />
                <NumberButton buttonStyle = {buttonStyle} text = {six} />
                <OperationButton opBtn = {opBtn} text = {subtract} />
              </div>
                <div className = 'row-4'>
                  <NumberButton buttonStyle = {buttonStyle} text = {one} />
                  <NumberButton buttonStyle = {buttonStyle} text = {two} />
                  <NumberButton buttonStyle = {buttonStyle} text = {three} />
                  <OperationButton opBtn = {opBtn} text = {add} />
                </div>
                  <div className = 'row-5'>
                    <ActionButton action = {action} text = {zero} />
                    <OperationButton opBtn = {opBtn} text = {equals} />
                    </div>
        </div>
        </div>
  );
};

export default App;