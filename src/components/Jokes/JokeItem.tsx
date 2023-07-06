import React, {useEffect, useRef, useState} from 'react';
import {useGetRandomJokeQuery} from "../../services/api/jokesApi";
import {Link} from "react-router-dom";

const JokeItem = () => {
    const { data, refetch } = useGetRandomJokeQuery();
    const [startTimer, setStartTimer] = useState<boolean>(false);
    const [favoriteJokes, setFavoriteJokes] = useState([]);

    const timerRef = useRef<number | null>(null);

    const onGetRandomJoke = () => {
        refetch();
    };

    const onGetJokeEachThreeSec = () => {
        setStartTimer((prev) => !prev);
    };

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


    useEffect(() => {
        if (startTimer) {
            timerRef.current = setInterval(() => {
                refetch();
            }, 3000);
        } else {
            clearInterval(timerRef.current!);
        }

        return () => {
            clearInterval(timerRef.current!);
        };
    }, [startTimer, refetch]);



    return (
        <div>
            <h2>{data?.value}</h2>
            <button style={{ background: '#46B672', color: 'white'}} onClick={onGetRandomJoke}>Get Random Joke</button>
            {' '}
            <button style={{ background: '#CFAD32', color: 'white'}} onClick={onGetJokeEachThreeSec}>
                {startTimer ? "Stop Timer" : "Start Timer"}
            </button>
            {' '}
            <button style={{ background: '#4478B3', color: 'white'}} onClick={() => toggleFavorite(data?.value)}>{favoriteJokes.includes(data?.value) ? 'Remove from Favorites' : 'Add to Favorites'}</button>
            <br />
            <br />
            <br />
            <Link to='/fav'>Go to fav jokes</Link>
        </div>
    );
};

export default JokeItem;