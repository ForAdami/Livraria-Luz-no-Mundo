import {BrowserRouter, Routes, Route} from 'react-router'
import { useEffect, useState } from 'react'

import './styles/reset.css'
import './styles/global.css'

import Layout from './components/layout'
import Home from './pages/home'
import CarrinhoPage from './pages/carrinho'
import CompraPage from './pages/compra'
import NotFound from './pages/notFound'

function App(){
  const [Carrinho, setCarrinho] = useState([])
  const [Compra, setCompra] = useState([])
  const [Total, setTotal] = useState(0)

  useEffect(()=>{
    console.log('Compra:',Compra)
    console.log('carrinho:',Carrinho)
  },[Carrinho, Compra])

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
          <Route path='/compra' element={<CompraPage Carrinho={Carrinho} setCarrinho={setCarrinho} Compra={Compra} setCompra={setCompra} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
