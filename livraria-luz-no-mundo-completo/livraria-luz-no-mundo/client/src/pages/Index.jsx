import { Link } from 'react-router-dom';
import '../styles/global.css';

function Index() {
  return (
    <div className="pagina-index">
      <header className="logo-container">
        <img src="/img/logo.png" alt="Logomarca da Livraria" />
        <h1>Livraria Luz no Mundo</h1>
      </header>
      <main className="menu-central">
        <Link to="/home" className="btn">Biblioteca</Link>
      </main>
    </div>
  );
}

export default Index;
