import React from 'react';// Import the CSS file for styles

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="hero-section">
                <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </header>

            <section className="welcome-section">
                <h2>Bienvenido</h2>
                <p>Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.</p>
            </section>

            <section className="topics-covered">
                <h2>Temas Cubiertos</h2>
                <div className="topics-grid">
                    <div>Componentes funcionales y de clase</div>
                    <div>Uso de <strong>React hooks</strong> como <strong>useState</strong> y <strong>useEffect</strong></div>
                    <div>Creación de <strong>custom hooks</strong> como <strong>useForm</strong></div>
                    <div>Gestión de variables de estado con <strong>useState</strong></div>
                    <div>Gestión de estado global con <strong>Redux</strong></div>
                    <div>Integración de <strong>Redux</strong> con <strong>React</strong></div>
                    <div>Manejo de <strong>Formularios</strong> en <strong>React</strong></div>
                    <div>Publicando nuestra <strong>Pagina</strong> con <strong>GitHub Pages</strong></div>
                </div>
            </section>

            <section className="additional-resources">
                <h2>Recursos Adicionales</h2>
                <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
            </section>

            <footer className="footer">
                <p>© 2024 Modulo 7. USIP.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
