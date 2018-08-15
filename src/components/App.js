import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    submitMessage() {
      this.setState({
        input: '',
      });
      this.props.submitNewMessage(this.state.input);
    }
    render() {
      return (
        <div>
            hi
          {/* <h2>Type in a new Message:</h2>
          <input
            value={this.state.input}
            onChange={this.handleChange}/><br/>
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {this.props.messages.map( (message, idx) => {
                return (
                   <li key={idx}>{message}</li>
                )
              })
            }
          </ul> */}
        </div>
      );
    }
  };
    



export default App;