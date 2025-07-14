
import CarrinhoItems from "../data/carrinho";
import CarrinhoComponent from "../components/carrinhoComponent";

function CarrinhoPage({Carrinho,setCarrinho,Compra, setCompra, Total, setTotal}){
    return(
        <>
            <CarrinhoComponent Carrinho={Carrinho} setCarrinho={setCarrinho} Compra={Compra} setCompra={setCompra} Total={Total} setTotal={setTotal} />
        </>
    )
}

export default CarrinhoPage