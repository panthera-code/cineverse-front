import axios from "axios"
import { useEffect, useState } from "react"
import Visual from "../components/Visual"

export default function Browse() {

    const [ movies, setMovies ] = useState([])
    const [ index, setIndex] = useState(0)

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('http://localhost:3000/movies')
            const titles = response.data.map(movie => movie.title)
            setMovies(titles)
        }
        fetch()
    }, [])

    const handleMovieClick = (selected) => {
        setIndex(selected + 1)
    }

    return (
        <div className="page">
            <div className="selection-container">
                <h2>Sélection d'un titre</h2>
                <ul className="list list-movies">
                    {movies.map((title, index) => {
                        if (index < 10) {
                            return <li key={index} onClick={() => handleMovieClick(index)}>{title}</li>
                        }
                    })}
                </ul>
                <ul className="list list-series">
                    {movies.map((title, index) => {
                        if (index >= 10) {
                            return <li key={index} onClick={() => handleMovieClick(index)}>{title}</li>
                        }
                    })}
                </ul>
            </div>
            <div className="visual-container">
                <Visual index={index} />
            </div>
        </div>
    )
}