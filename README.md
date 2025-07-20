# Coding Challenge

---

Projeto de CRUD fullstack desenvolvido como parte de um desafio técnico. O objetivo principal foi construir uma aplicação funcional com boas práticas de desenvolvimento.

## 🚀 Instruções de instalação

---

Clone o repositório:

```bash
git clone https://github.com/PedroAugusto31/JR-Pedro-Augusto.git
```

Com o projeto clonado em sua máquina, acesse os diretórios `front-end` e `back-end` pelo terminal e, um de cada vez, execute o comando:

```bash
yarn install

# ou

npm install
```

Após todas as dependências instaladas, crie um arquivo `.env` dentro da pasta "back-end" e crie as variáveis de ambiente da seguinte forma:

```env
DB_USERNAME = "[seu usuário do MySQL]";
DB_PASSWORD = "[sua senha do MySQL]";
```

Então abra o CLI do MySQL ou o MySQL Workbench, e crie o banco de dados executando o seguinte comando:

```sql
CREATE DATABASE games_collection;
```

Por fim, para iniciar o servidor back-end, rode:

```bash
npm run start:dev
# ou
yarn start:dev
```

E para iniciar o front-end:

```bash
npm run dev
# ou
yarn dev
```

## 📷 Prints do projeto

---

## 💻 Tecnologias utilizadas

---

> ### Front-end

- **Vue.js + Vite:** Escolhi o Vue para aprender um novo framework e utilizei o Vite pela configuração rápida e desempenho no desenvolvimento.

- **TailwindCSS:** Usei Tailwind pela abordagem utilitária que agiliza e padroniza a estilização dos componentes.

- **Vitest:** Optei pelo Vitest pela integração nativa com o Vite e pela agilidade nos testes.

> ### Back-end

- **Node.js / NestJS:** O NestJS foi escolhido por ser uma estrutura escalável, com suporte a TypeScript e arquitetura modular.

- **MySQL:** Escolhi o MySQL por ser um banco relacional confiável e amplamente utilizado.

- **TypeORM:** Usei o TypeORM pela integração com TypeScript e por facilitar a criação e gerenciamento das entidades.
