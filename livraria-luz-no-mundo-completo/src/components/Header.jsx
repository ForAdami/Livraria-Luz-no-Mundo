import { Link } from 'react-router-dom'

import '../styles/header.css'

import logo from '../assets/images/logo.png'
import lupa from '../assets/images/lupa.png'
import carrinhob from '../assets/images/carrinhob.png'


function Header(){
    return(
    <header>
        <div className="search">
            <div className="search-top">
                <div className="logo left-nav">
                    <img src={logo} alt="logo da nossa livraria" />
                    <Link to={'/'}>
                        <h1>Livraria Luz no Mundo</h1>
                    </Link>
                </div>
                <form action="#">
                    <div className="search-box">
                        <label htmlFor="iteste">Faça sua Pesquisa:</label>
                        <input type="text" name="teste" id="iteste" list="lteste" placeholder="Pesquise aqui" />
                        <datalist id="lteste">
                            <option value="Bíblia Sagrada | NTLH | Salvos Pela Graça |"></option>
                            <option value="Retórica E Teologia Nas Cartas De Paulo"></option>
                            <option value="Forte - Devocionais Para Uma Vida Poderosa"></option>
                            <option value="O Cristão Na Teologia De Paulo"></option>
                            <option value="O Deus Que Destrói Sonhos"></option>
                            <option value="O Peregrino"></option>
                            <option value="Até Que Nada Mais Importe"></option>
                            <option value="Pecadores Nas Mãos De Um Deus Irado E Outros Sermões"></option>
                        </datalist>
                    </div>
                    <div className="search-img mid-nav">
                        <img src={lupa} alt="icone da caixa de pesquisa" />
                    </div>
                </form>
                <div className="right-nav">
                    <div className="cart">
                        <Link to={'/carrinho'}>
                            <img src={carrinhob} alt="icone do carrinho de compras" />
                        </Link>
                    </div>
                    <div className="account">
                        <div className="account-bt"><span>Entrar</span></div>
                        <div className="account-bt"><span>Registrar</span></div>
                    </div>
                </div>
            </div>
            <div className="search-bottom">
                <nav>
                    <ul>
                        <li><a href="#">Biblioteca</a></li>
                        <li><a href="#">Mais Vendidos</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Novidades</a></li>
                    </ul>
                </nav>
                <p style={{color: "#583d01"}}>Frete <span>Grátis</span> na Primeira Compra!</p>
            </div>
        </div>
    </header>
    )
}

export default Header
