let movies = [{
        id: 0,
        name: "Star Wars - The new One",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new One",
        score: 2
    },
    {
        id: 2,
        name: "The Goodfather I",
        score: 3
    },
    {
        id: 3,
        name: "Logan",
        score: 4
    }, {
        id: 4,
        name: "Lucy",
        score: 5
    }
];


export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: parseInt(`${movies.length + 1}`),
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}