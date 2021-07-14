import React from 'react'
import PhotoGallery from './PhotoGallery'

function App() {
    const photos = [
        ["http://placeimg.com/126/54/people", "people"],
        ["http://placeimg.com/126/54/animals", "animals"],
        ["http://placeimg.com/126/54/tech", "tech"],
        ["http://placeimg.com/126/54/nature", "nature"],
        ["http://placeimg.com/126/54/arch", "architecture"],
        ["http://placeimg.com/126/54/any", "any"]
    ]

    return (
        <div>
            <h1>Galeria de fotos</h1>
            <PhotoGallery photos={photos}/>
        </div>
    )
}

export default App;
