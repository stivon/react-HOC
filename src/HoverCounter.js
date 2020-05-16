import React from "react";

class HoverCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return <button onMouseOver={this.increment}>Survolé {count} fois</button>;
  }
}

export default HoverCounter;
