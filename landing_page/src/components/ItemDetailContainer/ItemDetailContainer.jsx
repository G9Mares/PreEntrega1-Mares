import React, { useEffect, useState } from 'react'
import { products } from '../../ProductsMock'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const {id} = useParams()
    console.log(id)

    const [product,setProduct] = useState({})
    useEffect(()=>{
        const productSelect = products.find(producto=>producto.id === +id)
        setProduct(productSelect)
    },[id])

  return (
    <div class="col-8 m-auto card">
        <img src={product.img} class="card-img-top" alt="" />
        <div class="card-body">
            <h5 class="card-title">{product.nombre}</h5>
            <h6 class="card-title">${product.precio}</h6>
            <p class="card-text">{product.descripcion}</p>
        </div>
    </div>
  )
}

export default ItemDetailContainer