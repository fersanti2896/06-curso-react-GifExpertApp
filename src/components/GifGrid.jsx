import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    /**
     * Funcón que obtiene las imagenes y la actualiza al useState.
     */
    const getImages = async() => {
        const newImages = await getGifs( category );

        setImages(newImages);
    } 

    useEffect(() => {
        getImages();    
    }, []);
    
    return (
        <>
            <h6>{ category }</h6>
            <div className='card-grid'>
                { 
                    images.map( (image) => ( 
                        <GifGridItem key={ image.id } 
                                     title={ image.title }
                                     url={ image.url } /> 
                    ) ) 
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

GifGrid.defaultProps = {
    category: 'Shrek'
}
