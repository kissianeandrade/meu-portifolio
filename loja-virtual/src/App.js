import React, { useState } from 'react';
import './App.css';
import fusca from './imagens/fusca.jpg';
import kombi from './imagens/kombi.jpg';
import ferrari from './imagens/ferrari.jpg';
import porsche from './imagens/porsche.jpg';

function App() {
  const produtos = [
    { id: 1, nome: 'Fusca', preco: 50.00, imagem: fusca },
    { id: 2, nome: 'Kombi', preco: 65.00, imagem: kombi },
    { id: 3, nome: 'Ferrari', preco: 70.00, imagem: ferrari },
    { id: 4, nome: 'Porsche', preco: 75.00, imagem: porsche },
  ];

  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);

    // Adiciona a classe de animação ao item
    const item = document.getElementById(`produto-${produto.id}`);
    item.classList.add('adicionado');

    // Remove a classe após a animação terminar
    setTimeout(() => {
      item.classList.remove('adicionado');
    }, 500);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = carrinho.filter((item, i) => i !== index);
    setCarrinho(novoCarrinho);
  };

  const finalizarCompra = () => {
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
    } else {
      alert('Compra finalizada com sucesso! Obrigado por comprar na Minimotores Store.');
      setCarrinho([]); // Limpa o carrinho após finalizar a compra
    }
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header className="header">
        <h1>Loja Minimotores</h1>
        <nav>
          <ul>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#carrinho">Carrinho</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main>
        <h2 id="produtos">Nossos Produtos</h2>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id} id={`produto-${produto.id}`}>
              <img src={produto.imagem} alt={produto.nome} style={{ width: '100%', borderRadius: '10px' }} />
              <h3>{produto.nome}</h3>
              <p>R${produto.preco.toFixed(2)}</p>
              <button onClick={() => adicionarAoCarrinho(produto)}>
                Adicionar ao Carrinho
              </button>
            </li>
          ))}
        </ul>

        <div className="carrinho" id="carrinho">
          <h2>Carrinho de Compras</h2>
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>
                {item.nome} - R${item.preco.toFixed(2)}
                <button onClick={() => removerDoCarrinho(index)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <button onClick={finalizarCompra} style={{ marginTop: '20px' }}>
            Finalizar Compra
          </button>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2023 Loja Minimotores. Todos os direitos reservados.</p>
        <p>Contato: contato@minimotores.com</p>
      </footer>
    </div>
  );
}

export default App;