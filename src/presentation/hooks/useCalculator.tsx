import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  substrac = '-',
  multiply = '*',
  divide = '÷'
}

export const useCalculator = () => {

  const [formula, setFormula] = useState('')
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
    } else {
      setFormula(number);
    }

  }, [number]);

  useEffect(() => {
    const result = calculateSubResult();
    setPrevNumber(`${result}`);

  }, [formula]);

  const clean = () => {
    setFormula('')
    setNumber('0');
    setPrevNumber('0');
    lastOperation.current = undefined;
  }

  const deleteOperation = (numberString: string) => {
    const resetToZero: boolean = numberString.length === 1 ||
      (numberString.length === 2 && numberString.includes('-'))

    const newResult: string = resetToZero ? '0' : numberString.slice(0, -1)
    return setNumber(newResult);
  }

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
    calculateResult();
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

    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperation.current = undefined;
    setPrevNumber('0')
  }

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.substrac:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  }
  return {
    // Properties
    formula,
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
