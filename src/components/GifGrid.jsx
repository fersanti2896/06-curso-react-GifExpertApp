import PropTypes, { func } from 'prop-types';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    getGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            <p>Hola mundo</p>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

GifGrid.defaultProps = {
    category: 'Shrek'
}
