-- DB NAME cinecurate_local

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(1024) NOT NULL,
    first_name VARCHAR(50) NOT NULL
);

-- insert fake users
INSERT INTO users (email, username, password, first_name)
VALUES ('tony@tony.com', 'tv123', 'larrylarry', 'tony');

CREATE TABLE reviews (
    id BIGSERIAL
    movie_id INT
    user_id 
    type
    movie_title VARCHAR(50)
    rating INT
    review TEXT 
)