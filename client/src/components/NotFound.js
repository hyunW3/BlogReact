import React from "react";
import { Redirect } from "react-router-dom";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ shouldRedirect: true }), 2000);
  }

  render() {
    const stat = this.state;
    const isShouldRedirect = stat.shouldRedirect;
    if (isShouldRedirect) {
      // NotFound
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h2>404 Page Not Found</h2>
      </div>
    );
  }
}
export default NotFound;
