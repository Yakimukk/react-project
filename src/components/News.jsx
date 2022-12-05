import React from "react";
import { Link, useParams } from "react-router-dom";

export const News = (props) => { 
  const news = props.news
  const {id} = useParams();

  return (
    <ul className="list-group container">
      <li className="list-group-item news d-flex justify-content-start align-items-center" key = {news.id}>
        <span className="me-3 text-muted">{news.id}. </span>
        <div>
          <h3 ><Link className="text-decoration-none text-reset fw-lighter" key = {news.id} to={`/posts/${news.id}`}>{news.title}</Link></h3>
          <p className="text-muted fw-lighter"><span><b>reactions:</b>  {news.reactions}</span> | <span><b>user:</b> {news.userId}</span> | <span><b>tags:</b> {news.tags}</span></p>
        </div>
      </li>
    </ul>
  )
}