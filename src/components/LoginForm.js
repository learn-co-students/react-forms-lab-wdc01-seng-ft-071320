import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeUpdate = (e) =>{
    let name = e.target.name
  let value = e.target.value

    this.setState({
      [name]: value
    })
  }

 submit = (e) =>{
   e.preventDefault()
   if (!this.state.username || !this.state.password) return
   this.props.handleLogin(this.state)
 }

  render() {
    return (
      <form onSubmit={(e) => this.submit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(e) => this.changeUpdate(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={(e) => this.changeUpdate(e)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
