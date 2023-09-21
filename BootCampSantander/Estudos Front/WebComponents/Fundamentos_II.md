# Criação de componentes

Para criação de componentes de forma bem básica sem utilizar frameworks:
* É necessário saber que a criação de um *component* na realidade contem códigos javascript. Ou seja, um *component* é uma função javascript que vai criar os elementos necessários no código

* Após a criação de uma pasta src que ira conter os arquivos javscript *(seguindo as boas práticas de programação)* é necessário informar no documneto *index.html* que aqueles scripts dever ser chamados apenas após a criação do documento D.O.M através do comando :
```html
<script src="local do js" defer></script>
```
A função do `defer` é justamente apontar que aquele código só poderá ser executado após a pagina ser renderizada, ou seja , ter sido criada pelo browser.
* Em seguida o esqueleto de um component deve conter:

    * NOME DA CLASSE => que vai ser o  nome do component;
    * JUNTO AO NOME DA CLASSE => herdar o objeto HTMLElement;
    * CRIAR UM CONSTRUTOR NESSA CLASSE =>  e nesse construtor fazer uma chamada super que vai invocar o construtor do obj HTML herdado;
    * CRIAR VARIAVEL => que vai receber o método *attachShadow({mode: "open"/"closed"})*;
    * COMANDOS JAVASCRIPT;
    * DEFINIR NOME DO COMPONETE=> através do comando
    ```js
    customElements.define("apelido",Nome da Classe);
    ```


    ```js
    class CardNews extends HTMLElement{
        constructor(){
            super()
     const shadow = this.attachShadow({mode:"open"});
     shadow.innerHTML = "<h1>Hello</h1>"
        }
    }
     customElements.define("card",CardNews);
    ```

* Apos issp basta chamar o componente atraves do apelido ou tag que foi criada , nesse caso "card" ficando dessa forma 
```js
<card></card>
```