import React from 'react';

class RectangleComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      numberToDisplay: 0,
      id: null
    };

    this.changeNumber = this.changeNumber.bind(this);
  }

  UNSAFE_componentWillMount() {
    setInterval(this.changeNumber, 1000);
    this.setState({ id: setInterval(this.changeNumber, 1000) });
  }

  changeNumber() {
    this.setState(prevState => {
      return {
        numberToDisplay:
          prevState.numberToDisplay < 3 ? prevState + 1 : prevState - 1
      };
    });
  }

  render() {
    return <div>{this.state.numberToDisplay}</div>;
  }
}

export default RectangleComponent;
