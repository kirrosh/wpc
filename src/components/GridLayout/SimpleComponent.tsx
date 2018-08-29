import React from 'react';

class SimpleComponent extends React.PureComponent {
  render() {
    return (
      <div {...this.props}/>
    );
  }
}

export default SimpleComponent;
