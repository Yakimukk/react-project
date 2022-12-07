import React from 'react';

export const Comment = (props) => {
  const comment = props.comment;

  return (
    <li
      className="list-group-item news d-flex justify-content-start align-items-center"
      key={comment.id}
    >
      <div>
        <p>{comment.body}</p>
        <span className="text-muted fw-lighter">
          <b>user:</b> {comment.user.username}
        </span>
      </div>
    </li>
  );
};
