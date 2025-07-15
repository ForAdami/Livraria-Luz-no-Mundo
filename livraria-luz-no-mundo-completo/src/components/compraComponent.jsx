import { useState } from 'react';

import '../styles/compra.css';
import pixIcon from '../assets/images/pixIcon.png';
import cartaocredito from '../assets/images/cartaocredito.png';
import cartaodebito from '../assets/images/cartaodebito.png';
import boleto from '../assets/images/boleto.png';

export default function CompraComponent({ Compra, setCompra }) {
    const [selecionado, setSelecionado] = useState(null)

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
            </section>

            <section className="resumo">
                {/* Aqui você pode somar os totais e mostrar o valor final */}
            </section>
        </div>
    );
}
