import Livros from "../data/livros";
import AddAoCarrinho from "../logic/addCarrinho";
import '../styles/livros.css'

function Main({setCarrinho}){
    const LivrosMapped = Livros.map(el=>(
        <div key={el.id} className="livro-card">
          <img src={el.imagem} alt={el.titulo} className="livro-imagem" />
          <div className="livro-info">
            <h4 className="livro-titulo">{el.titulo}</h4>
            <p className="livro-preco">R$ {el.preco.toFixed(2)}</p>
            <button onClick={() => AddAoCarrinho(el.id, setCarrinho)}>Adicionar ao Carrinho</button>
          </div>
        </div>
    ))
    return(
        LivrosMapped
    )
}

export default Main