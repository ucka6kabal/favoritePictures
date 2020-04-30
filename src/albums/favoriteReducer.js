const favoriteReducer = (img) => {
	return {
		type: 'ADD_TOFAVORITE',
		payload: {
				favoritePics: img
		}
	}
}

export default favoriteReducer;