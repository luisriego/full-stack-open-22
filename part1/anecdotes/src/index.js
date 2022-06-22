import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))

//   const points = []

//   const copy = [...points]
// // increment the value in position 2 by one
//   copy[2] += 1

  const generateRandom = (max) =>{
    return Math.floor(Math.random() * max);
  }

  const maxValue = () => {
    const high = Math.max(...votes)
    const index = votes.indexOf(high);
    console.log(index)
    return index
  }

  const voteAnecdote = (anecdote) => {
    console.log(anecdote)
    const copy = [...votes]
// increment the value in position 2 by one
    copy[anecdote] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[(selected)]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => voteAnecdote(selected)}>vote</button>
      <button onClick={() => setSelected(generateRandom(anecdotes.length))}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[(maxValue())]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App anecdotes={anecdotes} />
)