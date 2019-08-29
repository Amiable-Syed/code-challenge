import React from 'react';
import "../App.css"

export const ComponentB = (props) => {
    return (
        <>
            <h1 className="header">Component 2</h1>
            <button  className="header button" onClick={props.switchComponent}> Switch Component </button>
            <div className="App-header">
                <div className="content">
                    <input  className="textfield" value={props.forwardedValue} onChange={props.handleChange} />
                    <button  className="button" onClick={props.sendBack}> Send Back </button>
                </div>
                <div>
                {/* Text Area to display the Json data */}
                 <textarea rows="10" cols="50">
                     {JSON.stringify(props.data)}
                 </textarea>
                </div>
            </div>
        </>
    );
  }