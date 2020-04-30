import React from 'react';
import { useDispatch } from 'react-redux';
import favoriteReducer from './favoriteReducer';

function Album(props) {
	const dispatch = useDispatch();
	return (
		<div className="album">
			<div className="image-wrapper">
				<button className="add-favorite" onClick={() => dispatch(favoriteReducer(props.thumbnailUrl))}>Add to Favorites</button>
				<img src={ props.thumbnailUrl } />
			</div>
			<p>{ props.title }</p>
		</div>
	);
}

export default Album;