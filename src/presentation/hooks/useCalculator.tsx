import { useRef, useState } from 'react';

enum Operator {
  add,
  substrac,
  multiply,
  divide
}

export const useCalculator = () => {

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  }

  // Funcion delete (del)
  const deleteOperation = (numberString: string) => {
    const resetToZero: boolean = numberString.length === 1 ||
      (numberString.length === 2 && numberString.includes('-'))

    const newResult: string = resetToZero ? '0' : numberString.slice(0, -1)
    return setNumber(newResult);
  }

  // (+/-)
  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  }

  const buildNumber = (numberString: string) => {

    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {

      // Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero, no hay punto, y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // Evitar 0000.00
      if (numberString === '0' && !number.includes('.')) return;

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);

  }

  const setLastNumber = () => {
    if (number.startsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  }

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  }

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  }

  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substrac;
  }

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  }

  const calculateResult = () => {
    const num1 = Number(prevNumber);
    const num2 = Number(number);


    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.substrac:
        setNumber(`${num1 - num2}`);
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operator.divide:
        setNumber(`${num1 / num2}`);
        break;
      default:
        throw new Error('Operation not implemented');
    }

    setPrevNumber('0')
  }

  return {
    // Properties
    number,
    prevNumber,

    // Methods
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult
  }
}
