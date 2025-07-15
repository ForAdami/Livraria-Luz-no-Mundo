import CompraComponent from '../components/compraComponent'

export default function CompraPage({Compra, setCompra}){
    return(
        <>
            <CompraComponent Compra={Compra} setCompra={setCompra} />
        </>
    )
}