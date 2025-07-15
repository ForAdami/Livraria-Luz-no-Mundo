import Livros from '../data/livros.js'

const AddAoCarrinho=(id, setCarrinho)=>{
    const produto = Livros.find(el=>el.id==id)
    setCarrinho((prevCarrinho)=>{
        const jaTem = prevCarrinho.find(el=>el.id==id)

        if(jaTem){
            const novoCarrinho = prevCarrinho.map(item=>{
                if(item.id == produto.id){
                    return {...item, quantidade:item.quantidade+1}
                }else{
                    return item
                }
            })
            return novoCarrinho
        }else{
            return [...prevCarrinho, {...produto, quantidade:1}]
        }
    })
}

export default AddAoCarrinho