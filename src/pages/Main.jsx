import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { News } from "../components/News";
import { getListNews } from "../redux/actions";

export const Main = () => {

  const dispatch = useDispatch();
  const listNews = useSelector(state => state.listNews.newsList)

  useEffect(() => {
    dispatch(getListNews());
  }, [])

  useEffect(() => {
    const interval = setInterval(() => dispatch(getListNews()), 60000);
    return () => clearInterval(interval);
  }, [])
  
  const onClickUpdate = () => {
    dispatch(getListNews());
  } 

  return (
    <Fragment>
      <div className="container"><button className="mb-3 btn btn-secondary" onClick={onClickUpdate}>Update</button></div>
      {listNews.map(news => 
        <News key={news.id} news={news}/>
      )}
    </Fragment>
  )
}