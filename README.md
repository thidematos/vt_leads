## VT LeadGrid

    Entrega para o desafio técnico do Processo Seletivo para a vaga de estágio em Desenvolvimento de Software Fullstack.
    Sistema Web desenvolvido utilizando as seguintes tecnologias:

# Front-End

    - React 19
    - TailwindCSS
    - React Query
    - React Hot Toast
    - Axios

# Back-end

    - Node
    - Express.js
    - Axios

## Sobre o Sistema

    O VT LeadGrid é um Web Service para gerenciamento de leads com integração à API do Nectar CRM.
    O projeto é construído com Node.js/Express no backend e React no frontend. Como funcionalidades desenvolvidas,
    temos as seguintes: criação de novos Leads, de acordo com a estrutura de dados mencionada na documentação da API da Nectar,
    disponível em https://nectarcrm.docs.apiary.io/#reference/0/contatos; listagem dos Leads criados em minha conta do Nectar CRM;
    exclusão de Leads listados.
    De acordo com o definido na documentação da API do Nectar, criei um Form (formulário) Multi-Step que permitisse o input de todos
    os dados relevantes do novo Lead. A opção por um Form Multi-Step se justifica por uma boa prática de UX (User Experience): quebrar
    em etapas formulários com muitos campos diminui a fricção o usuário, no que tange à sua disposição para preencher o mesmo. O Front-End
    envia a requisição de post/get/delete para a nossa API própria. A partir dela, as requisições são feitas para a API da Nectar e,
    a resposta, é direcionada para o Front. É importante ressaltar que toda a comunicação com a API da Nectar é estabelecida por meio
    de uma Key única e secreta. Essa Key é protegida de exposição no código por meio do uso de um arquivo .env, que a injeta diretamente
    nas variáveis de ambiente do processo Node em execução.
    A arquitetura do Back-End segue o modelo MVC, Model -> View -> Controller, com Services e Repositories para tornar os Controllers
    mais limpos e manter a clausula de One Concern per Function. Utilizo um package NPM (criado por mim, disponível
    em https://www.npmjs.com/package/@thiagolmatos/create-node-thigas?activeTab=readme) como Boilerplate para API.
    Nessa estrutura padrão de API, já deixo pré-definido o uso de JWT Tokens, Cookies e comunicação com o Database MongoDB, caso sejam necessários.
    No Front-End, a arquitetura é atômica, com os diversos components sendo divididos por Features, Pages e elementos genéricos de UI.
    Os Services são utilizados para estabelecer a comunicação com a nossa API. A library React Query cuida do gerenciamento do Remote State.
    Já o UI state é controlado, em grande medida, por Contexts + Reducers. A estilização é feita com o TailwindCSS.
    Obs: na UI do VT LeadGrid, há uma Sidebar lateral, destinada para a navegação no App. Entretanto, não houve tempo hábil
    para desenvolver mais funcionalidades/telas.

## Demonstração

    Vídeo apresentação o Web Service: https://youtu.be/Vc2sYX3JXk8
    Link para acesso do VT LeadGrid: https://vt-leads.onrender.com (como se trata de uma hospedagem gratuíta, o primeiro acesso à página pode demorar).

## How to Use

    Primeiro, deve-se clonar o repositório do GitHub: https://github.com/thidematos/vt_leads/tree/develop. Utilize a branch develop. Em seguinda,
    na pasta root da API, abra um terminal e digite:
        - npm install
        - npm start
    Em seguida, vá para a folder client. Nessa folder, abra um novo terminal. Digite o seguinte comando:
        - npm install
        - npm run dev
    Acesse o localhost em seu browser: http://127.0.0.1:3001/
