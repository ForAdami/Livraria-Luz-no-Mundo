import {BrowserRouter, Routes, Route} from 'react-router'

import './styles/reset.css'
import './styles/global.css'

import Home from './pages/home'
import CarrinhoPage from './pages/carrinho'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<CarrinhoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App