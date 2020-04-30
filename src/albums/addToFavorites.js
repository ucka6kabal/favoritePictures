const addToFavorites = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TOFAVORITE':
			if(state.some(el => el === action.payload.favoritePics))
					return state;
			else return state.concat([action.payload.favoritePics]);
		default:
			return state;
	}
}

export default addToFavorites;