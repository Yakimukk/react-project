const SET_POST_LIST = 'SET_POST_LIST';
const SET_LOADING = 'SET_LOADING';

const initialState = {
	postList: [],
	limit: 10,
	total: 0,
	loading: false,
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POST_LIST:
			return {
				...state,
				postList: action.payload.posts,
				total: action.payload.total,
			};
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};

export const setListPost = (listPost) => ({
	type: SET_POST_LIST,
	payload: listPost,
});

export const setLoading = (bool) => ({
	type: SET_LOADING,
	payload: bool,
});
