export default function Movie({ movie }) {
    return (
        <>
            <div className="img-container">
                <img src={movie.image} alt={movie.title} />
            </div>
            <div className="content">
                
            </div>
        </>
    )
}