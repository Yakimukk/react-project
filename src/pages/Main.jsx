import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components/Post";
import { getListPost } from "../redux/actions";

export const Main = () => {

  const dispatch = useDispatch();
  const listPost = useSelector(state => state.listPost.postList)

  useEffect(() => {
    dispatch(getListPost());
  }, [])

  useEffect(() => {
    const interval = setInterval(() => dispatch(getListPost()), 60000);
    return () => clearInterval(interval);
  }, [])
  
  const onClickUpdate = () => {
    dispatch(getListPost());
  } 

  return (
    <Fragment>
      <div className="container"><button className="mb-3 btn btn-secondary" onClick={onClickUpdate}>Update</button></div>
      {listPost.map(post => 
        <Post key={post.id} post={post}/>
      )}
    </Fragment>
  )
}