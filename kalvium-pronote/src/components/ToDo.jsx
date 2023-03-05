import React, { Component } from "react";
import './ToDo.css'

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }
  
  handleAdd = () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
  
    if ((input.value.length)!==0) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `<input type="text" placeholder="Type here" value="${input.value}"/><input type="button" value="Del item"/>`;
      newDiv.querySelector('input[type="button"]').onclick = () => newDiv.remove();
      output.appendChild(newDiv);
    }
  
    input.value = "";
    this.setState({ value: "" });
  }

  render() {
    return (
      <div id="mainbody">
        <div id="todo">
        <div>
          <input id="input" type="text" placeholder="Type here"/>
          <input type="button" value="Add item" onClick={this.handleAdd} />
        </div>
        <br />
        <div id="output"></div>
        </div>
      </div>
    );
  }
}

export default Notes;