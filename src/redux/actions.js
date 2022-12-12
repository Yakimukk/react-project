import axios from 'axios';
import { setListPost } from './reducer';

export const getListPost = (limit, skip) => {
	return async (dispatch) => {
		const res = await axios.get(
			`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
		);
		dispatch(setListPost(res.data));
	};
};

export const getPost = async (id, setPost) => {
	const res = await axios.get(`https://dummyjson.com/posts/${id}`);
	setPost(res.data);
};

export const getComments = async (id, setComments) => {
	const res = await axios.get(`https://dummyjson.com/posts/${id}/comments`);
	setComments(res.data.comments);
};
