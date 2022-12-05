import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsPost } from "../components/NewsPost";
import { Comment } from "../components/Comment";
import { getNews, getComments } from "../redux/actions";

export const NewsPage = (props) => {
  const {id} = useParams();
  const [news, setNews] = useState({})
  const [comments, setComments] = useState([]);


  useEffect(() => {
    getNews(id, setNews)
    getComments(id, setComments)
  }, []);
  
  return (
    <Fragment>
      {news && (
        <div className="container">
          <h3 className="fw-lighter mt-3">News:</h3>
          <NewsPost news= {news} />
          <h4 className="fw-lighter mt-3">Comments:</h4>
          {comments && (
            <ul className="list-group mt-3">
              {comments.map(comment => 
                <Comment comment={comment} />
              )}
          </ul>
          )}
        </div>

      )}
    </Fragment>
  )
}