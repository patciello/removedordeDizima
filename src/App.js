// src/App.js

import React, { useState } from 'react';
import { dividirValor, agruparValores } from './calculations';
import './App.css';
import YourComponent from './YourComponent';

function App() {
  const [valorBruto, setValorBruto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [gruposValores, setGruposValores] = useState({});
  const [descontos, setDescontos] = useState([]);

  const calcular = () => {
    const valorBrutoNum = parseFloat(valorBruto);
    const quantidadeNum = parseInt(quantidade);

    if (quantidadeNum <= 0 || isNaN(valorBrutoNum) || isNaN(quantidadeNum)) {
      alert('Por favor, insira valores válidos.');
      return;
    }

    const valores = dividirValor(valorBrutoNum, quantidadeNum);
    const grupos = agruparValores(valores);
    setGruposValores(grupos);

    // Cálculo dos descontos
    const descontosCalculados = [];

    // FUNRURAL (1.5%)
    const taxaFunrural = 0.015;
    const valorDescontoFunrural = Math.round(valorBrutoNum * taxaFunrural * 100) / 100;
    const valorComDescontoFunrural = Math.round((valorBrutoNum - valorDescontoFunrural) * 100) / 100;

    descontosCalculados.push({
      nome: 'FUNRURAL (1.5%)',
      valorDesconto: valorDescontoFunrural,
      valorComDesconto: valorComDescontoFunrural,
    });

    // SENAR (0.20%)
    const taxaSenar = 0.002;
    const valorDescontoSenar = Math.round(valorBrutoNum * taxaSenar * 100) / 100;
    const valorComDescontoSenar = Math.round((valorBrutoNum - valorDescontoSenar) * 100) / 100;

    descontosCalculados.push({
      nome: 'SENAR (0.20%)',
      valorDesconto: valorDescontoSenar,
      valorComDesconto: valorComDescontoSenar,
    });

    setDescontos(descontosCalculados);
  };

  return (
    <div className="container">
      <h1>Calculadora de Produtor</h1>
      <div>
        <label>Quantidade</label>
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
      </div>
      <button onClick={calcular}>Calcular</button>

      {Object.keys(gruposValores).length > 0 && (
        <div>
          <h2>Valores Agrupados</h2>
          <table>
            <thead>
              <tr>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(gruposValores).map(([valor, quantidade], index) => (
                <tr key={index}>
                  <td>{quantidade}</td>
                  <td>
                    R${' '}
                    {parseFloat(valor).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Descontos:</h2>
          <table className="tabela-descontos">
            <thead>
              <tr>
                <th>Nome do Desconto</th>
                <th>Valor a Ser Descontado</th>
                <th>Valor com Desconto Aplicado</th>
              </tr>
            </thead>
            <tbody>
              {descontos.map((desconto, index) => (
                <tr key={index}>
                  <td>{desconto.nome}</td>
                  <td>
                    R${' '}
                    {desconto.valorDesconto.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td>
                    R${' '}
                    {desconto.valorComDesconto.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;



