import React from 'react';
import RectangleComponent from '../RectangleComponent/RectangleComponent';

class RectangleFactory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberToDisplay: 0,
      maxNumber: this.props.max,
      canonicalArray: new Array(this.props.max),
      currentIndex: 0,
      prevIndex: 0,
      className: 'rect',
      width: 20,
      height: 20,
      num: new Array(this.props.num)
    };

    this.changeNumber = this.changeNumber.bind(this);
  }

  UNSAFE_componentWillMount() {
    setInterval(() => this.changeNumber(), 1000);
  }

  changeNumber() {
    this.setState(
      ({
        currentIndex,
        prevIndex,
        canonicalArray,
        numberToDisplay,
        width,
        height
      }) => {
        if (
          currentIndex === 0 ||
          (currentIndex > prevIndex && currentIndex !== canonicalArray.length)
        ) {
          let nn = numberToDisplay + 1,
            prev = currentIndex,
            ci = currentIndex + 1,
            nw = width + 1,
            nh = height + 1;
          return {
            numberToDisplay: nn,
            prevIndex: prev,
            currentIndex: ci,
            width: nw,
            height: nh
          };
        }
        if (
          currentIndex === canonicalArray.length ||
          (currentIndex < prevIndex && currentIndex !== 0)
        ) {
          let nn = numberToDisplay - 1,
            prev = currentIndex,
            ci = currentIndex - 1,
            nw = width - 1,
            nh = height - 1;
          return {
            numberToDisplay: nn,
            prevIndex: prev,
            currentIndex: ci,
            width: nw,
            height: nh
          };
        }
      }
    );
  }

  render() {
    let newArray = [];
    for (let i = 0; i < this.props.num; i++) {
      newArray.push(
        <RectangleComponent
          width={this.state.width}
          height={this.state.height}
          key={i}
          numberToDisplay={this.state.numberToDisplay}
        />
      );
    }
    return <React.Fragment>{newArray}</React.Fragment>;
  }
}

export default RectangleFactory;
