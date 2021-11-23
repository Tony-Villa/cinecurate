-- DB NAME cinecurate_local

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(1024) NOT NULL,
    first_name VARCHAR(50) NOT NULL

    
);

-- add createdat/updatedat
ALTER TABLE users 
ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
ADD COLUMN updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();


-- insert fake users
INSERT INTO users (email, username, password, first_name)
VALUES ('tony@tony.com', 'tv123', 'larrylarry', 'tony');

-- END OF USER TABLE


-- START OF REVIEW TABLE
CREATE TYPE category AS ENUM ('cinematography', 'story', 'acting', 'art', 'sound', 'hmu', 'editing', 'vfx');

CREATE TABLE reviews (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users (id) ON DELETE CASCADE,
    movie_id INT,
    movie_title VARCHAR(50),
    review_type category,
    rating INT NOT NULL check(rating >=1 and rating <= 10),
    review TEXT NOT NULL
);

INSERT INTO reviews (user_id, movie_id, movie_title, review_type, rating, review)
VALUES ('d39741c8-3e02-41ec-a3d2-6a9ba5bd2097','438631','Dune','cinematography','9','the cinematography was dope af');

INSERT INTO reviews (user_id, movie_id, movie_title, review_type, rating, review)
VALUES ('f3c4e705-6622-4a3d-99bb-049dca2fbcd3','438631','Dune','cinematography','2','idk what I am talking about when it comes to cinematography');


-- alter review table
ALTER TABLE reviews 
ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
ADD COLUMN updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

-- END OF REVIEW TABLE

-- START OF PREF TABLE
CREATE TABLE preferences (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users (id) ON DELETE CASCADE,
    cinematography INT NOT NULL check(rating >=1 and rating <= 8),
    story INT NOT NULL check(rating >=1 and rating <= 8),
    acting INT NOT NULL check(rating >=1 and rating <= 8),
    art INT NOT NULL check(rating >=1 and rating <= 8),
    sound INT NOT NULL check(rating >=1 and rating <= 8),
    hmu INT NOT NULL check(rating >=1 and rating <= 8),
    eiditing INT NOT NULL check(rating >=1 and rating <= 8),
    vfx INT NOT NULL check(rating >=1 and rating <= 8) 
);

-- seed data for PREF

--END OF PREF TABLE 

--START OF WISHLIST TABLE
CREATE TABLE wishlist (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users (id) ON DELETE CASCADE,
    movie_id INT,
    movie_title VARCHAR(50),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- seed data for WISHLIST

-- END OF WISHLIST TABLE