import React from 'react'

const Instastory = ({image,id,name}) => {
  return (
    <div className="instastory">
        <h5>{id}</h5>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Instastory