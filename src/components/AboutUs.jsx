// ===============================
// PÁGINA SOBRE NOSOTROS
// Presenta la identidad y propuesta de Tienda Cool.
// ===============================

function AboutUs() {
    return (
        <main className="about-container">

            {/* Encabezado principal */}
            <section className="about-hero">

                <p className="about-eyebrow">
                    Conocé Tienda Cool
                </p>

                <h1>Moda para expresarte todos los días</h1>

                <p>
                    Tienda Cool nació con la idea de acercarte prendas modernas,
                    cómodas y versátiles para mujer, hombre y niños.
                </p>

            </section>


            {/* Información principal */}
            <section className="about-content">

                <article className="about-card">
                    <span className="about-number">01</span>

                    <h2>Nuestra propuesta</h2>

                    <p>
                        Seleccionamos prendas pensadas para acompañarte en distintos
                        momentos, combinando comodidad, diseño y estilo urbano.
                    </p>
                </article>


                <article className="about-card">
                    <span className="about-number">02</span>

                    <h2>Nuestra misión</h2>

                    <p>
                        Crear una experiencia de compra simple, dinámica y accesible,
                        para que cada persona pueda encontrar su propio estilo.
                    </p>
                </article>


                <article className="about-card">
                    <span className="about-number">03</span>

                    <h2>Nuestro compromiso</h2>

                    <p>
                        Brindar una tienda clara, segura y fácil de usar, con productos
                        para toda la familia y atención cercana.
                    </p>
                </article>

            </section>


            {/* Mensaje final */}
            <section className="about-highlight">

                <div>
                    <p className="about-eyebrow">
                        Tu estilo, tu elección
                    </p>

                    <h2>Gracias por elegir Tienda Cool</h2>

                    <p>
                        Esperamos que disfrutes recorriendo nuestras colecciones
                        tanto como nosotros disfrutamos creando esta tienda.
                    </p>
                </div>

            </section>

        </main>
    )
}


export default AboutUs