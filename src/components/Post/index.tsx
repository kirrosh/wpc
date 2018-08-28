import React from 'react';
import { ReactWrapper } from 'enzyme';
import { CssPost } from 'types/api/cssPost';

export type PostProps = {
  className?: string;
  post: CssPost;
};

class Post extends React.PureComponent<PostProps> {
  render() {
    const { creationDate, text, title } = this.props.post;
    return (
      <div className={this.props.className}>
        <h1>{title}</h1>
        <p>{text}</p>
        <h3>{creationDate}</h3>
      </div>
    );
  }
}

export default Post;
