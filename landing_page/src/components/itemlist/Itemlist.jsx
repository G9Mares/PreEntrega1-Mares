import React from 'react'
import Item from '../item/Item'

function Itemlist({items}) {
  function prueba(element) {
    return <Item key={element.id} element={element}/>
    
  }

  return (
    <div class="row">
            {items.map(prueba)}

    </div>
  )
}

export default Itemlist