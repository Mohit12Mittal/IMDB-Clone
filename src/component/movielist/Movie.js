import React,{ useEffect, useState} from 'react';
import Cards from '../card/Cards';
import "./Movies.css"
import { useParams } from 'react-router-dom';

const Movie = () => {
    const [Movie, setMovie] = useState([])
    const {type} = useParams()

    

    useEffect(() => {
        getData()  // eslint-disable-next-line
    }, [type]);

    const getData =() =>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "top_rated"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data.results));
    }
  return (
    <div className="movie__list">
            <h2 className="list__title">{(type ? type : "TOP_RATED").toUpperCase()}</h2>
            <div className='list__cards'>
                {
                   Movie?.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
            </div>
  )
}

export default Movie;