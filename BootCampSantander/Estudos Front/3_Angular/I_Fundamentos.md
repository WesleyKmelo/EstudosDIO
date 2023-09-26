# AngularJS X Angular

Antes de aprofundar nos fundamentos desse framework, é necessário saber que esses dois frameworks embora tenham o objetivo de trabalhar com componetização dos elementos web, têm formas diferentes de trabalho.

O AngularJs é um framework desenvolvido e mantido pelo Google só que baseado apenas em Javascript. É um framework legado pois muitas pessoas e sistemas ainda utilizam justamente por se tratar de usar a linguagem do Javascript para desenvolver seus códigos.

Já o Angular , é como se fosse uma atualização do AngularJs, mas em vez do Javascript foi escolhido o Typescript como linguagem de desenvolvimento. Não é preciso dizer que uma das maiores vantagens dessa linguagem é a possibilidade de tipar variaveis e funções , o que por si só já agiliza muito pois os bugs podem ser percebidos em tempo de desenvolvimento. 

## SPA - Single Page Application

O Angular é um framework pra gerar uma SPA. Quer dizer que em uma página só é possivel exibir apenas os componentes necessários a necessidade do usuário. Por exemplo, numa página de login , o browser vai renderizar apenas os componentes do login. Após o login , poderia ser exibido os componentes da página e os componentes do login seriam escondidos, etc

### Camadas de uma webApp ou SPA
* ***Componentes*** => é a parte visual da página. São pedaçoes de códigos que permitem criar peças, como se fossem peças de Lego, para serem montadas na página conforme a necessidade. Ex: um card, um botão, um menu, etc. Além disso são totalmente customizáveis pois permitem que seus elementos possam mudar apenas passando parametros a eles. Isso quer dizer que o mesmo componente pode ser reutilizado várias vezes , mudando dinamicamente os seus parametros. Por exemplo um card que tenha um titulo H1, uma imagem e uma legenda. A cada vez que for renderizada na página, o conteudo de cada elemento é trocado, mas o estilo do card é o mesmo para todos;
* ***Gerenciamento de Estados (States)*** => é quando a página executa um comportamento baseado no estado de um componente. Por exemplo, se uma imagem tem uma legenda escrita *"disponível"*, essa imagem será colorida. Se essa mesma imagem tiver a legenda mudada para *"indisponível"* a imagem muda para preto e branco. Essa mudança do texto seria o estado que altera o comportamento(Css) da imagem. Isso é util quando um estado de um componente precisa alterar vários outros componentes ao mesmo tempo. Geralmente esse gerenciamento é feito com bibliotecas como a NGXS e NGRX;
* ***Roteamento(Routes)*** => é a camada responsável por trocar os componentes exibidos na tela bastando apenas fazer a troca de url, mas sem precisar recarregar a página ou acessar outra página HTMl. Esse recurso cria uma sensação de navegação entre páginas, mas na verdade o que realmente está acontecendo é a troca dos componentes exibidos.Ex: uma página de login *(meusite.com/login*) exibe dois componentes de caixa de texto. Após a lógica do login ser executada, o site redireciona(roteia) para a pagina de home *(meusite.com/home)*, ou seja, esconde os componentes do login e exibe os componentes do home. No angular é utilizada a biblioteca *Angular RoutingModular*; 
* ***Render*** => é a camada responsável por interpretar as 3 camadas anteriores e informar ao browser o que deve ser desenhado na tela. Basicamente o render avalia a rota (url), verifica os estados do componentes que serão exibidos e pega os componentes selecionados e entrega pro browser poder desenhar eles na tela.

## Conhecendo o Angular.io

Acessando esse [link](https://www.angular.io) dá pra acessar o site do Angular e sua documentação, junto com tutoriais e conteúdos que facilitam o desenvolvimento de paginas com esse framework.