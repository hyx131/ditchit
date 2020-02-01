import React from 'react'
import { withRouter } from "react-router-dom"

const HomePage = ({ history, ...props }) => {
  return (
    <>
      <div>
        Home
    </div>
      <button onClick={() => history.push('/survey')}>Start</button>
    </>
  )
}

export default withRouter(HomePage)