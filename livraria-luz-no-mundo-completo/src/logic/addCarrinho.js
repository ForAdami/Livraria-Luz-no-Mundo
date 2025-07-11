import Livros from '../data/livros.js'
import CarrinhoItems from '../data/carrinho.js'

const AddAoCarrinho=(id)=>{
    const produto = Livros.find(el=>el.id==id)

    if(CarrinhoItems.find(el=>el.id==id)){
        alert('tem')
        CarrinhoItems.find(el=>el.id==id).quantidade +=1
        return console.log(CarrinhoItems)
    }else{
        alert('nao tem')
        return CarrinhoItems.push({...produto,quantidade:1})
    }
}

export default AddAoCarrinho