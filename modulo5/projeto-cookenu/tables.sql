-- Active: 1654786866903@@35.226.146.116@3306@silveira-21814648-alex-kalawatis
CREATE TABLE IF NOT EXISTS `cookenu-users`(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
ALTER TABLE `cookenu-users` ADD COLUMN role VARCHAR(255) DEFAULT "NORMAL";
CREATE TABLE IF NOT EXISTS `cookenu-recipes`(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date VARCHAR(100) NOT NULL,
    user_id VARCHAR(255),
    FOREIGN KEY(user_id) REFERENCES cookenu-users(id)
);