import React, { Component } from "react";
import Posts from "../data/posts.json";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: Posts
    };
  }

  render() {    
    console.log(this.state.posts);
    const max_width = { maxWidth : "300px"};
    const articles = this.state.posts.reverse().map((article,index) => (
      <div className="post-panel" key={index}>
      <div className="post-metadata">
        <img
          alt=""
          className="avatar-image"
          src={article.author.provider_pic}
          height="40"
          width="40"
          style={max_width}
        />
        
        <div className="post-info">
          <div >
            <span className="popover-link">
                {article.author.name}
            </span>
          </div>
          <small>Posted • A must read</small>
        </div>
      </div>
      <a href="/article">
      {article.feature_img.length > 0 ? (
        <div className="post-picture-wrapper">
          <img src={article.feature_img} alt="Thumb" className="img-fluid" style={max_width}/>
        </div>
      ) : (
        ""
      )}       
      <div className="p-2 col-3 offset-5" style={max_width} >
          {article.summary}
      </div>
      </a>
    </div>
    ));

    console.log(articles);

    return <div>{articles}</div>;
  }
}

export default Feed;
