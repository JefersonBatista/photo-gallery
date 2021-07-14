import React from 'react'
import PhotoGallery from './PhotoGallery'
import './App.css'

function App() {
    const photos = [
        ["http://placeimg.com/300/200/people", "pessoas"],
        ["http://placeimg.com/300/200/animals", "animais"],
        ["http://placeimg.com/300/200/tech", "tecnologia"],
        ["http://placeimg.com/300/200/nature", "natureza"],
        ["http://placeimg.com/300/200/arch", "arquitetura"],
        ["http://placeimg.com/300/200/any", "aleatório"]
    ]

    return (
        <div className="App">
            <h1>Galeria de fotos</h1>
            <PhotoGallery photos={photos}/>
        </div>
    )
}

export default App;
