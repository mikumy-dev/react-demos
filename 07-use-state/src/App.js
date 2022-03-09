import React from 'react'
import ButtonsClickCounts from './components/ButtonsClickCounts'
import CountHistory from './components/CountHistory'
import CountRow from './components/CountRow'

export default function App() {
  let [count, setCount] = React.useState(0)
  let [countHistoryRows, setCountHistoryRows] = React.useState([])
  let [clickCount, setClickCount] = React.useState({
    plusButtonClickCount: 0,
    minusButtonClickCount: 0,
    resetButtonClickCount: 0,
  })

  function changeCount(operator) {
    changeCountFun(operator, setCount, setCountHistoryRows, setClickCount)
  }

  function clearHistory() {
    setCountHistoryRows([])
  }

  // use arrow function in onClick except using the function itself changeCount('-') to prevent calling it at screen onload
  return (
    <div className="countBlock">
      <h1>Press + or - to change the number</h1>
      <h2 className="count">{count}</h2>
      <div className="buttons">
        <button onClick={() => changeCount('-')}>-1</button>
        <button onClick={() => changeCount('reset')}>reset</button>
        <button onClick={() => changeCount('+')}>+1</button>
      </div>
      <ButtonsClickCounts clickCount={clickCount} />
      <CountHistory
        clearHistory={clearHistory}
        countHistoryRows={countHistoryRows}
      />
    </div>
  )
}

function changeCountFun(
  operator,
  setCount,
  setCountHistoryRows,
  setClickCount
) {
  setCount((prevCount) => {
    let newCount
    switch (operator) {
      case '+':
        newCount = prevCount + 1
        setClickCount((prevClickCount) => {
          return {
            ...prevClickCount,
            plusButtonClickCount: prevClickCount.plusButtonClickCount + 1,
          }
        })
        break
      case '-':
        newCount = prevCount - 1
        setClickCount((prevClickCount) => {
          return {
            ...prevClickCount,
            minusButtonClickCount: prevClickCount.minusButtonClickCount + 1,
          }
        })
        break
      case 'reset':
        newCount = 0
        setClickCount((prevClickCount) => {
          return {
            ...prevClickCount,
            resetButtonClickCount: prevClickCount.resetButtonClickCount + 1,
          }
        })
        break
      default:
        break
    }

    setCountHistoryRows((prevArr) => {
      return [
        ...prevArr,
        <CountRow
          key={new Date().getTime()}
          rowData={{ prevCount, operator, newCount }}
        />,
      ]
    })
    return newCount
  })
}
