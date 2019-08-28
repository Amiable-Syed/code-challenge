import React from 'react';
import "../App.css"

export const ComponentA = (props) => {
    return (
        <div className="App-header">
            <input readOnly value={props.value} onChange={()=>props.handleChange} />
            <button onClick={props.sendText}> Send Text </button>
            <button onClick={props.getInterface}> Get Interface </button>
        </div>
    );
  }