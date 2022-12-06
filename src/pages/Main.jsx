import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components/Post";
import { getListPost } from "../redux/actions";
import { setSkipPosts } from "../redux/reducer";
import { createPages } from "../func/pagesCreator";


export const Main = () => {

  const dispatch = useDispatch();
  const listPost = useSelector(state => state.listPost.postList);
  const limit = useSelector(state => state.listPost.limit);
  const total = useSelector(state => state.listPost.total);
  const skip = useSelector(state => state.listPost.skip);
  const [active, setActive] = useState("false");
  const pagesCount = Math.ceil(total/limit);
  const pages = [];

  createPages(pages, pagesCount)

  useEffect(() => {
    dispatch(getListPost(limit, skip));
  }, [skip])

  useEffect(() => {
    setActive(1);
  }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => dispatch(getListPost()), 60000);
  //   return () => clearInterval(interval);
  // }, [])

  const onClickUpdate = () => {
    dispatch(getListPost());
  } 

  return (
    <Fragment>
      <div className="container"><button className="mb-3 btn btn-secondary" onClick={onClickUpdate}>Update</button></div>
      {listPost.map(post => 
        <Post key={post.id} post={post}/>
      )}
      <div className="pages">
        {pages.map((page, index, skip) => <span 
            className={`page ${active == page ? 'current-page' : ''}`}  
            key={index}
            onClick={() => {
              skip = (page-1)*10
              dispatch(setSkipPosts(skip))
              setActive(page)
            } }
            >{page}</span>)}
      </div>
    </Fragment>
  )
}