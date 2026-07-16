
import { Link } from 'react-router-dom'

// Iconos de redes sociales.
import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
} from 'react-icons/fa'


// ===============================
// COMPONENTE FOOTER
// Pie de página con navegación y redes sociales.
// ===============================

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                {/* Identidad de la tienda */}
                <div className="footer-brand">

                    <Link to="/" className="footer-logo">

                        <span className="logo-icon">
                            TC
                        </span>

                        <span>Tienda Cool</span>

                    </Link>

                    <p>
                        Moda urbana, cómoda y moderna para mujer,
                        hombre y niños.
                    </p>

                </div>


                {/* Navegación */}
                <div className="footer-column"> <h3>Navegación</h3>

                    <Link to="/"> Inicio</Link>

                    <Link to="/category/mujer"> Mujer</Link>

                    <Link to="/category/hombre"> Hombre</Link>

                    <Link to="/category/ninos"> Niños</Link>

                    <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                </div>

                {/* Redes sociales FOOTER*/}

                <div className="footer-column">

                    <h3>Seguinos</h3>

                    <p> Encontranos en nuestras redes sociales. </p>

                    <div className="social-links">

                        <a
                            href="https://wa.me/+541133445566"
                            target="_blank" rel="noreferrer" aria-label="WhatsApp"
                            className="social-link whatsapp"> <FaWhatsapp />
                        </a>

                        {/* Reemplazá el enlace por tu Facebook real */}
                        <a
                            href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-link facebook"> <FaFacebookF />
                        </a>

                        <a
                            href="https://www.instagram.com/" target="_blank"
                            rel="noreferrer" aria-label="Instagram" className="social-link instagram">
                            <FaInstagram />
                        </a>

                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <p>
                    © 2026 Tienda Cool. Todos los derechos reservados.
                </p>
            </div>

        </footer>
    )
}


// Exporta el componente.
export default Footer