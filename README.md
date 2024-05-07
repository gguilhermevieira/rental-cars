# Desafio de Classes em JavaScript: Loja de Aluguel de Carros

Este repositório contém o código para um desafio que envolve a implementação de uma loja de aluguel de carros em JavaScript.

## Exercício: Loja de Aluguel de Carros

Você foi contratado para desenvolver o sistema de uma loja de aluguel de carros. Através deste sistema, os clientes poderão cadastrar novos carros, alugar carros disponíveis e devolver carros alugados.

Para isso, você deve implementar as classes Carro e LojaDeAluguelDeCarros em JavaScript.

A classe Carro deve possuir os seguintes campos:

- `modelo`: uma string representando o modelo do carro.
- `ano`: um número representando o ano de fabricação do carro.
- `status`: um número que indica o status do carro, onde 0 significa "disponível" e 1 significa "alugado".
- `dataDevolucao`: uma data que representa a data de devolução do carro quando alugado.

A classe LojaDeAluguelDeCarros deve ter os seguintes métodos:

- `cadastrarCarro(modelo, ano)`: um método para cadastrar um novo carro na loja.
- `alugarCarro(modelo)`: um método para alugar um carro disponível. Este método deve verificar se o carro está disponível para aluguel e, se sim, alterar o seu status para "alugado" e definir a data de devolução como sete dias após a data atual.
- `devolverCarro(modelo)`: um método para devolver um carro alugado. Este método deve verificar se o carro está realmente alugado e, se sim, alterar o seu status para "disponível" e limpar a data de devolução.

## Descrição

O sistema permite que os clientes cadastrem novos carros, aluguem carros disponíveis e devolvam carros alugados. O código inclui classes para gerenciar carros e a loja de aluguel de carros, com métodos para cadastro de carros, aluguel e devolução.

## Funcionalidades

- Cadastrar novos carros com informações de modelo e ano.
- Alugar carros disponíveis e definir automaticamente as datas de devolução.
- Devolver carros alugados e atualizar o status de disponibilidade.

## Instruções

1. Clone este repositório.
2. Abra o projeto em seu editor de código preferido.
3. Execute o código JavaScript para testar o sistema de loja de aluguel de carros.

## Uso

Você pode usar este código como um recurso de aprendizado ou como base para seus próprios projetos!
