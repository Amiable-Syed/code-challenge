import React from 'react';
import "../App.css"

export const ComponentA = (props) => {
    return (
        <>
        <h1 className="header">Component 1</h1>
        <button  className="header button" onClick={props.switchComponent}> Switch Component </button>
        <div className="App-header">
            <input className="textfield" readOnly value={props.value}/>
            <button  className="button" onClick={props.sendText}> Send Text </button>
            <button className="button" onClick={()=>props.getInterface(props.value,props.callback)}> Get Interface </button>
        </div>
        </>
    );
  }