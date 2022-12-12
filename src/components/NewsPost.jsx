import React from 'react';

export const NewsPost = (props) => {
	const post = props.post;

	return (
		<div className="card">
			<div className="card-body">
				<h2 className="card-title fw-lighter">{post.title}</h2>
				<p className="card-text">{post.body}</p>
			</div>
			<div className="card-footer text-muted fw-lighter">
				<span>
					<b>reactions:</b> {post.reactions}
				</span>{' '}
				|{' '}
				<span>
					<b>user:</b> {post.userId}
				</span>{' '}
				|{' '}
				<span>
					<b>tags:</b> {post.tags}
				</span>
			</div>
		</div>
	);
};
