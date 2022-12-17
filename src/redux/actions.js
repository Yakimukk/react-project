import axios from 'axios';
import { setListPost, setLoading } from './reducer';

export const getListPost = (limit, skip) => {
	return async (dispatch) => {
		dispatch(setLoading(true));
		const res = await axios.get(
			`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
		);
		setTimeout(() => {
			dispatch(setListPost(res.data));
			dispatch(setLoading(false));
		}, 2000);
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
