import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const FavouriteJokes = () => {
    const [favoriteJokes, setFavoriteJokes] = useState([]);

    useEffect(() => {
        const storedJokes = localStorage.getItem('jokes');
        if (storedJokes) {
            setFavoriteJokes(JSON.parse(storedJokes));
        }

        const storedFavoriteJokes = localStorage.getItem('favoriteJokes');
        if (storedFavoriteJokes) {
            setFavoriteJokes(JSON.parse(storedFavoriteJokes));
        }
    }, []);

    const toggleFavorite = (joke) => {
        if (favoriteJokes.includes(joke)) {
            const updatedFavorites = favoriteJokes.filter((favJoke) => favJoke !== joke);
            setFavoriteJokes(updatedFavorites);
            localStorage.setItem('favoriteJokes', JSON.stringify(updatedFavorites));
        } else {
            const updatedFavorites = [...favoriteJokes, joke];
            setFavoriteJokes(updatedFavorites);
            localStorage.setItem('favoriteJokes', JSON.stringify(updatedFavorites));
        }
    };

    const clearFavorites = () => {
        setFavoriteJokes([]);
        localStorage.removeItem('favoriteJokes');
    };

    return (
        <div>
            <h2>Favorite Jokes:</h2>
            <ul>
                {favoriteJokes.map((joke, index) => (
                    <li key={index}>
                        {joke}
                        <br />
                        <br />
                        <button
                            style={{ background: '#BF4C4C', color: 'white'}}
                            onClick={() => toggleFavorite(joke)}>
                            Remove from Favorites
                        </button>
                    </li>
                ))}
            </ul>
            <button style={{ background: '#8F1414', color: 'white'}} onClick={clearFavorites}>Clear Fav Jokes</button>
            <br />
            <br />
            <Link to='/'>Back to home</Link>
        </div>
    );
};

export default FavouriteJokes;