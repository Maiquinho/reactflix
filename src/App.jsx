import { useEffect, useState } from 'react';
import { MovieRow } from './components/MovieRow';
import Tmdb from './Tmdb';

import './App.css';


export default function App (){

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {

        async function loadAll(){
            // Getting all returned data
            let list = await Tmdb.getHomeList();
            setMovieList(list);
            console.log(list);
        }

        loadAll();

    }, []);


    return (
        <div className="page">
            <section className="movie-lists">
                { movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                )) }
            </section>
        </div>
    )
}