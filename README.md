# Portfólio Pessoal - Gustavo Oliveira

## Visão Geral

Este é o meu portfólio pessoal, desenvolvido para expor meu trabalho, compartilhar minha experiência profissional e demonstrar minhas habilidades técnicas.
O objetivo principal é apresentar minha trajetória como **Desenvolvedor Full Stack**, destacando projetos práticos, especialidades e conhecimentos adquiridos ao longo da minha carreira.

---

## Funcionalidades

* **Sobre Mim** → Breve apresentação da minha experiência e filosofia de trabalho.
* **Especialidades** → Detalhamento das minhas habilidades em **front-end** e **back-end**, com as principais tecnologias que utilizo.
* **Projetos** → Galeria com meus principais trabalhos, incluindo descrições e links para repositórios ou versões em produção.
* **Contato** → Informações para empresas ou desenvolvedores que desejem entrar em contato comigo.

---

## Tecnologias Utilizadas

**Front-end**

* React
* TypeScript
* Vue.js
* Tailwind CSS
* shadcn/ui

**Back-end**

* Node.js
* NestJS
* PostgreSQL

**Ferramentas & DevOps**

* Docker
* Nginx
* Git
* Vercel
* Azure

---

## Como Rodar o Projeto

### 1. Executando com Docker

Se você tiver o **Docker** instalado, pode rodar a aplicação em um contêiner, garantindo um ambiente isolado e padronizado.

```bash
# Clone o repositório
git clone https://github.com/gustvex/gustvex.github.io
cd gustvex.github.io

# Construa a imagem Docker
docker build -t portfolio-gustavo .

# Execute o contêiner
docker run -p 8080:80 portfolio-gustavo
```

Acesse em: **[http://localhost:8080](http://localhost:8080)**

---

### 2. Executando Localmente

Caso prefira rodar localmente:

```bash
# Clone o repositório
git clone https://github.com/gustvex/gustvex.github.io
cd gustvex.github.io

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: **[http://localhost:5173](http://localhost:5173)**

---
