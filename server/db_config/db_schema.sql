-- DB NAME cinecurate_local

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(1024) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- add createdat/updatedat
-- ALTER TABLE users 
-- ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
-- ADD COLUMN updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();


-- insert fake users


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
    review TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- INSERT INTO reviews (user_id, movie_id, movie_title, review_type, rating, review)
-- VALUES ('d39741c8-3e02-41ec-a3d2-6a9ba5bd2097','438631','Dune','cinematography','9','the cinematography was dope af');

-- INSERT INTO reviews (user_id, movie_id, movie_title, review_type, rating, review)
-- VALUES ('f3c4e705-6622-4a3d-99bb-049dca2fbcd3','438631','Dune','cinematography','2','idk what I am talking about when it comes to cinematography');


-- alter review table
-- ALTER TABLE reviews 
-- ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
-- ADD COLUMN updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

-- END OF REVIEW TABLE

-- START OF PREF TABLE
CREATE TABLE preferences (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users (id) ON DELETE CASCADE,
    cinematography INT NOT NULL check(cinematography >=1 and cinematography <= 8),
    story INT NOT NULL check(story >=1 and story <= 8),
    acting INT NOT NULL check(acting >=1 and acting <= 8),
    art INT NOT NULL check(art >=1 and art <= 8),
    sound INT NOT NULL check(sound >=1 and sound <= 8),
    hmu INT NOT NULL check(hmu >=1 and hmu <= 8),
    editing INT NOT NULL check(editing >=1 and editing <= 8),
    vfx INT NOT NULL check(vfx >=1 and vfx <= 8) 
);

-- seed data for PREF

--END OF PREF TABLE 

--START OF WISHLIST TABLE
CREATE TABLE wishlist (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users (id) ON DELETE CASCADE,
    movie_id INT,
    movie_title VARCHAR(50),
    poster VARCHAR,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- seed data for WISHLIST

-- END OF WISHLIST TABLE