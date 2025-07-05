import livros from '../data/livros.json';
import LivroCard from '../components/LivroCard';
import Header from '../components/Header';
import '../styles/home.css';

function Home() {
  return (
    <div className="pagina-home">
      <Header />
      <main>
        <section className="opcoes" id="opcoes">
          <h1>Vejam nossas novidades!</h1>
          <div className="opcoes-livros">
            {livros.map((livro, index) => (
              <LivroCard key={index} livro={livro} />
            ))}
          </div>
        </section>
      </main>
      <footer className="rodape">
        <div className="rodape-conteudo">
          <p>&copy; 2025 Livraria Luz no Mundo. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para inspirar sua jornada espiritual.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
