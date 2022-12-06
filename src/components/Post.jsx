import React from "react";
import { Link } from "react-router-dom";

export const Post = (props) => { 
  const post = props.post

  return (
    <ul className="list-group container">
      <li className="list-group-item post d-flex justify-content-start align-items-center">
        <span className="me-3 text-muted">{post.id}. </span>
        <div>
          <h3><Link className="text-decoration-none text-reset fw-lighter" to={`/posts/${post.id}`}>{post.title}</Link></h3>
          <p className="text-muted fw-lighter"><span><b>reactions:</b>  {post.reactions}</span> | <span><b>user:</b> {post.userId}</span> | <span><b>tags:</b> {post.tags}</span></p>
        </div>
      </li>
    </ul>
  )
}