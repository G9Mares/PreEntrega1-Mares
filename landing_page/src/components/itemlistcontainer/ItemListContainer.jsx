import React from 'react'
import './ItemListContainer.css'
function ItemListContainer({greeting}) {
  return (
    <div class='main'>
        <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer