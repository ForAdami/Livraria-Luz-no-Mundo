import '../styles/carrinho.css'

import { useState } from 'react'
import CarrinhoItems from "../data/carrinho"


function CarrinhoComponent(){
    const [Carrinho,setCarrinho] = useState(CarrinhoItems)
    
    
    function increase(el){
        const prev= [...Carrinho]
        prev.find(i=>i==el).quantidade +=1
        setCarrinho(prev)
    }
    function decrease(el){
        const prev= [...Carrinho]
        const index = Carrinho.indexOf(el)
        if(prev.find(e=>e==el).quantidade==1){
            alert('vc ira apagar o item...... crtz?')
            CarrinhoItems.splice(index,1)
            console.log(CarrinhoItems)
            setCarrinho(prev.filter(e=>e.id!==el.id))
        }else{
            prev.find(i=>i==el).quantidade -=1
    
            setCarrinho(prev)
        }
    }


    const CarrinhoMapped = Carrinho.map(el=>(
        <div className="carrinhoItem" key={el.id}>
            <span>{el.titulo}</span>
            <span>R$ {el.preco}</span>
            <div className="quantidadeWrapper">

                <button onClick={()=>decrease(el)}>-</button>

                <span>{el.quantidade}</span>
                
                <button onClick={()=>increase(el)}>+</button>

            </div>
        </div>
    ))
    return CarrinhoMapped
}

export default CarrinhoComponent