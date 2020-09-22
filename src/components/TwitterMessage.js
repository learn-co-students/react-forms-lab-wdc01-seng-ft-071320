import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }


changeValue = (value) =>{
  // let name = e.target.name
  // let value = e.target.value
  this.setState({
    message: value
  })
  console.log(value)
}

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e) => this.changeValue(e.target.value)}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
