import React from 'react';

class WideComponent extends React.PureComponent {
  render() {
    return (
      <div {...this.props}/>
    );
  }
}

export default WideComponent;
