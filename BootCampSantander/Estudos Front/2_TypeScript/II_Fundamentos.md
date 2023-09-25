# Executando Códigos Typescript

Para execução dos códigos Typescript é necessario antes ter instalado o NodeJs instalado na máquina. Os códigos typescript depois que são transpilados, se transformam em códigos Javascript, o que possibilitam ser executados pelo Node.

Pra funcionar corretamente, o arquivo com extensão ***.ts*** deve ser transpilado antes através do comando 

`npx tsc caminho do arquivo`

Lembrando que esse comando é executado pelo terminal na pasta onde o arquivo está. *NPX* => executa e *TSC* => transpilador do Typescript.

Após isso basta executar o arquivo que foi gerado pelo *TSC* através do comando 

`node caminho_do_arquivo_js`

## Configurando o arquivo TSCONFIG

Os comandos acima servem muito bem quando são poucos códigos, mas quando o projeto é muito grande, ou quando existem muitos arquivos ***.ts*** para converter?

Por isso existe uma facilidade do TYpescript , que é o ***tsconfig*** que é justamente um arquivo com varias configurações pra ajudar no projeto. Dentre elas, resolver o problema de quando o arquivo for transpilado , se não for determinado uma pasta de saída dos arquivos, então o arquivo gerado pode apresentar erros de duplicata.

Pra gerar esse arquivo, na raiz do projeto e pelo terminal digita o comando 

`npx tsc --init`

Depois , é gerado um arquivo JSON e ai é só buscar as propriedades necessárias .

Poe exemplo:
* especificar onde estao todos arquivos .ts do projeto 
`"rootDir":Local_arquivos_.ts`

* especificar um diretorio pra saida dos arquivos transpilados
`"outDir":local_saida\nome_arq_saida`

Após o procedimento de inicialização do aqruivo e após as modificações necessárias, basta apenas executar ocomando 

`npx tsc`

no terminal para executar a transpilação dos arquivos. E depois 

`node build\nome_arquivo.js`


Existe ainda uma forma de automatizar esse processo criando um script de execução no arquivo ***package.json***

Na seção *"scripts"* do arquivo ***package.json*** adiciona uma linha chamada , por exemplo, "start" e como parâmetros adiciona os comandos que transpila seguidos de *&&* e o comando que executa :

```js
"scripts":{
    "start": "npx tsc && node build\arquivo.js",
},
```

Ai basta digitar no terminal o comando 

`npm run start`

para que o script seja executado.

Para saber mais sobre TypeScript acesse [esse link](https://www.typescriptlang.org/pt/)