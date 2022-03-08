import React from 'react'

export default function App() {
    let [count, setCount] = React.useState(0)
    let [countHistoryRows, setCountHistoryRows] = React.useState([])

    function addCount() {
        setCount(prevCount => {
            setCountHistoryRows(prevArr => {
                const row = (
                    <tr>
                        <td>{prevCount}</td>
                        <td>+</td>
                        <td>{prevCount + 1}</td>
                    </tr>
                )
                return [...prevArr, row]
            })
            return prevCount + 1
        })
    }

    function minusCount() {
        setCount(prevCount => {
            setCountHistoryRows(prevArr => {
                const row = (
                    <tr>
                        <td>{prevCount}</td>
                        <td>-</td>
                        <td>{prevCount - 1}</td>
                    </tr>
                )
                return [...prevArr, row]
            })
            return prevCount - 1
        })
    }

    function resetCount() {
        setCount(prevCount => {
            setCountHistoryRows(prevArr => {
                const row = (
                    <tr>
                        <td>{prevCount}</td>
                        <td>reset</td>
                        <td>0</td>
                    </tr>
                )
                return [...prevArr, row]
            })
            return 0
        })
    }

    return (
        <>
            <div className='countBlock'>
                <h1>Press + or - to change the number</h1>
                <h2 className='count'>{count}</h2>
                <div className='buttons'>
                    <button onClick={minusCount}>-1</button>
                    <button onClick={resetCount}>reset</button>
                    <button onClick={addCount}>+1</button>
                </div>
            <div className='count-history'>
                <h4>count history</h4>
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