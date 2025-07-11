import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho(prev => [...prev, produto]);
  }

  function removerDoCarrinho(index) {
    setCarrinho(prev => prev.filter((_, i) => i !== index));
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho, total }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
