import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsRemaining: props.maxChars,
      tweet: ""
    };
  }
  
  updateChars=(e)=>{
    
    // console.log(e.target.value.length)
    let tweetLength = e.target.value.length
    let tweet = e.target.value
    this.setState({
      charsRemaining: this.props.maxChars-tweetLength,
      tweet: tweet
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value = {this.state.tweet} onChange = {this.updateChars} type="text" name="message" id="message" />
    <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
