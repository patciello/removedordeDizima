
import React, { useState } from 'react';

const YourComponent = () => {
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
      <input
        type="text"
        placeholder="Valor Bruto"
        value={brutoValue}
        onClick={handleBrutoClick}
        onChange={(e) => setBrutoValue(e.target.value)}
        style={{
          backgroundColor: activeField === 'bruto' ? 'white' : 'lightgray',
        }}
      />
      <input
        type="text"
        placeholder="Valor Líquido"
        value={liquidoValue}
        onClick={handleLiquidoClick}
        onChange={(e) => setLiquidoValue(e.target.value)}
        style={{
          backgroundColor: activeField === 'liquido' ? 'white' : 'lightgray',
        }}
      />
    </div>
  );
};

export default YourComponent;
