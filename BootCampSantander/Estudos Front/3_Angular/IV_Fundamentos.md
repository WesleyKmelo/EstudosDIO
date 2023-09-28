# Binding
É o processo de passar parâmetros entre os componentes. Ou seja, quando se usa argumentos que as vezes são gerados em javascript ou typescript e eles são passados para a parte visual da aplicação. Por exemplo, labels para botão que precisam ser passados dinamicamente.

Data Binding significa associação de dados, ou seja, associar um dado a uma propriedade.

No Angular existem várias formas de se passar um dado por Binding que obedecem a certas sintaxes:
* Quando o parametro é gerado pelo componente através de código Javascript
    * *INTERPOLAÇÃO* => a forma mais simples representada por *{{ "parametro" }}*. Ex: `<H1>Hello {{ name }}</H1>`;
    * *PROPERTY BIDING* => é a forma recomendada pela documentação do Angular e representada pelo nome da parametro seguido do valor. Ex: `<H1>Hello [label]= "name" </H1>`;

* QUando o parametro é gerado pelo Template HTML, geralmente através de um evento que ocorre após alguma interação da página:
    * *EVENT BIDING* => geralmente é o nome do evento seguido do seu parametro. É muito utilizado para disparar funções após algum tipo de ação. Esses eventos são do HTML. Ex: `<button (click)="função" ></button>` ;

* Quando o parametro é gerado tanto pelo componente como pelo template HTML, temos que é um *Two Way Data Biding*:
    * *TWO WAY DATA BIDING* => [(NgModel)] = "propriedade". Resumindo: o colchetes[] indica que o parametro está vindo do componente, o parenteses() indica que tambem aceita um *event Biding* e o *NgModel* é uma diretiva do Angular, que permite que o parametro possa ser utilizado de duas formas ao mesmo tempo. Um Exemplo de utilização é um campo de entrada  de texto que já vem com um placeholder(gerado pelo componente) e ao digitar    nesse campo é disparada uma função que altera uma tag "p"(event biding) .
