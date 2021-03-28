import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onTextChange} type="text" value={props.input} />
      <button onClick={props.onItemsAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
