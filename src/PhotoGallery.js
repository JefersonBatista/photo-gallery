import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import Button from './Button'

function PhotoGallery(props) {
    const { photos } = props

    const [gallery, setGallery] = useState(photos)
    const [filteredGallery, setFilteredGallery] = useState(gallery)
    const filterRef = useRef()

    const handleRemove = (removed) => {
        const newGallery = gallery.filter(([_, tag]) => 
            tag !== removed
        )

        setGallery(newGallery)
    }

    const handleRestore = () => {
        setGallery(photos)
    }

    const filterGallery = useCallback((text) => {
        const newGallery = gallery.filter(([_, tag]) => 
            tag.includes(text.toLowerCase())
        )

        setFilteredGallery(newGallery)
    }, [gallery])

    const handleFilter = ({ target }) => {
        filterGallery(target.value)
    }

    useEffect(() => {
        filterGallery(filterRef.current.value)
    }, [filterGallery])

    const renderPhoto = (sample, _) => {
        const [img, tag] = sample
        return (
            <div>
                <img src={img} alt="Imagem não existe." />
                <br />
                <label>{tag}</label>
                <br />
                <Button onClick={() => handleRemove(tag)}>
                    Remover
                </Button>
            </div>
        )
    }

    return (
        <div>
            <Button onClick={handleRestore}>Restaurar imagens</Button>
            <br /><br />
            <div>
                <label>Filtrar por tag: </label>
                <input ref={filterRef} type="text" onChange={handleFilter} />
            </div>
            <br />
            <div className="Photos">
                {filteredGallery.map(renderPhoto)}
            </div>
        </div>
    )
}

export default memo(PhotoGallery)
