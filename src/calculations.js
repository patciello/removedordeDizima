// src/calculations.js

export function dividirValor(valorBruto, quantidade) {
    const valorBase = Math.floor((valorBruto / quantidade) * 100) / 100; // Trunca para 2 casas decimais
    const totalDistribuido = valorBase * quantidade;
    const diferenca = Math.round((valorBruto * 100 - totalDistribuido * 100)) / 100;
  
    // Criar um array com o valor base para cada animal
    const valoresPorAnimal = Array(quantidade).fill(valorBase);
  
    // Ajustar a diferença adicionando centavos aos primeiros animais
    let i = 0;
    let diferencaRestante = diferenca;
  
    while (diferencaRestante > 0) {
      valoresPorAnimal[i] += 0.01;
      valoresPorAnimal[i] = Math.round(valoresPorAnimal[i] * 100) / 100; // Garantir precisão de 2 casas decimais
      diferencaRestante -= 0.01;
      diferencaRestante = Math.round(diferencaRestante * 100) / 100; // Garantir precisão
      i++;
    }
  
    return valoresPorAnimal;
  }
  
  export function agruparValores(valoresPorAnimal) {
    const grupos = {};
  
    valoresPorAnimal.forEach((valor) => {
      const valorStr = valor.toFixed(2);
      if (grupos[valorStr]) {
        grupos[valorStr] = {
          quantidade: grupos[valorStr].quantidade + 1,
          valorTotal: grupos[valorStr].valorTotal + valor
        };
      } else {
        grupos[valorStr] = {
          quantidade: 1,
          valorTotal: valor
        };
      }
    });
  
    return grupos;
  }
  