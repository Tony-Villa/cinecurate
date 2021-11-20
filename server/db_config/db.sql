-- DB NAME cinecurate_local

CREATE TABLE users (
    id SERIAL
    username VARCHAR(50) NOT NULL,
    password VARCHAR(1024) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
)

CREATE TABLE reviews (
    id BIGSERIAL
    movie_id INT
    user_id 
    type
    movie_title VARCHAR(50)
    rating INT
    review TEXT 
)