import '../styles/carrinho.css'

import { useState } from 'react'
import CarrinhoItems from "../data/carrinho"



function CarrinhoComponent(){
    const [quant, setquant] = useState()
    
    const CarrinhoMapped = CarrinhoItems.map(el=>(
        <div className="carrinhoItem" key={el.id}>
            <span>{el.titulo}</span>
            <span>R$ {el.preco}</span>
            <div className="quantidadeWrapper">
                <button>-</button>
                <span>{el.quantidade}</span>
                <button>+</button>

            </div>
        </div>
    ))
    return CarrinhoMapped
}

export default CarrinhoComponent