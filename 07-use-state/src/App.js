import React from 'react'

export default function App() {
    let [count, setCount] = React.useState(0)
    let [countHistoryRows, setCountHistoryRows] = React.useState([])

    function changeCount(operator) {
        setCount(prevCount => {
            let newCount
            switch (operator) {
                case '+': 
                    newCount = prevCount + 1
                    break
                case '-': 
                    newCount = prevCount - 1
                    break
                case 'reset': 
                    newCount = 0
                    break
                default:
                    break
            }

            setCountHistoryRows(prevArr => {
                // add key to prevent the warning [Each child in a list should have a unique "key" prop.]
                const row = (
                    <tr key={new Date().getTime()}>
                        <td>{prevCount}</td>
                        <td>{operator}</td>
                        <td>{newCount}</td>
                    </tr>
                )
                return [...prevArr, row]
            })
            return newCount
        })
    }

    function clearHistory() {
        setCountHistoryRows([])
    }

    // use arrow function in onClick except using the function itself changeCount('-') to prevent calling it at screen onload
    return (
        <>
            <div className='countBlock'>
                <h1>Press + or - to change the number</h1>
                <h2 className='count'>{count}</h2>
                <div className='buttons'>
                    <button onClick={() => changeCount('-')}>-1</button>
                    <button onClick={() => changeCount('reset')}>reset</button>
                    <button onClick={() => changeCount('+')}>+1</button>
                </div>
                <div className='count-history'>
                    <h3>count history</h3>
                    <button onClick={clearHistory}>clear history</button>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th>prevCount</th>
                                <th>operation</th>
                                <th>newCount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {countHistoryRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}