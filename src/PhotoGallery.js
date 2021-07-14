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
                <Button onClick={() => handleRemove(tag)}>
                    Remover {tag}
                </Button>
            </div>
        )
    }

    return (
        <div>
            <Button onClick={handleRestore}>Restaurar imagens</Button>
            <div>
                <label>Filtrar por tag: </label>
                <input ref={filterRef} type="text" onChange={handleFilter} />
            </div>
            {filteredGallery.map(renderPhoto)}
        </div>
    )
}

export default memo(PhotoGallery)
