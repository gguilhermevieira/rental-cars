class Carro {
  constructor(modelo, ano, status = 0) {
    // implemente o construtor aqui
  }

  alugar() {
    // implemente o método de aluguel aqui
  }

  devolver() {
    // implemente o método de devolução aqui
  }
}

class LojaDeAluguelDeCarros {
  constructor() {
    // implemente o construtor aqui
  }

  cadastrarCarro(modelo, ano) {
    // implemente o método de cadastro de carro aqui
  }

  alugarCarro(modelo) {
    // implemente o método de aluguel de carro aqui
  }

  devolverCarro(modelo) {
    // implemente o método de devolução de carro aqui
  }
}

// Exemplo de uso:
const minhaLoja = new LojaDeAluguelDeCarros();
minhaLoja.cadastrarCarro('Toyota Corolla', 2022);
minhaLoja.cadastrarCarro('Honda Civic', 2021);
minhaLoja.alugarCarro('Toyota Corolla');
minhaLoja.devolverCarro('Toyota Corolla');
