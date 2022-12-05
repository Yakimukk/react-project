import React from "react";

export const NewsPost = (props) => { 
  const news = props.news

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title fw-lighter">{news.title}</h2>
        <p className="card-text">{news.body}</p>
      </div>
      <div className="card-footer text-muted fw-lighter">
        <span><b>reactions:</b>  {news.reactions}</span> | <span><b>user:</b> {news.userId}</span> | <span><b>tags:</b>{news.tags}</span>
      </div>
    </div>
  )
}