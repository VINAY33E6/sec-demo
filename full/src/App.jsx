import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';


function Calculator() {
  const a = 20
  const b = 10

  const add = a + b
  const subtract = a - b
  const multiply = a * b
  const divide = a / b

  return (
    <div className="App">
      <h2>Calculator (Fixed Values)</h2>
      <p>First Number: {a}</p>
      <p>Second Number: {b}</p>

      <h3>Addition: {add}</h3>
      <h3>Subtraction: {subtract}</h3>
      <h3>Multiplication: {multiply}</h3>
      <h3>Division: {divide}</h3>
    </div>
  )
}

export default Calculator