import React from 'react'

export default function ButtonsClickCounts(props) {
  return (
    <div className="buttonsClickCounts">
      <h3>buttons' click count</h3>
      <table>
        <thead>
          <tr>
            <th>click -1</th>
            <th>click reset</th>
            <th>click +1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.clickCount.minusButtonClickCount}</td>
            <td>{props.clickCount.resetButtonClickCount}</td>
            <td>{props.clickCount.plusButtonClickCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
