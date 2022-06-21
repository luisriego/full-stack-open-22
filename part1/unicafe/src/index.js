import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(average + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage(average - 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleClickGood} />
      <Button text="neutral" handleClick={handleClickNeutral} />
      <Button text="bad" handleClick={handleClickBad} />
      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {average/total}</p>
      <p>positive: {good /total * 100} %</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
)
