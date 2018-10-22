import React from 'react'
import "./index.css"

export default ({logout}) => {
  return (
    <div onClick={logout} className="btn-logout">
      <i className="fas fa-sign-out-alt"></i>
      <span>Logout</span>
    </div>
  )
}
