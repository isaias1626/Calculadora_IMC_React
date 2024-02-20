import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do Peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao('Peso Normal');
    } else if (imcCalculado >= 24.9 && imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 29.9 && imcCalculado < 34.9) {
      setClassificacao('Obesidade Grau I');
    } else if (imcCalculado >= 34.9 && imcCalculado < 39.9) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III');
    }
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <div>
        <label htmlFor="altura">Altura (cm):</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && <p>Seu IMC é: {imc}</p>}
      {classificacao && (
        <p>
          Classificação: {classificacao}{' '}
          {classificacao === 'Abaixo do Peso' && '😕'}
          {classificacao === 'Peso Normal' && '😊'}
          {classificacao === 'Sobrepeso' && '😔'}
          {classificacao === 'Obesidade Grau I' && '😞'}
          {classificacao === 'Obesidade Grau II' && '😣'}
          {classificacao === 'Obesidade Grau III' && '😖'}
        </p>
      )}
    </div>
  );
}

export default App;