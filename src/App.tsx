import './App.css'
import {Route,  Routes} from 'react-router-dom';
import JokeItem from "./components/Jokes";
import FavouriteJokes from "./components/Jokes/FavouriteJokes";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<JokeItem />} />
            <Route path="/fav" element={<FavouriteJokes />} />
        </Routes>
    )
}
