import {Route, Routes} from 'react-router-dom'
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
import FavouriteJokes from "../components/Jokes/FavouriteJokes";
import JokeItem from "../components/Jokes";

const Router = () => {
    return(
        <HistoryRouter history={history}>
            <Routes>
                <Route element={JokeItem}/>
                <Route path='/fav-jokes' element={FavouriteJokes}/>
            </Routes>
        </HistoryRouter>
    )
}

export default Router