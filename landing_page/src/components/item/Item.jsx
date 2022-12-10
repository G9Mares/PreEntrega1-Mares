import React from 'react'
import { Link } from 'react-router-dom'

function Item({element}) {
  return (
    <div class="col-6 card">
        <img src={element.img} class="card-img-top" alt="" />
        <div class="card-body">
            <h5 class="card-title">{element.nombre}</h5>
            <h6 class="card-title">${element.precio}</h6>
            <Link class="btn btn-primary" to={`/itemDetail/${element.id}`}>Ver detalles</Link>
        </div>
    </div>
  )
}

export default Item