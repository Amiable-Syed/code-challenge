import React from 'react';
import './App.css';
import {ComponentA} from "./components/component1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:  'www.placeholder.com'
    };
  }

  handleChange=(event)=>{
    this.setState({
      name: event.target.value
    });
  }
  
  getInterface=()=>{
    debugger
  }

  sendText=()=>{
    debugger
  }


  render() {
    return (
      <>
      
      <ComponentA 
        value={this.state.value} 
        handleChange={this.handleChange}
        getInterface={this.getInterface}
        sendText={this.sendText} />
      </>
    );
  }
}
export default App;
