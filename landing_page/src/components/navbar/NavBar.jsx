import React from 'react'
import CartWidget from '../cartwidget/CartWidget'


function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="https://template.canva.com/EAFGnCeDmQk/4/0/400w-SrWSgbl3lgI.jpg" width={100} alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto me-4 mb-2 mb-md-0">
                
                <li class="nav-item">
                    <a class="nav-link" href="#">Dulces</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Saladas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Bebidas</a>
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