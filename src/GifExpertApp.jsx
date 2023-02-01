import { useState } from 'react';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'React', 'Angular', 'Vue' ]);
    
    const addCategory = () => {
        setCategories([ ...categories, 'Entity Framework']);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de Gifs */}
            <button onClick={ addCategory }>Agregar</button>
            <ol>
                { categories.map( cat => {
                    return <li key={ cat }>{ cat }.</li>
                } ) }
            </ol>
                {/* Gif Item */}
        </>
    )
}
