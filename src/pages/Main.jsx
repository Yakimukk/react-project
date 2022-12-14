import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../components/Post';
import { getListPost } from '../redux/actions';

export const Main = () => {
	const dispatch = useDispatch();
	const { postList, limit, total } = useSelector((state) => state.listPost);
	const [active, setActive] = useState(1);
	const [skip, setSkip] = useState(0);
	const [pages, setPage] = useState([]);

	const pagesCount = Math.ceil(total / limit);

	useEffect(() => {
		for (let i = 1; i <= pagesCount; i++) {
			setPage((pages) => [...pages, i]);
		}
	}, [pagesCount]);

	useEffect(() => {
		dispatch(getListPost(limit, skip));
	}, [skip]);

	useEffect(() => {
		const interval = setInterval(
			() => dispatch(getListPost(limit, skip)),
			60000
		);
		return () => clearInterval(interval);
	}, [skip]);

	const onClickUpdate = () => {
		dispatch(getListPost(limit, skip));
	};

	const onClickPag = (elem) => {
		const sk = (elem - 1) * limit;
		setSkip(sk);
		dispatch(getListPost(limit, sk));
		setActive(elem);
	};

	return (
		<Fragment>
			<div className="container">
				<button className="mb-3 btn btn-secondary" onClick={onClickUpdate}>
					Update
				</button>
			</div>
			{postList.map((post) => (
				<Post key={post.id} post={post} />
			))}
			<div className="pages">
				{pages.map((page, index) => (
					<span
						className={`page ${active === page ? 'current-page' : ''}`}
						key={index}
						onClick={() => onClickPag(page)}
					>
						{page}
					</span>
				))}
			</div>
		</Fragment>
	);
};
