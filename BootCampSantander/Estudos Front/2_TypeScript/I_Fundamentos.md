# Linguagem TypeScript

A linguagem *Typescript* é considerada um *superset* para o **Javascript**. Isso quer dizer que ela agrega conceitos ao código Javascript de forma a facilitar a programação . Um desses conceitos seria a tipagem de variáveis.

A tipagem das variáveis é importante pois permite que possiveis erros de tipos de variáveis sejam previstos antes do código ser executado. Por exemplo: no Javascript normal, uma variável pode receber qualquer tipo de dados , inclusive durante sua execução. Então , numa função que soma dois numeros inteiros , se em algum momento for passado uma *string* para uma das variáveis, o código vai ser executado da mesma forma. E se o resultado esperado for um numero inteiro, o que vai aparecer com certeza é a soma de um numero junto de uma string. COm certeza não é isso que se espera.

O TypeScript veio pra resolver esse problema pois na hora do desenvolvimento do código, se em algum momento for passado essa string, na hora o TypeScript vai lançar o erro.

O que o TypeScript faz basicamente é pegar o código digitado e tranformar em linguagem Javascript através do ***NodeJS***. Esse processo é chamado de ***Transpilação***.

Ou seja, enquanto o Javascipt só mostra os erros em tempo de execução *(quando o código é executado)*, o Typescript sempre vai mostrar os erros em tempo de desenvolvimento.

Ex : 
```js
let a= 1;
let b = 2;

function somar(a,b){
return a + b;
}
``` 
No caso acima , se a variavel ***b*** for omitida, ou seu valor for substituido por uma string, a *função somar* vai ser executada da mesma forma, retornando um *undefined*. Ou seja , o erro só vai aparecer na hora da execução do código.

No Typescript não. Na hora que a variável fosse omitida ou mudado seu tipo, o erro apareceria na hora do desenvolvimento do código:

Ex:
```js
type A = {a:number;}
type B = {b:number;}

function somar (numA : A, numB : B): number{
    return numA + numB;
}
```

Traduzindo: A função somar vai receber dois argumentos do tipo *number* e deve retornar um resultado do tipo *number*. Na hora do desenvolvimento desse código, se alguma condição não for satisfeita , então a própria IDE vai lançar um erro .

Resumindo: a vantagem do Typescript é justamente prever os tipos de dados que devem ser esperados na execução do código. Isso ajuda a evitar a situação de ter que descobrir algum erro na hora que o código vai pra produção, por exemplo.

O Typescript é uma dependencia que pode ser instalada tanto localmente como globalmente.

Para instalar o TypeScript no projeto basta digitar
 ```js
 npm install typescript -g(globalmente) -D(localmente)
```
Em seguida basta criar o arquivo na raiz do projeto com a extensão ***.ts***.