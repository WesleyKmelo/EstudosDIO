# Arquitetura de um WebComponent

A principal vantagem de um web component é a reutilização de código, em qualquer projeto e não só no projeto atual.

Os ***components*** são estruturas de códigos javascript que auxiliam quando se precisam de repetir o mesmo código.

Por exemplo , um botão. As vezes é necessário criar várias vezes um mesmo estilo de botão na página e para nao ter que ficar escrevendo o mesmo código repetidamente, é utilizado o conceito de *component*.

Mas, ao se criar vários botões. por exemplo, muitas vezes o nome do botão não pode ser o mesmo. Então para resolver esse problema é utilizado uma passagem de parametros chamado ***Props***.

Então um *web Component* basicamente é composto de : 
* ***Elementos*** => que são as tags HTML ;
* ***Style*** => um CSS apenas daquel component;
* ***Props*** => são parametros que serão utilizados pelos elementos para uma maior customização. Só funciona se o modo *`open`* foi definido na criação do componente.

A passagem de um parametro é feita quando na hora que o seletor ou nome do componente for chamado, um atributo for passado no nome do seletor.

Por exemplo, um component foi criado e nele foi adicionado um elemento H1. Quando um webComponente é criado, automaticamente o parametro Props é criado, mesmo que não seja utilizado. Quando um atributo é definido, o valor desse atributo é adicionado ao ***Props*** e assim ele pode ser acessado *(junto com Props)* dentro da lógica do webComponent.
`chamando um componente:`
```js
    <ComponentTexto></ComponenteTexto>
```
`passando um atributo qualquer`
```js
<ComponentTexto teste="texto"></ComponenteTexto>
```
`Acessando no component`
```js
class ComponenteTexto extends ...
...
const t = this.getAttribute("teste")
...
```
No exemplo acima foi criado o atributo *"teste"* que foi adicionado ao *Props* automaticamente e o seu valor  foi capturado através do método `.getAttribute`.

## Estilização de um WebComponente

Um WebComponente pode ter uma estilização própria . Isso é importante porque em projetos em andamento, a criação do componente e principalmente a estilização dele não vai impactar no funcionamento do projeto.

Pra isso , na criação do componente é criado uma *template string* com a tag *style* e dentro dessa tag é adicionado todo o Css necessário.

```js
const elementShadow = this.attachShadow...
const style = document.createElement("style");
style= `...Css`

//aplicando esse estilo ao projeto
elementShadow.appendChild(style);
```

