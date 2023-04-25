// home.js
import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
    };
  }

  componentDidMount() {
    const { userEmail } = this.props.location.state;
    if (userEmail) {
      this.setState({ userEmail });
    }
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome, {this.state.userEmail}</p>
      </div>
    );
  }
}

export default HomePage;
