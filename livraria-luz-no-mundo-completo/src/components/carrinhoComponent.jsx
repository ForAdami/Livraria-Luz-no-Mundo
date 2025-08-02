import '../styles/carrinho.css'
import { Navigate, useNavigate } from 'react-router'
import { useState } from 'react'

function CarrinhoComponent({ Carrinho, setCarrinho, Compra, setCompra, Total, setTotal }) {
    const [escondido, setEscondido] = useState(false)

    function increase(el) {
        setCarrinho((prevCarrinho)=>{
            return prevCarrinho.map(item=>{
                return item.id==el.id?{...el,quantidade:item.quantidade+1}:item
            })
        })

        if(el.marked){
            setCompra((prevCompra)=>{
                return prevCompra.map(item=>{
                    return item.id==el.id?{...item,quantidade:item.quantidade+1}:item
                })
            })
        }

    }
    function decrease(el) {
        setCarrinho((prevCarrinho)=>{
            if(el.quantidade==1){
                return prevCarrinho.filter(item=>item.id!==el.id)
            }else{
                return prevCarrinho.map(item=>item.id==el.id?{...item,quantidade:item.quantidade-1}:item)
            }
        })
        
        if(el.marked){
            setCompra((prevCompra)=>{
                if(el.quantidade==1){
                    return prevCompra.filter(item=>item.id!==el.id)
                }else{
                    return prevCompra.map(item=>item.id==el.id?{...item,quantidade:item.quantidade-1}:item)
                }
            })
        }

    }
    function itemMarked(el) {
        if (!el.marked) {
            setCarrinho((prevCarrinho) => {
                prevCarrinho.find(item => item.id == el.id).marked = true
                return [...prevCarrinho]
            })
            setCompra((prevCompra) => {
                return [...prevCompra,el]
                
            })
            
            } else {
                setCarrinho((prevCarrinho) => {
                    prevCarrinho.find(item => item.id == el.id).marked = false
                    return [...prevCarrinho]
                })
                setCompra((prevCompra)=>{
                    const compraFiltered = prevCompra.filter(item => item.id !== el.id)
                    return [...compraFiltered]
            })
        }

    }

    const navigate = useNavigate()

    const CarrinhoMapped = Carrinho.map(el => (
        <div className="carrinhoItem" key={el.id}>
            <input
                type="checkbox"
                className='checkItem'
                data-id={el.id}
                checked={Compra.some(item => item.id == el.id)}
                onChange={() => { itemMarked(el) }}
            />
            <span>{el.titulo}</span>
            <span>R$ {el.preco.toFixed(2)}</span>
            <div className="quantidadeWrapper">

                <button onClick={() => decrease(el)}>-</button>

                <span className='quantidade'>{el.quantidade}</span>

                <button onClick={() => increase(el)}>+</button>

            </div>
        </div>
    ))
    if (Carrinho.length == 0) {
        return (
            <p className='noItemWarning'>Nenhum item no carrinho!</p>
        )
    } else {
        return (
            <>
                <div className="carrinhoItensContainer">
                    {CarrinhoMapped}
                </div>

                <span
                    className={escondido ? 'selecione-produto-popUp' : 'hidden'}
                >Selecione um produto!</span>

                <div className="compra-container">
                    <span className='total'>TOTAL: R$ {Total.toFixed(2)}</span>
                    <button onClick={() => {
                        if (Compra.length !== 0) {
                            setEscondido(false)
                            navigate('/compra')
                        } else {
                            setEscondido(true)
                        }
                    }
                    }>Continuar</button>
                </div>
            </>
        )
    }
}

export default CarrinhoComponent