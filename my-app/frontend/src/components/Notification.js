import React from 'react'

const Notification = ({ message, errorMessage }) =>
  (message && <div className="infoText">{message}</div>) ||
  (errorMessage && <div className="error">{errorMessage}</div>)

export default Notification
