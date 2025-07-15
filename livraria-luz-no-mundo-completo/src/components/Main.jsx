import Livros from "../data/livros";
import AddAoCarrinho from "../logic/addCarrinho";

function Main({setCarrinho}){
    const LivrosMapped = Livros.map(el=>(
        <div key={el.id}>
            <h1>{el.titulo}</h1>
            <span>{el.preco}</span>
            <button onClick={()=>AddAoCarrinho(el.id, setCarrinho)}>Adicinar ao Carrinho</button>
        </div>
    ))
    return(
        LivrosMapped
    )
}

export default Main