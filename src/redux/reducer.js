const SET_POST_LIST = 'SET_POST_LIST';
const SET_SKIP_POSTS = 'SET_SKIP_POSTS';

const initialState = {
	postList: [],
	limit: 10,
	//currentPage: 1,
	skip: 0,
	total: 0,
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POST_LIST:
			return {
				...state,
				postList: action.payload.posts,
				total: action.payload.total,
			};
		case SET_SKIP_POSTS:
			return { ...state, skip: action.payload };
		default:
			return state;
	}
};

export const setListPost = (listPost) => ({
	type: SET_POST_LIST,
	payload: listPost,
});
export const setSkipPosts = (skip) => ({ type: SET_SKIP_POSTS, payload: skip });
