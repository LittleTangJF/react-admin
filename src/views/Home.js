import React from "react";
import { Button } from "antd";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>home</h1> <Button type="primary">Primary Button</Button>
        <ul>
          <li>5454</li>
          <li>5454</li>
          <li>5454</li>
          <li>5454</li>
          <li>5454</li>
        </ul>
      </div>
    );
  }
}
export default Home;
