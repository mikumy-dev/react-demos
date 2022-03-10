import React from 'react'
import Box from './components/Box'
import boxes from './boxes'
import BoxRow from './components/BoxRow'

export default function App() {
  let boxRows = []

  for (let i = 0; i < boxes.length; i += 3) {
    boxRows.push([
      <Box key={boxes[i].id} on={boxes[i].on} />,
      <Box key={boxes[i + 1].id} on={boxes[i + 1].on} />,
      <Box key={boxes[i + 2].id} on={boxes[i + 2].on} />,
    ])
  }

  let boxRowElems = boxRows.map((boxRow, idx) => {
    return <BoxRow key={idx} boxElems={boxRow} />
  })

  return <>{boxRowElems}</>
}
