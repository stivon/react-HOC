import React from "react";
import WithCounter from "./WithCounter";

class ClickCounter extends React.Component {
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>Cliqué {count} fois</button>;
  }
}

export default WithCounter(ClickCounter);
