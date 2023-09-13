// essa classe foi criada pra se ter um modelo personalizado dos dados da api.
//com isso quando os dados da api chegarem e forem convertidos em json , seus valores
//serao atribuidos aos atributos desta classe que serão disponibilizados de forma global
//facilitando assim a legibilidade do código. 

class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
}
