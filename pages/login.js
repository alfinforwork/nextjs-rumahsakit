import React, { Component } from "react";
import Link from "next/link";
import Cbutton from "../components/atoms/Cbutton";

export default class login extends Component {
  render() {
    return (
      <div className="flex">
        <div
          style={{ flex: 1, minHeight: "100vh" }}
          className="bg-gray-800 p-2"
        >
          <div id="profile">
            <div className="block p-2">
              <Link href="/">
                <a>
                  <img
                    className="w-1/2 m-auto flex-1"
                    src="gambar/logo/logo kompis full white.png"
                    alt="Sunset in the mountains"
                  />
                </a>
              </Link>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="favicon.ico"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">Alfin</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 4 }}>
          <div className="w-100 shadow p-2 flex">
            <div className="flex-1">asd</div>
            <div className="flex-1">form</div>
            <div className="flex-1">asd</div>
          </div>
          {/* <Cbutton background="bg-blue" onClick={() => alert("hello")}>
            Hello
          </Cbutton> */}
        </div>
      </div>
    );
  }
}
