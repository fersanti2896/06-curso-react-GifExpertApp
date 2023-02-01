import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'React', 'Angular', 'Vue' ]);
    
    /**
     * Función que agrega una categoría al arreglo de categorías.
     * @param {string} newCategory Ejemplo: Shrek
     */
    const onAddCategory = ( newCategory ) => {
        const cleanCategory = newCategory[0].toUpperCase() + newCategory.substring(1).toLowerCase();

        if (categories.includes(cleanCategory)) return;

        setCategories([ ...categories, cleanCategory]);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory newCategory={ onAddCategory }/>

            {/* Listado de Gifs */}
            <ol>
                { categories.map( cat => {
                    return <li key={ cat }>{ cat }.</li>
                } ) }
            </ol>
                {/* Gif Item */}
        </>
    )
}
