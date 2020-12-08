import React, { Component } from "react";
import Display from "./Display";
import "./Calculator.css";

export default class Calculator extends Component {
  render() {
    return (
      <>
        <Display />
        <div id="Buttons">
          <button id="cal_clear">C</button>
          <button id="cal_div">/</button>
          <button id="cal_sub">-</button>
          <button id="cal_mul">*</button>
          <button id="cal_0">0</button>
          <button id="cal_9">9</button>
          <button id="cal_8">8</button>
          <button id="cal_add">+</button>
          <button id="cal_7">7</button>
          <button id="cal_6">6</button>
          <button id="cal_5">5</button>
          <button id="cal_4">4</button>
          <button id="cal_3">3</button>
          <button id="cal_2">2</button>
          <button id="cal_1">1</button>
          <button id="cal_dot">.</button>
          <button id="cal_equal">=</button>
        </div>
      </>
    );
  }
}
