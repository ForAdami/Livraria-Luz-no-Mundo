import Main from '../components/Main'

function Home({setCarrinho}){
    return(
        <div className='livros-container'>
            <Main setCarrinho={setCarrinho} />
        </div>
    )
}

export default Home
