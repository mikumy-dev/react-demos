import React from 'react'

export default function App() {
    let [count, setCount] = React.useState(0)

    function addCount() {
        setCount(prevCount => prevCount + 1)
    }

    function minusCount() {
        setCount(prevCount => prevCount - 1)
    }

    function resetCount() {
        setCount(0)
    }

    return (
        <div className='countBlock'>
            <h1>Press + or - to change the number</h1>
            <h2 className='count'>{count}</h2>
            <div className='buttons'>
                <button onClick={minusCount}>-1</button>
                <button onClick={resetCount}>reset</button>
                <button onClick={addCount}>+1</button>
            </div>
        </div>
    )
}