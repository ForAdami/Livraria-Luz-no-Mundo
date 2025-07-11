import { useCarrinho } from '../context/CarrinhoContext';
import Header from '../components/Header';
import '../styles/carrinho.css';

function CarrinhoPage() {
  const { carrinho, removerDoCarrinho, limparCarrinho, total } = useCarrinho();

  return (
    <div className="pagina-carrinho">
      <Header />
      <main className="carrinho-container">
        <h2>Seu Carrinho</h2>
        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <>
            <ul className="lista-carrinho">
              {carrinho.map((item, index) => (
                <li key={index} className="item-carrinho">
                  <img src={item.imagem} alt={item.titulo} />
                  <div>
                    <h4>{item.titulo}</h4>
                    <p>R$ {item.preco.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removerDoCarrinho(index)}>Remover</button>
                </li>
              ))}
            </ul>
            <div className="carrinho-total">
              <h3>Total: R$ {total.toFixed(2)}</h3>
              <button onClick={limparCarrinho} className="btn-limpar">Esvaziar Carrinho</button>
              <button className="btn-finalizar">Finalizar Compra</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CarrinhoPage;
