import React from 'react'
import "./index.css"

export default ( {login} ) => {
  return (
    <div onClick={login} className="btn-fb">
      <i className="fab fa-facebook-f"></i>
      <span>Login</span>
    </div>
  )
}
