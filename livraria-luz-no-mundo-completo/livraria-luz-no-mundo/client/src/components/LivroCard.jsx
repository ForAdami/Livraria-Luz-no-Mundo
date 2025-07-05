import { useCarrinho } from '../context/CarrinhoContext';
import '../styles/livroCard.css';

function LivroCard({ livro }) {
  const { adicionarAoCarrinho } = useCarrinho();

  return (
    <div className="livros">
      <img src={livro.imagem} alt={livro.titulo} />
      <div className="livro-info">
        <span className="livro-titulo">{livro.titulo}</span>
        <p className="livro-descricao">{livro.descricao}</p>
        <h3 className="livro-preco">R$ {livro.preco.toFixed(2)}</h3>
        <button className="adicionar-no-carrinho" onClick={() => adicionarAoCarrinho(livro)}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default LivroCard;
