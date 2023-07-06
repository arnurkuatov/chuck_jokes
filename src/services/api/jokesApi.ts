import {baseApi} from "./baseApi";
import {TRandomJokes} from "../../share/types/TJokes";

const baseUrl = 'https://api.chucknorris.io/jokes'

export const jokesApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getRandomJoke: build.query<TRandomJokes, void>({
            query: () => ({
                url: `${baseUrl}/random`,
            })
        })
    })
})

export const { useGetRandomJokeQuery } = jokesApi