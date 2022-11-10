import React from 'react'

const Counter = ({count, handleDecrease, handleIncrease, message}) => {
  return (
    <div className="counter">
        <button className="btn" onClick={handleDecrease}>-</button>
        {message != '' && <p className="message">{message}</p>}
        <p className="count-box">{count}</p>
        <button className="btn" onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Counter