DROP DATABASE if exists techblog_db;

CREATE DATABASE techblog_db;

\c techblog_db;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Posts (
   id SERIAL PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   content TEXT NOT NULL,
   user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE 
);

CREATE TABLE Comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES Posts(id) ON DELETE CASCADE
);