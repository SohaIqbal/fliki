import React from 'react'

function Work({title , children}) {
  return (
    <div>

       <p>{title}</p>
      <div className="card-content">{children}</div>
    </div>
  )
}

export default Work
