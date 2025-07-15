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
                        <input
                            type="text"
                            name="teste"
                            id="iteste"
                            list="lteste"
                            placeholder="Pesquise aqui"
                        />
                        <datalist id="lteste">
                            <option value="eu, minha ansiedade e Deus | abner bueno" />
                            <option value="biblia de estudo temática | mulheres da biblia" />
                            <option value="biblia para minecrafters | explorando a palavra de Deus a bloco | capa 2" />
                            <option value="descobrindo sua identidade em cristo | charles spurgeon" />
                            <option value="devocional quarto de guerra | isabelle s. alves" />
                            <option value="40 dias cheios do espirito santo | kennedy carvalho" />
                            <option value="biblia sagrada | super premium | nvi" />
                            <option value="salmos e provérbios para a vida diária" />
                            <option value="vencendo a ansiedade com deus pai | charles spurgeon" />
                            <option value="devocional um jovem segundo o coracao de Deus" />
                            <option value="principios de pregacao para pastores e obreiros" />
                            <option value="devocional a forja | isabelle s. alves" />
                            <option value="eu, minhas lutas internas e deus | identificando as lutas emocionais e espirituais" />
                            <option value="devocional mães de fé | roberta sara" />
                            <option value="demonios da familia | como quebrar as correntes da opressao espiritual no lar" />
                            <option value="marta, maria e o equilibrio espiritual - como as escolhas diárias de serviço moldam nossa vida e espiritualidade" />
                            <option value="biblia para minecrafts | explorando a palavra de Deus bloco a bloco" />
                            <option value="devocional | 40 dias com divertidamente | um jornada biblica através das emocoes" />
                            <option value="rompendo a zona de conforto | equipe teologico penkal" />
                            <option value="as 5 linguagens do amor segundo a biblia - uma jornada de amor e conexao na biblia" />
                            <option value="devocional saradas para sarar | roberta sara" />
                            <option value="juventude transformada | principios de vida para a juventude cristã - kaylon" />
                            <option value="o vicio de agradar a todos: viva para deus e nao para o aplauso dos homens" />
                            <option value="desconstruindo o meu eu | roberta sara" />
                            <option value="tempo do crescimento | roberta sara" />
                            <option value="mais forte que a sua dor | roberta sara" />
                            <option value="ciclos emocionais viciantes | roberta sara" />
                            <option value="biblia sagrada | king james | letra normal | capa dura | fé | slim" />
                            <option value="mulheres enraizadas - penkal" />
                            <option value="educando filhos para a glória de Deus - j.c ryle" />
                            <option value="o propósito da familia - j. wesley e R. baxter" />
                            <option value="homens de honra | charles spurgeon | j.c. ryle" />
                            <option value="biblia sagrada | ntlh | salvos pela graça" />
                            <option value="retórica e teologia nas cartas de paulo" />
                            <option value="forte - devocionais para uma vida poderosa" />
                            <option value="o cristão na teologia de paulo" />
                            <option value="o deus que destrói sonhos" />
                            <option value="o peregrino" />
                            <option value="até que nada mais importe" />
                            <option value="pecadores nas mãos de um deus irado" />
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
                        <li><Link to={'/'}>Biblioteca</Link></li>
                        <li><Link to={'/*'}>Mais Vendidos</Link></li>
                        <li><Link to={'/*'}>Ofertas</Link></li>
                        <li><Link to={'/*'}>Novidades</Link></li>
                    </ul>
                </nav>
                <p style={{color: "#583d01"}}>Frete <span>Grátis</span> na Primeira Compra!</p>
            </div>
        </div>
    </header>
    )
}

export default Header
