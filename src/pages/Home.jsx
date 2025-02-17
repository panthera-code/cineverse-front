import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate()
    const handleBrowser = () => {navigate('/browse')}

    return (
        <>
            <div className="icon-container">
                <img src="../public/icon.png" alt="CinéVerse" />
            </div>
            <h1>CinéVerse</h1>
            <button onClick={handleBrowser} className="access">Accéder à CineVerse</button>
        </>
    )
}