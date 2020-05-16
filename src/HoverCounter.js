import React from "react";
import WithCounter from "./WithCounter";

class HoverCounter extends React.Component {
  render() {
    const { count, increment } = this.props;
    return <button onMouseOver={increment}>Survolé {count} fois</button>;
  }
}

export default WithCounter(HoverCounter);
