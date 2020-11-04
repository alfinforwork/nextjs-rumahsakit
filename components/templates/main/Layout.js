import Link from "next/link";
import React, { Component } from "react";
import Footer from "./footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default class Layout extends Component {
  render() {
    return (
      <div className="flex">
        <Sidebar />
        <div style={{ flex: 4 }}>
          <Header />

          {/* content */}
          {this.props.children}
          {/* end content */}

          {/* footer */}
          <Footer />
        </div>
      </div>
    );
  }
}
