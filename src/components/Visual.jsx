import axios from "axios"
import { useEffect, useState } from "react"
import Movie from './Movie'

export default function Visual({ index }) {

    const [ movie, setMovie ] = useState()

    useEffect(() => {
        const fetch = async () => {
            console.log(index)
            const response = await axios.get(`http://localhost:3000/movies/${index}`)
            console.log(response.data)
            setMovie(response.data)
        }
        fetch()
    }, [index])

    return (
        <>
            {movie ? (
                <Movie movie={movie}/>
            ) : (
                <>
                    <div className="icon-container">
                        <img src="../public/icon.png" alt="CinéVerse" />
                    </div>
                    <h1>CinéVerse</h1>
                </>
            )}
        </>
    )
}