# Loja de Veículos do STAR WARS (Front-end)

## Introdução

Esta aplicaçao permite a simulação de uma loja virtual:

- Listagem de produtos da API [swapi.dev](https://swapi.dev)
- Adicionar produtos em uma cesta de compras
- Cadastro com função de auto-completar endereço via API [viacep.com.br](viacep.com.br)
- Confirmação de email via [SendGrid](https://sendgrid.com/) - função ainda não implementada.

## Tecnologias

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React.js v18](https://reactjs.org/)
- [MobX v6](https://mobx.js.org/README.html)
- [Formik v2](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [axios](axios)
- [TailwindCSS](https://tailwindcss.com/)

Este projeto armazena os dados apenas no navegador para executar suas funções.

## Instruções e comandos para execução do projeto

1. Clone este repositório localmente
2. Instalar todos os pacotes necessários

```
yarn install
```

3. Para rodar o projeto (modo de desenvolvimento)

```
yarn dev
```

4. Para rodar o projeto (modo de produção)

```
yarn build
```

5. Acesse a aplicação pelo navegador em: `http://localhost:5173`

Testes

```
npm test
```
