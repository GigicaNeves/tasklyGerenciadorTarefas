# Inteli - Instituto de Tecnologia e Liderança

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="./docs/assets/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Taskly - Autocuidado sem complicação

## Responsável

- <a href="https://www.linkedin.com/in/giovanna-neves-rodrigues-6927262b8/">Giovanna Neves Rodrigues</a>

## Professores:

### Orientador(a)

- <a href="https://www.linkedin.com/in/fabiana-martins-de-oliveira-8993b0b2/">Fabiana Martins de Oliveira
  </a>

### Instrutores

- <a href="https://www.linkedin.com/in/bryan-kano/">Bryan Kano Ferreira</a>
- <a href="https://www.linkedin.com/in/gui-cestari/">Guilherme Henrique de Oliveira Cestari</a>
- <a href="https://www.linkedin.com/in/egondaxbacher/">Egon Ferreira Daxbacher</a>
- <a href="https://www.linkedin.com/in/profclaudioandre/">Cláudio Fernando André</a>
- <a href="https://www.linkedin.com/in/luciano-galdino-26191b36/">Luciano Galdino</a>

## 📝 Descrição

Taskly é uma aplicação web desenvolvida para auxiliar mulheres a organizarem seus hábitos e tarefas de autocuidado, frequentemente negligenciados devido à rotina intensa. Por meio de uma lista de tarefas que se repetem semanalmente, o Taskly oferece um ambiente simples e intuitivo para criar e acompanhar esses hábitos, promovendo maior controle e consciência sobre o autocuidado. Assim, a plataforma atua como um verdadeiro impulsionador para a qualidade de vida, incentivando o equilíbrio e o bem-estar.

## 📝 Link de demonstração

_Coloque aqui o link para seu projeto publicado e link para vídeo de demonstração_ (Em andamento)

## 📁 Estrutura de pastas

A arquitetura escolhida para o projeto foi o padrão MVC (Model-View-Controller). Assim, entre os arquivos e diretórios presentes na raiz do projeto, definem-se as seguintes estruturas:

**config:** contém arquivos de configuração do sistema, como conexões com o banco de dados, variáveis de ambiente e parâmetros globais.

**controllers:** responsáveis por lidar com a lógica de negócios e as interações entre as rotas e os modelos, processando as requisições e respostas da API.

**docs:** diretório para documentação do projeto, incluindo arquivos como wad.md, que descrevem a análise e estrutura do website.

**assets (dentro de docs):** armazena recursos relacionados à documentação, como imagens e diagramas que ilustram conceitos e funcionalidades.

**models:** armazena as definições dos modelos de dados, que representam as entidades do sistema e a forma como os dados são armazenados no banco de dados.

**node_modules:** contém todos os pacotes e dependências instalados via npm. Não deve ser alterado manualmente.

**public**: armazena os arquivos estáticos da aplicação, como imagens, ícones, fontes, scripts JavaScript de front-end e folhas de estilo já compiladas, que são acessados diretamente pelo navegador.

**routes:** define as rotas da aplicação, mapeando URLs para controladores específicos. Cada rota representa um endpoint da API.

**scripts:** scripts utilitários, testes automatizados e outros códigos auxiliares que ajudam no desenvolvimento e manutenção do projeto.

**services:** contém serviços que encapsulam lógica complexa, como chamadas a APIs externas, manipulação de dados e regras de negócios específicas.

**tests:** diretório para testes unitários e de integração, essenciais para garantir a qualidade e robustez do código.

**views**: armazena os arquivos de template da aplicação em .ejs, que definem a estrutura visual das páginas renderizadas pelo servidor.

**.env:** arquivo para variáveis de ambiente, como chaves de API, strings de conexão e outros dados sensíveis que não devem ser expostos publicamente.

**.gitignore:** lista de arquivos e diretórios que o Git deve ignorar, como node_modules, .env e outros dados temporários ou sensíveis.

**jest.config.js:** arquivo de configuração para o Jest, utilizado para testes automatizados na aplicação.

**package-lock.json**: armazena informações detalhadas sobre as versões exatas das dependências instaladas, garantindo que a aplicação seja executada da mesma forma em diferentes ambientes.

**package.json:** arquivo que contém as dependências do projeto, scripts npm, metadados e informações importantes para a execução da aplicação.

**README.md:** documento com informações gerais sobre o projeto, como instruções de instalação, uso e objetivos.

**rest.http:** arquivo para testar manualmente os endpoints da API usando a extensão REST Client no VS Code.

**server.js:** arquivo principal do servidor, responsável por iniciar a aplicação, configurar middlewares e escutar as requisições na porta definida.

## 💻 Configuração para desenvolvimento e execução do código

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1. Baixar e instalar o node.js: [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório em questão.
3. No modo administrador, abra o "prompt de comando" ou o "terminal" e, após, abra a pasta "src/backend" no diretório raiz do repositório clonado e digite o segundo comando:

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm start
```

5. Agora você pode acessar a aplicação através do link http://localhost:8080/
6. O servidor está online.

## 🗃 Histórico de lançamentos

- 0.1.0 - 09/05/2025 <br>
  Modelagem de dados e estrututa inicial do projeto.
- 0.2.0 - 08/06/2025 <br>
  Conexão com a interface e estilização implementada.

## 📋 Licença/License

(Em desenvolvimento)
