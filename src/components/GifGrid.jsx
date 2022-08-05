import PropTypes from 'prop-types';
// hooks
import useFechGifs from '../hooks/useFechGifs.js';
// Components
import {GifItem} from './';

const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFechGifs(category);

  return (
    <>
    <h2>{category}</h2>
    <div className="card-grid">
      {gifs.map((img) =>
        <GifItem key={img.id} {...img} />
      )}
    </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string
};



export { GifGrid };