import { useState } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

const Calculator = () => {
  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState()
  const [operation, setOperation] = useState()

  const clear = () => {
    setNum(0)
    setOldNum(0)
  }

  const operatorHandler = operation => {
    setOperation(operation)
    setOldNum(num)
    setNum(0)
  }

  const digit = n => {
    if (n === '.' && num.includes('.')) {
      return
    }
    if (num === 0) {
      setNum(n)
    } else {
      setNum(num + n)
    }
  }

  const compute = () => {
    if (operation === '+') {
      setNum(parseFloat(oldNum) + parseFloat(num))
    }
    if (operation === '-') {
      setNum(parseFloat(oldNum) - parseFloat(num))
    }
    if (operation === '*') {
      setNum(parseFloat(oldNum) * parseFloat(num))
    }
    if (operation === '/') {
      setNum(parseFloat(oldNum) / parseFloat(num))
    }
  }

  return (
    <div className="calculator">
      <Display value={num} />
      <Button label="AC" click={clear} triple />
      <Button label="/" click={operatorHandler} operation />
      <Button label="7" click={digit} />
      <Button label="8" click={digit} />
      <Button label="9" click={digit} />
      <Button label="*" click={operatorHandler} operation />
      <Button label="4" click={digit} />
      <Button label="5" click={digit} />
      <Button label="6" click={digit} />
      <Button label="-" click={operatorHandler} operation />
      <Button label="1" click={digit} />
      <Button label="2" click={digit} />
      <Button label="3" click={digit} />
      <Button label="+" click={operatorHandler} operation />
      <Button label="0" click={digit} double />
      <Button label="." click={digit} />
      <Button label="=" click={compute} operation />
    </div>
  )
}

export default Calculator
