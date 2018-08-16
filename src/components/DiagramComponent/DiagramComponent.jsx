import React from 'react';
import DiagramBlockComponent from '../DiagramBlock/DiagramBlockComponent';
require('./DiagramComponent.css');

class DiagramComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      numOfBlocks: this.props.num,
      min: -100,
      max: 100,
      width: 30,
      nillHeight: 50
    };
  }
  render() {
    const { numOfBlocks, nillHeight } = this.state;
    let toRender = [],
      counter = 0;
    for (let i = 0; i < numOfBlocks; i++) {
      let height = nillHeight + counter;
      counter++;
      toRender.push(
        <DiagramBlockComponent
          key={i}
          width={this.state.width}
          height={height}
        />
      );
    }

    return <section className="d-c">{toRender}</section>;
  }
}

export default DiagramComponent;
