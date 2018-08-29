import React from 'react';
import { CssPost } from 'types/api/cssPost';
import { StyledPost } from 'components/Post/styled';

export type PostProps = {
  className?: string;
  post: CssPost;
};

class Post extends React.PureComponent<PostProps> {
  render() {
    const { creationDate, text, title } = this.props.post;
    return (
        <StyledPost>
          <h1>{title}</h1>
          <p>{text}</p>
          <h3>{creationDate}</h3>
        </StyledPost>
    );
  }
}

export default Post;
