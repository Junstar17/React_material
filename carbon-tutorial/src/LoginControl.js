import React from 'react';
import { Button } from 'carbon-components-react';

function LoginButton(props) {
  return <Button onClick={props.onClick}>Login</Button>;
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in!</h1>;
  }
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleClickLogout = this.handleClickLogout.bind(this);
  }
  handleClickLogin() {
    this.setState(prevState => ({
      isLogin: true,
    }));
  }
  handleClickLogout() {
    this.setState(prevState => ({
      isLogin: false,
    }));
  }

  render() {
    const isLoginState = this.state.isLogin;
    let button = null;
    if (isLoginState) {
      button = <LogoutButton onClick={this.handleClickLogout} />;
    } else {
      button = <LoginButton onClick={this.handleClickLogin} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoginState} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
