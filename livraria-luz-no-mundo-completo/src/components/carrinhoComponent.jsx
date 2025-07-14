import '../styles/carrinho.css'

import { useState } from 'react'
import CarrinhoItems from "../data/carrinho"

function CarrinhoComponent(){
    const [Carrinho,setCarrinho] = useState(CarrinhoItems)
    let valores = Carrinho.map(el=>el.preco*el.quantidade)
    let valoresfixed = valores.map(el=>Number(el.toFixed(2)))
    let total = valoresfixed.reduce((Acc,num)=>Acc+num,0)
    
    function comprar(){
        setCarrinho([])
        CarrinhoItems.splice(0)
        alert('Compra Realizada')
    }

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

                <span className='quantidade'>{el.quantidade}</span>
                
                <button onClick={()=>increase(el)}>+</button>

            </div>
        </div>
    ))
    if(CarrinhoItems.length==0){
        return (
            <p className='noItemWarning'>Nenhum item no carrinho!</p>
        )
    }else{
        return (
            <>
            <div className="carrinhoItensContainer">{CarrinhoMapped}</div>
            <div className="compra-container">
                <span className='total'>TOTAL: R$ {total.toFixed(2)}</span>
                <button onClick={comprar}>Comprar</button>
            </div>
            </>
        )
    }
}

export default CarrinhoComponent