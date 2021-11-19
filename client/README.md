# CineCurate

## Table of Contents

- [Description](#CineCurate)
- [User Flow](#user-flow)
- [Wireframes](#Wireframes)
- [ERD](#ERD)
- [Technologies](#Technologies)

# CineCurate

CineCurate is a new type of movie review web app where users don't review an entire movie. Instead movies are broken up into major Academy Awards categories and users review one, some, or all of those categories for each movie.

Our mission is to change (or fix) the way people not only review movies, but the way they talk about movies. When someone is hanging out with friends talking about a movie they saw &mdash; whether they liked it or didn't, we want to make sure they can pinpoint why.

# User Flow

## Login/Sign Up

Upon visiting the site for the first time the user will be greeted with a login screen (with the option to sign up).

Once signed up, the user will go through an onboarding process where they will rank 8 different categories from first to last in order of importance. These will include Cinematography, Acting, Art/Production Design etc. and the user will get to choose what they think or know is important for the movie watching experience (they will be able to change these rankings whenever they want from the profile page).

# Browse

The user will have plenty of different opportunities to browse several titles.

## Search

There will be a search bar available for the user to search a movie by keywords in the title.

## Browse by:

The user will also be able to search by many different categories including (but not limited to):

- Genre
- Latest
- Most Popular
- Many more!

# Reviews

Movie reviews will live on the show page under the movie information.

## Graph

Upon visiting a movie's show page, the user will be able to see the 8 categories in a graph beside the movie information so that they can see the average score of each category at a glance.

## Written Reviews

### Reading Reviews

If the user wants a more detailed review, they can simply scroll down and be greeted with a sub navbar that will let them choose whichever category they'd like to read reviews about.

### Writing Reviews

When the user wants to contribute with a review of their own, they will simply need to navigate to the category they'd like to write about and click the add review button.

A modal will pop up and ask for both a rating (from 1 to 10) and a written review. Note: the user will not be able to submit the review if both fields are not completed.

# Profile

The user will also have a profile page where they can see, edit or delete any of the reviews they have made.

They will also be able to reorder their category rankings they completed during the onboarding process from a component on this page.

# Wireframes

# ERD

# Technologies

- PostgreSQL
- Node
- Express
- React
- pg (node-postgres)
- Nivo
- Framer Motion
- Scss
