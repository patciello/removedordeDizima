import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [brutoValue, setBrutoValue] = useState('');
  const [liquidoValue, setLiquidoValue] = useState('');
  const [activeField, setActiveField] = useState(null);

  const handleBrutoClick = () => {
    setActiveField('bruto');
    setLiquidoValue('');
  };

  const handleLiquidoClick = () => {
    setActiveField('liquido');
    setBrutoValue('');
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Valor Bruto"
          value={brutoValue}
          onClick={handleBrutoClick}
          onChange={(e) => setBrutoValue(e.target.value)}
          style={{
            backgroundColor: activeField === 'bruto' ? 'white' : 'lightgray',
            padding: '8px',
            margin: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="text"
          placeholder="Valor Líquido (com desconto FUNRURAL/SENAR)"
          value={liquidoValue}
          onClick={handleLiquidoClick}
          onChange={(e) => setLiquidoValue(e.target.value)}
          style={{
            backgroundColor: activeField === 'liquido' ? 'white' : 'lightgray',
            padding: '8px',
            margin: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
