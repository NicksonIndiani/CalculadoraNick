/* eslint-disable eqeqeq */

import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState ('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }; 

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  

  const handSumNumbers = () => {

    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number (currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handMinNumbers = () => {

    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('-')
    }else{
      const min = Number(firstNumber) - Number (currentNumber);
      setCurrentNumber(String(min))
      setOperation('')
    }
  }
  const handMulNumbers = () => {

    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('*')
    }else{
      const mul = Number(firstNumber) * Number (currentNumber);
      setCurrentNumber(String(mul))
      setOperation('')
    }
  }
  const handDivNumbers = () => {

    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('/')
    }else{
      const div = Number(firstNumber) / Number (currentNumber);
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+': 
        handSumNumbers();
        break;
        case '-': 
        handMinNumbers();
        break;
        case '/': 
        handDivNumbers();
        break;
        case '*': 
        handMulNumbers();
        break;
        default: 
        break;
      }
    }
  }

  return ( 
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="/" onClick = {handDivNumbers}/>
          <Button label="*" onClick = {handMulNumbers}/>
          <Button label="-" onClick = {handMinNumbers}/>
          <Button label="+" onClick = {handSumNumbers}/>
          <Button label="C" onClick = {handleOnClear}/>
        </Row>
        <Row>
          <Button />
          <Button label="7" onClick = {() => handleAddNumber('7')}/>
          <Button label="8" onClick = {() => handleAddNumber('8')}/>
          <Button label="9" onClick = {() => handleAddNumber('9')}/>
          <Button />
        </Row>
        <Row>
          <Button />
          <Button label="4" onClick = {() => handleAddNumber('4')}/>
          <Button label="5" onClick = {() => handleAddNumber('5')}/>
          <Button label="6" onClick = {() => handleAddNumber('6')}/>
          <Button />
        </Row>
        <Row>
          <Button label="0" onClick = {() => handleAddNumber('0')}/>
          <Button label="1" onClick = {() => handleAddNumber('1')}/>
          <Button label="2" onClick = {() => handleAddNumber('2')}/>
          <Button label="3" onClick = {() => handleAddNumber('3')}/>
          <Button label="=" onClick = {handleEquals}/>
        </Row>
        
      </Content>
    </Container>


  );
}

export default App;
