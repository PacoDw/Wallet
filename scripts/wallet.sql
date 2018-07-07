Create Database wallet;


Create Table frequencys(
id_frequency int not null primary key auto_increment,
`name` Varchar(50)
);


Create Table movement_types(
id_movement_type int not null primary key auto_increment,
`name` Varchar(50)
);


Create Table users(
id_user int not null primary key auto_increment,
email Varchar(30),
`name` Varchar(30)
);

Create Table wallets(
    id_wallet int not null primary key auto_increment,
    id_user int,
    foreign key (id_user) references users(id_user)
);

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


Create Table movement_options(
    id_movement_option int not null primary key auto_increment,
    `name` Varchar(30)
);