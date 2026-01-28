# 🛸 NF_ET Matcher 👽

> Descubra se os seus NFTs combinam!

![Project Status](https://img.shields.io/badge/status-v0.1.0-green)
![Vercel Deploy](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)
![Tech Stack](https://img.shields.io/badge/stack-React_19_%7C_Tailwind_v4_%7C_Wagmi_%7C_Vite_-blue)

**[🔗 Acesse a Demo Online](https://nf-et-matcher.vercel.app)**

**[🔗 Coleção Defizeros (OpenSea)](https://opensea.io/collection/defizeros)**

---

## 🖼️ Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/c37e993c-4a26-42d2-84fa-d030cc6c9a69" alt="NF_ET Matcher Preview" width="100%">
</p>

## 👽 Sobre o Projeto

O **NF_ET Matcher** é uma aplicação interativa que calcula a compatibilidade entre dois NFTs da coleção Defizeros.

Mais do que uma brincadeira Web3, este projeto foi desenvolvido para explorar arquiteturas modernas de Frontend, focando em performance, usabilidade e manipulação de assets visuais no navegador.

### 🤔 Como funciona

- **Random Match:** Gera uma dupla aleatória entre dois NF_ETs mintados.
- **Match por ID:** Você insere um `tokenId` e o app encontra a dupla ideal.
- **Share:** Gera links únicos para compartilhar o resultado.
- **Download:** Renderiza e baixa um card PNG de alta resolução (Ghost Component) direto no navegador para postar no Discord/Twitter.

### ✨ Destaques Técnicos

- **📸 Shareable Cards:** Geração de imagens PNG client-side sem depender de backend para renderização.
- **🎨 UI Cyberpunk/Neon:** Design system construído do zero com o novo **Tailwind CSS v4**, utilizando variáveis CSS nativas, gradientes complexos e animações.
- **⚡ Serverless Proxy:** Utiliza Vercel Functions para mascarar e otimizar chamadas de metadados de NFT, evitando exposição de API keys no frontend.

---

## 🛠️ Tech Stack

Stack moderna focada no ecossistema React 19 e Web3:

- **Core:** React 19, TypeScript, Vite.
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) (Engine Rust).
- **Gerenciamento de Estado:** [TanStack Query](https://tanstack.com/query/latest) (Requisições de API, Cache e Sincronização).
- **Web3 & Blockchain:** [Wagmi](https://wagmi.sh/) + [Viem](https://viem.sh/) (Hooks e integração Ethereum).
- **Routing:** React Router v7.
- **Backend/API:** Vercel Functions (Serverless Node.js).
- **Geração de Imagem:** `html-to-image`.
- **i18n:** `react-i18next`.
- **Ícones:** Lucide React.

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js 20+](https://nodejs.org/) (Recomendado)
- [Vercel CLI](https://vercel.com/docs/cli) (Obrigatório para API local):
  ```bash
  npm i -g vercel
  ```

### Configuração de Ambiente

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione as chaves necessárias (obtenha na [Alchemy](https://www.alchemy.com/)):

```env
# Obrigatório: API Key da Alchemy para buscar metadados dos NFTs
ALCHEMY_API_KEY="sua_chave_aqui"

# Opcional: RPC customizado (Mainnet)
VITE_PUBLIC_RPC_URL="https://eth-mainnet.g.alchemy.com/v2/..."
```

### Instalação e Execução

Para rodar o projeto completo (Frontend + Serverless API), você precisará de dois terminais.

```bash
# 1. Clone o repositório
git clone https://github.com/SammuelGR/nf-et-matcher.git
cd nf-et-matcher

# 2. Instale as dependências
npm install

# 3. Conecte o projeto à Vercel (para baixar configurações do ambiente serverless)
vercel link
```

Agora, inicie os serviços separadamente:

#### Terminal 1 (Frontend):

```bash
npm run dev
# O Frontend geralmente rodará em http://localhost:5173
```

#### Terminal 2 (API Local):

```bash
npm run dev:api
# A API Serverless rodará em http://localhost:3000
```

---

## 🗺️ Roadmap (WEN v1???)

- [ ] Calcular compatibilidade real baseada na raridade dos _traits_.
- [ ] Ranking global e estatísticas da comunidade.
- [ ] Filtros por "Gangues" (Magos, Ciclopes, Calvões de Cria, etc).
- [ ] Login via Wallet e histórico de matches.
- [ ] OG Image dinâmica (o preview do link mostra os ETs do match).

---

## 🤝 Licença

Opa, toda! Pode passar 🤠🫴

---

## ⚠️ Disclaimer

Este é um projeto independente e **não possui afiliação** oficial com o Defiverso, coleção Defizeros ou Tinder®. É apenas um app "meme" desenvolvido pela comunidade para a comunidade.

---

<p align="center">
  Feito com 🤘 e 🕊️ por <a href="https://github.com/SammuelGR"><strong>Sammuel</strong></a>
</p>
