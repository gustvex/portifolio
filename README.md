Portfólio Pessoal - Gustavo Oliveira
Visão Geral do Projeto
Este projeto é o meu portfólio pessoal, desenvolvido como um espaço para expor meu trabalho, compartilhar minha experiência profissional e demonstrar minhas habilidades técnicas. O objetivo é apresentar uma visão geral de minha trajetória como desenvolvedor Full Stack, destacando projetos práticos e conhecimentos adquiridos.

Funcionalidades
Sobre Mim: Seção que apresenta uma visão geral da minha experiência e filosofia de trabalho como desenvolvedor.

Especialidades: Detalhamento das minhas habilidades em desenvolvimento front-end e back-end, incluindo as principais tecnologias que utilizo.

Projetos: Uma galeria dos meus projetos mais importantes, com descrições e links para os repositórios ou versões em produção.

Contato: Informações de contato para que empresas ou outros desenvolvedores possam se conectar comigo.

Tecnologias Utilizadas
O portfólio foi construído utilizando as seguintes ferramentas e bibliotecas:

Front-end: React, TypeScript, Vue.js, Tailwind CSS, shadcn/ui.

Back-end: Node.js, NestJS, PostgreSQL.

Ferramentas e DevOps: Docker, Nginx, Git, Vercel, Azure.

Como Rodar o Projeto
Siga os passos abaixo para executar a aplicação em sua máquina local.

1. Executando com Docker
Se você tiver o Docker instalado, pode construir e rodar a aplicação em um contêiner, o que garante um ambiente isolado e padronizado.

Clone o repositório:

git clone [https://github.com/gustvex/gustvex.github.io](https://github.com/gustvex/gustvex.github.io)
cd gustvex.github.io

Construa a imagem do Docker:

docker build -t portfolio-gustavo .

Execute o contêiner:

docker run -p 8080:80 portfolio-gustavo

A aplicação estará disponível em http://localhost:8080.

2. Executando Localmente
Clone o repositório:

git clone [https://github.com/gustvex/gustvex.github.io](https://github.com/gustvex/gustvex.github.io)
cd gustvex.github.io

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm run dev

A aplicação estará disponível em http://localhost:5173.