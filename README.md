# Consumo da API usando React

Front-end em React consumindo a API de Notas (Laravel) criada em aula. O projeto usa Axios para chamadas HTTP, formulário para criar notas e tabela para listar as notas do banco.

## Requisitos da tarefa
- Criar uma aplicação React que consome a API por Fetch ou Axios
- Acessar um formulário que insere dados no banco
- Listar os dados do banco
- Não é necessário atualização automática da listagem
- Backend pode rodar em Docker ou XAMPP

## O que foi implementado
- Consumo da API com Axios (`GET /notas` e `POST /notas`)
- Página `Home` com:
  - Formulário controlado para criar nota (título e descrição)
  - Tabela com a listagem de notas
- Estilo minimalista (dark) com classes utilitárias (`card`, `form`, `btn`, `table`)
- Pequenas melhorias de performance (memoização de lista e callback estável)

## Pré-requisitos
- Node.js 16+ e npm
- API Laravel rodando e acessível (ex.: `http://127.0.0.1:8081`)
  - Endpoints esperados:
    - `GET /notas` → retorna array de notas
    - `POST /notas` → cria uma nova nota `{ titulo, descricao }`

## Como rodar
1. Instalar dependências
   ```bash
   npm install
   ```
2. Iniciar o servidor de desenvolvimento
   ```bash
   npm start
   ```
3. Acessar no navegador: `http://localhost:3000`

## Estrutura principal
- `src/components/home.jsx`: busca e lista notas; integra o formulário
- `src/components/form.jsx`: formulário controlado e envio via Axios
- `src/App.css`: estilos básicos e tema minimalista

## Observações
- Caso a API não esteja em `http://127.0.0.1:8081`, ajuste a URL em `home.jsx` e `form.jsx`.
- Se preferir, substitua Axios por Fetch mantendo a mesma estrutura de chamadas.
