import React from 'react';
require('./SceneComponent.css');

class SceneComponent extends React.PureComponent {
  render() {
    return (
      <section>
        {this.props.children ? (
          this.props.children
        ) : (
          <span>nothing to render</span>
        )}
      </section>
    );
  }
}

export default SceneComponent;
