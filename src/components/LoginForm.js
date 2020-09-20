import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  // handlePassword=(event)=>{
  //   this.setState({
  //     password: event.target.value
  //   })
  // }

  // handleUsername=(event)=>{
  //   this.setState({
  //   username: event.target.value
  // })}

  failedLogin=(e)=>{
    e.preventDefault()
    console.log("Input cannot be blank")
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.handleLogin(this.state)
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.state.username !== "" && this.state.password !== ""?this.handleSubmit:this.failedLogin}>
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} id="password" name="password" type="password" />
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
