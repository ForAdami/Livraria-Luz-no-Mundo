// Arquivo: client/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import CarrinhoPage from './pages/CarrinhoPage';
import Login from './pages/Login';
import MaisVendidos from './pages/MaisVendidos';
import Ofertas from './pages/Ofertas';
import Novidades from './pages/Novidades';
import { CarrinhoProvider } from './context/CarrinhoContext';

import './styles/global.css';

function App() {
  return (
    <CarrinhoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mais-vendidos" element={<MaisVendidos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/novidades" element={<Novidades />} />
        </Routes>
      </Router>
    </CarrinhoProvider>
  );
}

export default App;

