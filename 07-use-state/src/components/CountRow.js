import React from 'react'

export default function CountRow(props) {
  // add key to prevent the warning [Each child in a list should have a unique "key" prop.]
  return (
    <tr key={new Date().getTime()}>
      <td>{props.rowData.prevCount}</td>
      <td>{props.rowData.operator}</td>
      <td>{props.rowData.newCount}</td>
    </tr>
  )
}
