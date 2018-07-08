Create Database wallet2;
use wallet2;

UPDATE users set (id_user = '1', email ='oscar@ucol.mx', 'Oscar Eduardo', 'oscar1') where `id_user` = '1';

select * from movements where id_wallet = 1 AND id_movement_type = 1 OR id_movement_type = 2 group by id_wallet;

Select * from movements where id_wallet = 1 AND id_movement_type = (SELECT id_movement_type WHERE id_movement_type between 1 AND 2);

insert into users (email, `name`, `password`)values('eduardo@ucol.mx', 'Eduardooo', 'eduardo1');

DELETE from users where id_user = 7;

set foreign_key_checks = 0;

-- select * from frequencys;
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
`password` varchar(30),
`name` Varchar(30)
);


 select * from movements;
 delete from movements where id_user = 1;
Create Table movements(
    id_movement int not null primary key auto_increment,
    amount int,
    description Varchar(50),
    `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_movement_type int,
    id_frequency int,
    id_user int,
    foreign key (id_movement_type) references movement_types(id_movement_type),
    foreign key (id_frequency) references frequencys(id_frequency),
    foreign key (id_user) references users(id_user)
);
