import CompraComponent from '../components/compraComponent'

export default function CompraPage({Carrinho, setCarrinho, Compra, setCompra }){
    return(
        <>
            <CompraComponent Carrinho={Carrinho} setCarrinho={setCarrinho} Compra={Compra} setCompra={setCompra} />
        </>
    )
}