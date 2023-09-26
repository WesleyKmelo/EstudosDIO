# Funções e Interfaces

As funções em Typescript tambem seguem um modelo a ser preenchido

```js
function somar(x:number,y:number):number{
    return x+y;
}
```

Nesse caso está declarado que a função somar **deve** receber dois parametros do tipo number e o retorno da função **deverá** ser tambem do tipo number.

Mas se o retorno da função não estiver explicito e a função receber os parametros corretos, automaticamente o Typescript detecta qual tipo deve ser retornado baseado nos parametros de entrada.

```js
function Hello(name:string){
    return `Hello ${name}`;
}
```

Da mesma forma que um array Multitype, uma função tambem pode receber e retornar multitypes dependendo do que for declarado, bastando apenas acecentar o operador "|" entre os tipos declarados.

```js
function printToTeste(teste: string | number){
    return teste;
}
```

Na prática a função printToTeste pode receber um string ou um number e vai retornar o q for passado no parametro.

Tambem existem as funções que retornam *Promises*. Uma função *async* sempre vai retornar uma Promise. Por isso é importante que o tipo de retorno tambem seja tipado afim de se obter o resultado esperado

```js
async function printToTable(id:number):Promise<string>{
    return "promise"
}
```

## Interfaces

A interface é um tipo de contrato parecido com o type. Inclusive a estrutura é parecida. Enquanto que o type recebe um conjunto de caracteristicas que devem ser seguidas, a interface declara as caracteristicas que devem ser implementadas

```js
interface obj1{
    id:number,
    name:string
}
```

A diferença principal é que o ***type*** é utilizado quando se refere apenas a objetos que precisamos ser de um tipo especifico. Enquanto que a ***interface*** é usada quando estamos trabalhando com classes em Javascript.

Ambas as formas podem ser usadas, mas o que é mais utilzado são as interfaces principalmente quando utilizadas em classes..