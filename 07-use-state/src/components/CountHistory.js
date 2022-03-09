import React from 'react'

export default function CountHistory(props) {
  return (
    <div className="count-history">
      <h3>count history</h3>
      <button onClick={props.clearHistory}>clear history</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>prevCount</th>
            <th>operation</th>
            <th>newCount</th>
          </tr>
        </thead>
        <tbody>{props.countHistoryRows}</tbody>
      </table>
    </div>
  )
}
