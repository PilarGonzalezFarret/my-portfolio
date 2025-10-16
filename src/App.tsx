import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVite,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask
} from 'react-icons/si';
import "./App.css";

const App = () => {
  return (
    <div className="portfolio">
      {/* Hero */}
      <header className="hero">
        <h1>Pilar González-Farret Aranda</h1>
        <p>Frontend Developer | React & TypeScript</p>
        <div className="buttons">
          <a href="#proyectos" className="btn">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn-outline">
            Contacto
          </a>
        </div>
      </header>

      {/* Sobre mí */}
      <section className="sobre-mi" id="sobre-mi">
        <h2>Sobre mí</h2>
        <p>
          Soy Pilar González-Farret, desarrolladora frontend con experiencia
          construyendo aplicaciones interactivas usando React y TypeScript. Me
          apasiona crear interfaces limpias, funcionales y accesibles que
          funcionen bien en cualquier dispositivo. Actualmente busco mi primera
          oportunidad profesional remota donde pueda aportar, aprender y crecer
          como parte de un equipo. Estoy abierta a prácticas con posibilidad de
          contratación.
        </p>
      </section>

      {/* Tecnologías */}
<section className="tecnologias" id="tecnologias">
  <h2>Tecnologías</h2>
  <div className="tecnologias-grid">
    <div className="tecnologia-item">
      <SiHtml5 size={40} color="#e34f26" />
      <span>HTML5</span>
    </div>
    <div className="tecnologia-item">
      <SiCss3 size={40} color="#1572b6" />
      <span>CSS3</span>
    </div>
    <div className="tecnologia-item">
      <SiJavascript size={40} color="#e3c81cff" />
      <span>JavaScript</span>
    </div>
    <div className="tecnologia-item">
      <SiTypescript size={40} color="#3178c6" />
      <span>TypeScript</span>
    </div>
    <div className="tecnologia-item">
      <SiReact size={40} color="#61dafb" />
      <span>React</span>
    </div>
    <div className="tecnologia-item">
      <SiVite size={40} color="#646cff" />
      <span>Vite</span>
    </div>
    <div className="tecnologia-item">
      <SiBootstrap size={40} color="#7952b3" />
      <span>Bootstrap</span>
    </div>
    <div className="tecnologia-item">
      <SiTailwindcss size={40} color="#06b6d4" />
      <span>Tailwind</span>
    </div>
    <div className="tecnologia-item">
      <SiNodedotjs size={40} color="#339933" />
      <span>Node.js</span>
    </div>
    <div className="tecnologia-item">
      <SiExpress size={40} color="#000000" />
      <span>Express</span>
    </div>
    <div className="tecnologia-item">
      <SiPython size={40} color="#3776ab" />
      <span>Python</span>
    </div>
    <div className="tecnologia-item">
      <SiFlask size={40} color="#000000" />
      <span>Flask</span>
    </div>
  </div>
</section>

      {/* Proyectos */}
      <section className="proyectos" id="proyectos">
        <h2>Proyectos</h2>
        <div className="proyectos-grid">
          {/* Proyecto 1: Contador de propinas */}
          <div className="proyecto">
            <img
              src="/images/propinas.png"
              alt="Contador de propinas"
              className="proyecto-imagen"
            />
            <h3>Contador de Propinas</h3>
            <p>
              <strong>Tecnologías:</strong> React, TypeScript, Vite
            </p>
            <p>
              Aplicación para calcular propinas y dividir cuentas entre
              personas, con diseño intuitivo y totalmente responsive.
            </p>
            <div className="proyecto-links">
              <a
                href="https://incredible-dieffenbachia-054a3a.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href="https://github.com/PilarGonzalezFarret/calculadora_propinas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código
              </a>
            </div>
          </div>

          {/* Proyecto 2: Tienda de guitarras */}
          <div className="proyecto">
            <img
              src="/images/guitarras.png"
              alt="Tienda de guitarras"
              className="proyecto-imagen"
            />
            <h3>Tienda de Guitarras</h3>
            <p>
              <strong>Tecnologías:</strong> React, TypeScript, Vite
            </p>
            <p>
              Catálogo interactivo de guitarras con enfoque en diseño visual y
              experiencia de usuario.
            </p>
            <div className="proyecto-links">
              <a
                href="https://melodious-starlight-79d513.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href="https://github.com/PilarGonzalezFarret/guitarla"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código
              </a>
            </div>
          </div>

          {/* Proyecto 3: Bitácora de actividades */}
          <div className="proyecto">
            <img
              src="/images/bitacora.png"
              alt="Bitácora de actividades"
              className="proyecto-imagen"
            />
            <h3>Bitácora de Actividades</h3>
            <p>
              <strong>Tecnologías:</strong> Python, Flask, Render
            </p>
            <p>
              CRUD para registrar y gestionar entradas diarias. Mi primer
              proyecto full-stack con backend en Python.
            </p>
            <div className="proyecto-links">
              <a
                href="https://hoy-me-atrevi.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href="https://github.com/PilarGonzalezFarret/hoy_me_atrevi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <footer className="contacto" id="contacto">
        <h2>Contacto</h2>
        <p>¿Trabajamos juntos?</p>
        <div className="redes">
          <a
            href="https://github.com/PilarGonzalezFarret"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pilar-gonz%C3%A1lez-farret-aranda-196839228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:pilar.gonzalez-farret@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
