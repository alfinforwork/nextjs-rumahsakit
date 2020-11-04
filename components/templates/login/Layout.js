import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <div className="bg-gray-100">
        <div style={{ minHeight: "20vh" }} className="bg-green-500 p-4">
          <img
            src="gambar/logo/logo kompis full white.png"
            className="w-56 m-auto"
          />
        </div>
        {this.props.children}
        <div style={{ minHeight: "10vh" }} className="bg-green-500 p-5">
          <span className="text-gray-100">
            <b>Copyright @ alfin 2020. All right receved</b>
          </span>
        </div>
      </div>
    );
  }
}
