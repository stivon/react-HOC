import React from "react";

const WithCounter = WrappedComponent => {
  class NewComponent extends React.Component {
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
      console.log({ ...this.props });
      return (
        <WrappedComponent
          {...this.props}
          count={this.state.count}
          increment={this.increment}
        />
      );
    }
  }
  return NewComponent;
};

export default WithCounter;
