import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = ({ handleClose, show, children }) => {
  const	favoritePics = useSelector(state => state.addToFavorites);
  const showHideClassName = show ? "favorite-modal display-block" : "favorite-modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="favorite-modal-main">
        <ul> 
					{
						favoritePics.map((picture,inx) =>
              <li key={inx}>
                <img src={picture} alt=""/>
              </li>
						)
					}
        </ul>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
  
export default Favorites;