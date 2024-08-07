create table Login(
ID int primary key,
Nome varchar(100),
Email varchar(100),
Senha varchar(245),
Ativo boolean default true
);

create table Post(
ID int primary key,
Titulo varchar(200),
Imagem varchar(300),
Descrição varchar (300)
);

create table Fichas(
ID INT PRIMARY KEY,
NomePersonagem varchar(300),
Raça varchar(200),
Classe varchar(200),
Habilidades varchar(300),
Inventario varchar(300),
História varchar(300),
Anotações varchar(500),
Perícias int,
Armadura int,
Dano int,
Sanidade int,
Vida int,
Mana int,
LoginID int,
foreign key (LoginID) references Login(ID)
);