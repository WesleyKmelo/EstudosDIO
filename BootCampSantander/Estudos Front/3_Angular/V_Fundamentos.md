# Instalando o Angular 

Existem várias formas de instalar o Angular na máquina, com muitos tutoriais na Net. Sendo assim, esse texto é apenas para dar um norte do que precisa ser feito:
* Antes de tudo é necessário instalar o *NodeJS*. Acessando o site do [NodeJS](https://nodejs.org/en) e escolhendo a versão ***LTS*** vai ser baixado todas as dependências que inclui o *npm* para execução da parte *backend* do Anguaar;
* Instalar o ***Angular CLI***,  logicamente de preferência globalmente, pois o Angular é um framework e como tal a sua instalação vai liberar ferramentas que facilitam a criação dos WebComponentes. Acessando esse [link de setup](https://nodejs.org/en) é possível verificar os comandos para instalação.
* Editor de Códigos de sua preferência. No caso desse tuturial está sendo utilizado *VsCode*.

Após providenciado a instalação do *NodeJS* junto do *npm* e escolhido o editor basta utilizar..Simples Assim.

# Criando uma aplicação Angular

Mais uma vez, existem diversos tutoriais na Net sobre como fazer isso e inclusive muito bem detalhados. Aqui é apenas um estudo pra orientar ou até mesmo filtrar essas diversas formas pq as vezes no começo chega a confundir um pouco mesmo:

O *Angular CLI* é um prompt onde se digitam os comandos conforme constam na documentação. Em Linux, bats apenas utilizar o **Terminal**. Em Windows, pode ser utilizado o **CMD** normal, ou então o terminal que vemm instalado no VSCode por default:

* Escolha a pasta onde vai ser criado o projeto e através do **Terminal** digite

    `ng new nomeDoApp`
* Por ser a primeira vez pode demora um pouco mas quando finalizar, vai ser criada uma pasta com o nome do app escolhido.
* digite `cd nomeDoApp`  para entrar na pasta e em seguida `code .` para abrir a aplicação dentro do VSCode.
* Após todas alterações necessárias basta digitar o comando `ng serve` no terminal, lembrando que o terminal tem que estar apontando a pasta onde está os arquivos da aplicação. Após rodar o comando o **Terminal** vai exibir uma url pra ser acessada e exibir a aplicação localmente.

## Diretivas
Diretiva são códigos que o Angular usa pra manipular e alterar a DOM dinâmicamente

### Diretivas de atributo
Alteram a aparência ou comportamento de um elemento, componente ou outra diretiva

* **NgClass** - Adiciona ou remove conjunto de classes CSS
* **NgStyle** - Adiciona ou remove um conjunto de estilos ao HTML
* **NgModel** - Adiciona vinculação de dados bidirecional a um elemento de um formulário


### Diretivas estruturais
Moldam ou remodelam a estrutura da DOM, adicionando ou removendo elementos na tela

* **NgIf** - Condicional que verifica se modelo deve ser visualizado ou não
NgFor - repete um elemento para cada item em uma lista
* **NgSwitch** - Utilizado para alternar entre comportamentos alternativos