## Big chat brasil fron end
O projeto foi desenvolvido utilizando NextJS, Tailwind, Shadcn e axios para as requisições http. 
*** 
Antes de rodar o projeto frontend é importante que o backend já esteja rodando, as instruções para instalar e rodar o projeto podem ser encontradas em: https://github.com/luizjurazek/bigchatbrasil
***
#### Como rodar o projeto
Para rodar o projeto inicie fazendo o clone com o comando abaixo:

    git clone https://github.com/luizjurazek/bigchatbrasil-front.git

Após isso na raiz do projeto rode o comando para realizar a instalação.

    npm install
ou 

    yarn install

***
Agora no arquivo [.env.local](https://github.com/luizjurazek/bigchatbrasil-front/blob/master/.env.local) que está localizado na raiz do projeto, insira a url da api que está rodando a partir do back end que foi clonado no início do arquivo na variável NEXT_PUBLIC_API_URL:

    NEXT_PUBLIC_API_URL=http://localhost:8080

Caso não tenha alterado a url ou porta da api padrão do Java, não é necessário realizar a alteração, pois a porta 8080 é utilizada por padrão. 
***
Agora é rodar o comando na raiz do projeto:

    npm run dev

e acessar a url: http://localhost:3000/