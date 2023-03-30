import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="not-found">
        <h1>Oooopss</h1>
        <p>That page cannot be found!</p>
        <Link class ="my-link" to="/">Back to the homepage...</Link>
    </div>
  )
}

export default NotFound