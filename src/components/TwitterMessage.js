import React from "react";

class TwitterMessage extends React.Component {


    state = {
      msgChars: "",
      //remainingChars: this.props.maxChars
    };


  handleChange = (event) => {
    
    this.setState({
      msgChars: event.target.value,
      //remainingChars: this.props.maxChars - this.state.msgChars.length
    })}

  render() {
    let remainingChars = this.props.maxChars - this.state.msgChars.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.msgChars} />
        <h3>Remaining Characters: {remainingChars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
