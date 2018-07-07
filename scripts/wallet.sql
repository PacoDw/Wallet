Create Database wallet;
use wallet;


select * from frequencys;
Create Table frequencys(
id_frequency int not null primary key auto_increment,
`name` Varchar(50)
);


select * from movement_types;
Create Table movement_types(
id_movement_type int not null primary key auto_increment,
`name` Varchar(50)
);


select * from users;
Create Table users(
id_user int not null primary key auto_increment,
email Varchar(30),
`name` Varchar(30)
);


select * from wallets;
Create Table wallets(
    id_wallet int not null primary key auto_increment,
    id_user int,
    foreign key (id_user) references users(id_user)
);


select * from movements;
Create Table movements(
    id_movement int not null primary key auto_increment,
    income_type Varchar(30),
    amount int,
    decription Varchar(50),
    `date` date,
    income_option Varchar(50),
    id_frequency int,
    id_wallet int,
    foreign key (id_frequency) references frequencys(id_frequency),
    foreign key (id_wallet) references wallets(id_wallet)
);


select * from movement_options;
Create Table movement_options(
    id_movement_option int not null primary key auto_increment,
    `name` Varchar(30)
);