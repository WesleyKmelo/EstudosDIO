# Variáveis em TypeScript

O Typescript aceita os seguintes tipos de variáveis
* Tipo Primitivo
    * String => `let teste : string = "teste";`
    * Booleano => `let bool: boolean = false;`
    * Number => `let number: number = 10;`

* Tipo Especiais
    * Nulo => `let nulo: null = null;`
    * Indefinido => `let indef: undefined= undefined;`

* Tipo Genérico
    * Nada pra retornar=> `let r:void `
    * Retorna qualquer coisa => `let qualquer: any`


Tambem existe a possibilidade de tipar objetos . As boas práticas de programação pedem que seja criado um `type` seguido do nome do objeto e esse objeto vai receber caracteristicas do tipo *chave:valor* seguido de virgulas pra cada chava. Como demostrado exemplo abaixo:

```js
type Produto = {
    nome:string;
    valor:number
}
```

Para o objeto ser criado, basta criar uma variável do tipo *Produto* e essa variável deve ser do mesmo tipo do objeto criado

```js
let produto01 : Produto={
    nome:"prod01",
    valor: 23.2
}
```

### Arrays em TYpescript

Existem duas formas de declarar arrays em Typescript:
* `let dados:string[] = ["str1","str2","str3";]`
* `let dados : Array<string> = ["str1","str2","str3";]`

Alem disso é possivel criar arrays Multitype que possibilita criar objetos com os tipos declarados em qualquer ordem

`let dados:(string | number)[]= ["str1",01]`


#### Tuplas

Mas essa prática não é tão recomendada. Por isso existe uma forma que inclusive é melhor pois obriga o usuário a seguir o modelo criado que é a ***Tupla***.

Basicamente, a tupla é um array que deve seguir o tipo e a ordem dos tipos que foram criados.

`let boleto : [string,number,number]`

No caso acima o array boleto deve receber uma string seguida de dois valores do tipo number, nessa ordem:

`boleto = ["contaAgua",12,1234]`

