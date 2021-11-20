-- DB NAME cinecurate_local

CREATE TABLE users (
    id BIGSERIAL
    username VARCHAR(50)
    password VARCHAR(1024)
    first_name VARCHAR(50)
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