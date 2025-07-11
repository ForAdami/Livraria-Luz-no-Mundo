import Livros from "../data/livros";

function Main(){
    const LivrosMapped = Livros.map(el=>(
        <div>
            <h1>{el.titulo}</h1>
            <span>{el.preco}</span>
        </div>
    ))
    return(
        LivrosMapped
    )
}

export default Main