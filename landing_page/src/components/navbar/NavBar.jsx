import React from 'react'
import CartWidget from '../cartwidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
        <Link class="navbar-brand" to="/"><img src="https://template.canva.com/EAFGnCeDmQk/4/0/400w-SrWSgbl3lgI.jpg" width={100} alt="" /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto me-4 mb-2 mb-md-0">
                
                <li class="nav-item">
                    <Link class="nav-link" to="/Categoria/Antojitos">Antojitos</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/Categoria/Postres">Postres</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/Categoria/Bebidas">Bebidas</Link>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto me-3 mb-2 mb-md-0">
                
                <li class="nav-item">
                    <CartWidget/>
                </li>
                
            </ul>
        </div>
    </div>
</nav>
  )
}

export default NavBar