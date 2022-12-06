import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsPost } from "../components/NewsPost";
import { Comment } from "../components/Comment";
import { getPost, getComments } from "../redux/actions";

export const PostPage = (props) => {
  const {id} = useParams();
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPost(id, setPost)
    getComments(id, setComments)
  }, [id]);
  
  return (
    <Fragment>
      {post && (
        <div className="container">
          <h3 className="fw-lighter mt-3">Post:</h3>
          <NewsPost post= {post} />
          <h4 className="fw-lighter mt-3">Comments:</h4>
          {comments && (
            <ul className="list-group mt-3">
              {comments.map(comment => 
                <Comment key={comment.id}comment={comment} />
              )}
          </ul>
          )}
        </div>
      )}
    </Fragment>
  )
}