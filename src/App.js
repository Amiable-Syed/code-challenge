import React from 'react';
import './App.css';
import {ComponentA} from "./components/component1";
import {ComponentB} from "./components/component2";

class App extends React.Component {
  constructor(props) {
    super(props);
    //Initial State
    this.state = {
      value:  'www.placeholder.com',
      forwardValue:"",
      data:{},
      switch:true
    };
  }

  /**
   * get Api call for the url
   * using async and await ES6
   */
  getInterface =() =>{ 
    (async () => {
      try{
        const response = await fetch(this.state.value);
        const json = await response.json();
        this.callback(json);
      }catch(error){
        alert("Please provide proper url")
      }
    })();
  }

  /**
   * callback function to open component2 and send data 
   * to the display area
   */
  callback=(data)=>{
    this.setState({
      switch: false,
      data: data
    })
  }
  /**
   * button onClick listener to 
   * send url to the C2
   */
  sendText=()=>{
    this.setState({
      forwardValue: this.state.value
    },()=>{
      alert("Text Sent");
    })
  }
  /**
   * onChange handler to change the recieved url from 
   * Component1 
   */
  handleChangeLink=(e)=>{
    this.setState({
      forwardValue: e.target.value,
    },()=>{
      this.setState({
        value: this.state.forwardValue
      })
    })
  };
  /**
   * onClick listener to send the data back 
   * to Component 1
   */
  sendBack=()=>{
      this.setState({
        switch:true,
        data:[]
      },()=>{
        alert("link modified")
      })
  }
  /**
   * switch between components
   */
  switchComponent=()=>{
      this.setState({
        switch: this.state.switch?false:true
      })
    

  }

  render() {

    return (
      <>
        {this.state.switch?
        <ComponentA 
          switchComponent={this.switchComponent}
          value={this.state.value} 
          getInterface={this.getInterface}
          sendText={this.sendText} 
          callback={this.callback}
        />
        :
        <ComponentB 
          switchComponent={this.switchComponent}
          forwardedValue={this.state.forwardValue} 
          handleChange={this.handleChangeLink}
          sendBack={this.sendBack} 
          data={this.state.data}
        />
       
        }
      </>
    );
  }
}
export default App;
