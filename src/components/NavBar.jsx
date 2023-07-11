import { FaOpencart } from "react-icons/fa";
export const NavBar = ({ children }) => {
    return (
        <div>
            <h1>
                Apple Service V.B.
            </h1>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Productos y Servicios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Liberación</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Servicio Técnico</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {children}            
        </div>
    )
}

export const CartWidget = () => {
    return (
        <FaOpencart style={{fontSize: 50}}/>        
    )
}