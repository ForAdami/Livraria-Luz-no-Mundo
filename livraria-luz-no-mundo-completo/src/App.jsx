import {BrowserRouter, Routes, Route} from 'react-router'
import { useEffect, useState } from 'react'

import './styles/reset.css'
import './styles/global.css'

import Layout from './components/layout'
import Home from './pages/home'
import CarrinhoPage from './pages/carrinho'

function App(){
  const [Carrinho, setCarrinho] = useState([])
  const [Compra, setCompra] = useState([])
  const [Total, setTotal] = useState(0)

  useEffect(()=>{
    if(Compra.length==0){
      setTotal(0)
    }else{
      const valores = Compra.map(item=>item.preco*item.quantidade)
      const total = valores.reduce((acc,num)=>num+acc,0)
      setTotal(Number(total.toFixed(2)))
    }
  },[Compra])


  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home setCarrinho={setCarrinho} />} />
          <Route path='/carrinho' element={<CarrinhoPage Carrinho={Carrinho} setCarrinho={setCarrinho} Compra={Compra} setCompra={setCompra} Total={Total} setTotal={setTotal} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
