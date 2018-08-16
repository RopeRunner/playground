import React from 'react';
require('./SceneComponent.css');

class SceneComponent extends React.PureComponent {
  render() {
    return (
      <section className="scene">
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
