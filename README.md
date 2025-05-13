# ⚡ Monitoramento de Consumo de Energia com NestJS

Este projeto é uma API desenvolvida com **NestJS** para monitorar o consumo de energia em uma comunidade, incentivando o uso eficiente dos recursos e promovendo a conscientização sobre sustentabilidade. 🌱

---

## 🎯 Objetivos do Projeto

- Permitir o **registro do consumo mensal de energia** por usuário.
- Possibilitar a **consulta do histórico de consumo** entre datas específicas.
- Gerar **alertas de consumo elevado**, caso o consumo atual ultrapasse o mês anterior.

---

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) — Framework principal
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/) — Testes de requisição

---

## 🚀 Como Executar o Projeto

### ✅ Pré-requisitos

- Node.js instalado (recomenda-se a versão LTS)
- Nest CLI instalado globalmente:
```bash
npm install -g @nestjs/cli
```

### ▶️ Passos para Rodar
1. Clone este repositório:
```bash
git clone https://github.com/SEU_USUARIO/NOME_REPO.git
```

2. Acesse a pasta do projeto:
```bash
cd proj_consumo
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor:
```bash
npm run start
```

A API estará disponível em http://localhost:3000.

### 🧪 Testando a API no Postman
1. Registrar Consumo (POST)
**URL**: http://localhost:3000/consumo
**Método**: POST
**Body (JSON)**:
```bash
  {
    "usuarioId": "123",
    "quantidadeKwh": 120,
    "dataLeitura": "2025-05-01"
  }
```

2️. Consultar Histórico (GET)
**URL:**
http://localhost:3000







