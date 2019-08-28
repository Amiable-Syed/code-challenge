import React from 'react';
import "../App.css"

export const ComponentB = (props) => {
    return (
        <div className="App-header">
            <input value={props.forwardedValue} onChange={()=>props.handleChange} />
            {/* <button onClick={props.sendText}> Send Text </button>
            <button onClick={props.getInterface}> Get Interface </button> */}
        </div>
    );
  }