import React from 'react'

export default function Box(props) {
  const [on, setOn] = React.useState(props.on)

  const style = {
    backgroundColor: on ? '#3BE13E' : 'white',
  }

  function toggle() {
    setOn((prevOn) => !prevOn)
  }

  return <div style={style} className="box" onClick={toggle}></div>
}
