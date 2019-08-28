import React from 'react';
import './App.css';
import {ComponentA} from "./components/component1";
import {ComponentB} from "./components/component2";



const getApi = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  debugger
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:  "www.placeholder.com",
      forwardValue:"",
      data:{},
      switch:true
    };
  }

  handleChange=(event)=>{
    this.setState({
      name: event.target.value
    });
  }
  

  
  

  sendText=()=>{
    debugger
    this.setState({
      forwardValue: this.state.value
    })
  }

  handleChangeLink=(e)=>{
    debugger
    this.setState({
      value: e.target.value
    })
  }



  render() {

    return (
      <>
        {this.state.switch?
        <ComponentA 
          value={this.state.value} 
          handleChange={this.handleChange}
          getInterface={getApi}
          sendText={this.sendText} 
        />
        :
        <ComponentB 
          forwardedValue={this.state.forwardValue} 
          handleChange={this.handleChangeLink}
          getInterface={this.getInterface}
          sendText={this.sendText} 
        />
        }
      </>
    );
  }
}
export default App;
