import { useState } from 'react';

import '../styles/compra.css';
import pixIcon from '../assets/images/pixIcon.png';
import cartaocredito from '../assets/images/cartaocredito.png';
import cartaodebito from '../assets/images/cartaodebito.png';
import boleto from '../assets/images/boleto.png';

export default function CompraComponent({Carrinho, setCarrinho, Compra, setCompra }) {
    const [selecionado, setSelecionado] = useState(null)
    const [escondido, setEscondido] = useState(false)
    const [erro, setErro] = useState(false)

    const produtos = Compra.map(item => {
        const totalItem = item.preco * item.quantidade;
        const totalItemValue = Number(totalItem.toFixed(2));
        return (
            <div className="produto" key={item.id}>
                <span className="titulo">{item.titulo}</span>
                <span className="preco">Preço: R$ {item.preco.toFixed(2)}</span>
                <span className="quantidade">Qtd: {item.quantidade}</span>
                <span className="total">Total: R$ {totalItemValue.toFixed(2)}</span>
            </div>
        );
    });
    const totalGeral = Compra.map(item=>{
        return item.preco*item.quantidade
    })
    const EachItensSum = totalGeral.reduce((acc, num)=> acc+num,0)
    const totalAllItens = EachItensSum.toFixed(2) 

    function comprarFunc(){
        if(selecionado!==null){
            setEscondido(true)
            setErro(false)
            const carrinhoSemCompra = Carrinho.filter(el=>{
                if(Compra.find(item=>item.id!==el.id)){
                    return el
                }
            })
            setCompra([])
            setCarrinho([...carrinhoSemCompra])
        }else{
            setErro(true)
        }
    }

    return (
        <div className="compra">
            <section className="dados">
                <h3>Dados</h3>
                <div className="wrapper">
                    <div className="user-dados">
                        <span className="user-nome">User-Teste</span>
                        <span className="user-telefone">(85) 9 1234-5678</span>
                    </div>
                    <div className="user-endereco">
                        <span>Rua do Bobo, Nº 0</span>
                        <span>Aldeota, Fortaleza-CE, Brasil, 60195-008</span>
                    </div>
                </div>
            </section>

            <section className="produtos">
                <h3>Produtos</h3>
                <div className="lista-produtos">
                    {produtos}
                </div>
            </section>

            <section className="pagamento">
                <h3>Forma de Pagamento</h3>
                <div className="opcoes-pagamento">
                    <div className={`opcao ${selecionado=='pix'?'selecionado':''}`} onClick={()=>setSelecionado('pix')} >
                        <img src={pixIcon} alt="Pix" />
                        <span>Pix</span>
                    </div>
                    <div className={`opcao ${selecionado=='credito'?'selecionado':''}`} onClick={()=>setSelecionado('credito')}>
                        <img src={cartaocredito} alt="Cartão de Crédito" />
                        <span>Cartão de Crédito</span>
                    </div>
                    <div className={`opcao ${selecionado=='debito'?'selecionado':''}`} onClick={()=>setSelecionado('debito')}>
                        <img src={cartaodebito} alt="Cartão de Débito" />
                        <span>Cartão de Débito</span>
                    </div>
                    <div className={`opcao ${selecionado=='boleto'?'selecionado':''}`} onClick={()=>setSelecionado('boleto')}>
                        <img src={boleto} alt="Boleto Bancário" />
                        <span>Boleto Bancário</span>
                    </div>
                </div>
                <span
                className={erro?'pag-error':'hidden'}
                >Selecione a forma de pagamento! *</span>
            </section>

            <section className="resumo">
                <span
                id='totalGeral'
                className={escondido?'hidden':''}>
                    Total Geral: R$ {totalAllItens}
                </span>
                <button 
                id='botaoComprar'
                className={escondido?'hidden':''}
                onClick={()=>{
                    if(Compra.length!==0){
                        comprarFunc()
                    }
                }}>
                    Comprar
                </button>
                <span className={escondido?'':'hidden'} id='compra-pop-up'>Compra Realizada!</span>
            </section>
        </div>
    );
}
