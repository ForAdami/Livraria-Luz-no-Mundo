import '../styles/carrinho.css'

function CarrinhoComponent({Carrinho,setCarrinho,Compra, setCompra, Total, setTotal}){
    
    function attCompra(el){
        setCompra((prevCompra)=>{
            const jaTem = prevCompra.find(item=>item.id==el.id)
            if(jaTem){
                return Carrinho
            }else{
                return [...prevCompra]
            }
        })

    }

    function increase(el){
        const prev= [...Carrinho]
        prev.find(i=>i==el).quantidade +=1
        setCarrinho(prev)
        attCompra(el)
    }
    function decrease(el){
        const prev= [...Carrinho]
        if(prev.find(e=>e.id==el.id).quantidade==1){
            alert('vc ira apagar o item...... crtz?')
            setCarrinho(prev.filter(item=>item.id!==el.id))
            setCompra(Compra.filter(item=>item.id!==el.id))
        }else{
            prev.find(i=>i==el).quantidade -=1
            setCarrinho(prev)
            attCompra(el)
        }
    }


    function itemMarked(event, el){
        if(event.target.checked){
            setCompra([...Compra,el])
        }else{
            setCompra(Compra.filter(item=>item.id!==el.id))
        }
    }


    const CarrinhoMapped = Carrinho.map(el=>(
        <div className="carrinhoItem" key={el.id}>
            <input 
                type="checkbox"
                className='checkItem'
                data-id={el.id} 
                checked={Compra.some(item=>item.id==el.id)} 
                onChange={(event)=>{itemMarked(event, el)}}
            />
            <span>{el.titulo}</span>
            <span>R$ {el.preco}</span>
            <div className="quantidadeWrapper">

                <button onClick={()=>decrease(el)}>-</button>

                <span className='quantidade'>{el.quantidade}</span>
                
                <button onClick={()=>increase(el)}>+</button>

            </div>
        </div>
    ))
    if(Carrinho.length==0){
        return (
            <p className='noItemWarning'>Nenhum item no carrinho!</p>
        )
    }else{
        return (
            <>
            <div className="carrinhoItensContainer">
                {CarrinhoMapped}
            </div>
            <div className="compra-container">
                <span className='total'>TOTAL: R$ {Total}</span>
                <button>Continuar</button>
            </div>
            </>
        )
    }
}

export default CarrinhoComponent