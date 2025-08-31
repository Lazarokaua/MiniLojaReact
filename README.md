# Mini-Loja em React: Uma Comparação de Estilos

Este repositório contém um projeto de "Mini-Loja" desenvolvido em React, com o objetivo de demonstrar e comparar quatro abordagens populares de estilização em aplicações React.

O projeto apresenta uma interface de e-commerce simples, que exibe uma grade de produtos com um estado de carregamento (skeleton), um cabeçalho e um seletor de tema (claro/escuro).

## As Quatro Abordagens

O projeto é dividido em quatro diretórios, cada um representando uma técnica de estilização diferente:

### 1. `01-css-global`
Nesta versão, todos os estilos são definidos em um único arquivo CSS global (`src/index.css`). Esta é a abordagem mais tradicional e direta, mas pode levar a conflitos de nomes de classe e dificuldades de manutenção em projetos maiores.

### 2. `02-css-modules`
Aqui, a estilização é feita com CSS Modules. Cada componente React tem seu próprio arquivo `.module.css`, que gera nomes de classe únicos em tempo de compilação. Isso resolve o problema de escopo do CSS global, garantindo que os estilos de um componente não afetem outros.

### 3. `03-tailwindcss`
Esta implementação utiliza o [Tailwind CSS](https://tailwindcss.com/), um framework CSS "utility-first". Em vez de escrever CSS personalizado, o estilo é aplicado diretamente no JSX através da combinação de classes de utilidade (ex: `flex`, `pt-4`, `text-center`).

### 4. `04-StyledComponents`
Nesta versão, a abordagem utilizada é CSS-in-JS com a biblioteca [Styled Components](https://styled-components.com/). Os estilos são escritos em JavaScript (dentro de template literals) e são diretamente atrelados aos componentes, permitindo a criação de componentes React com seus próprios estilos encapsulados.

## Como Executar Cada Projeto

Para executar qualquer uma das quatro versões, siga os passos abaixo. Certifique-se de estar no diretório correto para cada uma.

1.  **Navegue até o diretório do projeto desejado:**
    ```bash
    # Exemplo para o projeto com CSS Global
    cd 01-css-global
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O servidor de desenvolvimento será iniciado, e você poderá ver a aplicação em seu navegador. Repita o processo para cada um dos outros diretórios (`02-css-modules`, `03-tailwindcss`, `04-StyledComponents`) para comparar as diferentes abordagens.
