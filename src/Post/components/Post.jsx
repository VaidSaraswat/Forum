import React from 'react';
import '../styles/Post.css';
import faker from 'faker'
import CommentDetail from '../../CommentDetail';
const Post = (props) => (
  <div className="panel panel-default post-body ui container comments">
    <div className="panel-body ">
      <CommentDetail
          author={faker.name.findName()}
          timeAgo={faker.date.weekday()}
          text = {props.postBody}
          avatar={faker.image.avatar()}
      />
    </div>
  </div>
);

export default Post;
