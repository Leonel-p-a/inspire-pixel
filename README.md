# Inspire Pixel

![Demonstração do Projeto](src/assets/demo.gif)

## Índice

- [Sobre o projeto](#sobre-o-projeto)  
- [Tecnologias utilizadas](#tecnologias-utilizadas)  
- [Estrutura de pastas](#estrutura-de-pastas)  
- [Funcionalidades](#funcionalidades)  
- [Como rodar localmente](#como-rodar-localmente)  
- [Como contribuir](#como-contribuir)  
- [Autor](#autor)  

---

## Sobre o projeto

**Inspire Pixel** é o projeto desafio final da formação *Front-End Essentials* do curso do *Vai na Web*.  
O objetivo do projeto é demonstrar os conhecimentos adquiridos durante a formação, aplicando boas práticas de front-end com Vue + Vite — construindo uma interface responsiva, dinâmica e organizada.  
O resultado já está disponível online via deploy: https://inspire-pixel-six.vercel.app/

---

## Tecnologias utilizadas

- Vue.js — framework JavaScript para construir a interface.  
- Vite — ferramenta de build / bundler, que oferece inicialização rápida durante o desenvolvimento.  
- SCSS — estilização
- HTML / CSS / JavaScript  

---

## Estrutura de pastas

O projeto segue uma estrutura típica de aplicações Vue + Vite:

```
Inspire-Pixel/
│
├── public/ # Arquivos públicos
├── src/ # Código fonte da aplicação
│ ├── assets/ # Imagens, ícones e estilos
│ ├── components/ # Componentes reutilizáveis Vue
│ ├── services/ # Seviços (requisição da API)
│ ├── App.vue # Componente raiz da aplicação
│ └── main.js (ou main.ts) # Ponto de entrada da aplicação
│
├── index.html # HTML raiz
├── package.json # Dependências, scripts, metadados do projeto
├── vite.config.js # Configurações da Vite
└── README.md # Este arquivo
```

---

## Funcionalidades

- Design moderno e responsivo
- Botão de favorito funcional
- Menu de navegação mobile
- Opção funcional para favoritar imagens
- Página de favoritos com vue-router

![Demonstração do Projeto](src/assets/demoFav.gif)

---

## Como rodar localmente

Para rodar o projeto no seu computador, siga os passos:

```bash
# 1. Clone o repositório
git clone https://github.com/Leonel-p-a/inspire-pixel.git  
cd inspire-pixel

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

Depois disso, abra o navegador e acesse http://localhost:5173.

---

## Como contribuir

Se você quiser contribuir com o Inspire Pixel — seja corrigindo bugs, melhorando estilos, adicionando funcionalidades ou escrevendo documentação — siga estas etapas:

- Fork este repositório.

- Crie uma branch para a sua feature ou correção:

```bash
git checkout -b minha-feature
```
- Faça suas alterações.

- Commit suas mudanças com mensagens claras e descritivas.

- Abra um Pull Request neste repositório.

Sinta-se à vontade para sugerir melhorias de design, performance, organização ou novas funcionalidades.

---

## Autor

Leonel-p-a — desenvolvedor responsável por este projeto.
Este projeto faz parte da conclusão da formação Front-End Essentials do curso do Vai na Web.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).