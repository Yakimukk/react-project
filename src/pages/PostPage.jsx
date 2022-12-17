import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewsPost } from '../components/NewsPost';
import { Comment } from '../components/Comment';
import { getPost, getComments } from '../redux/actions';
import { Loader } from '../components/Loader';

export const PostPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			getPost(id, setPost);
			getComments(id, setComments);
			setLoading(false);
		}, 2000);
	}, [id]);

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				post && (
					<div className="container">
						<h3 className="fw-lighter mt-3">Post:</h3>
						<NewsPost post={post} />
						<h4 className="fw-lighter mt-3">Comments:</h4>
						{comments && (
							<ul className="list-group mt-3">
								{comments.map((comment) => (
									<Comment key={comment.id} comment={comment} />
								))}
							</ul>
						)}
					</div>
				)
			)}
		</Fragment>
	);
};
