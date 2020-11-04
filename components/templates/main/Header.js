import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="w-100 shadow p-2 flex">
        <div className="flex-1">
          <button onClick={() => alert("klik")} className="ml-2 p-2">
            =
          </button>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-end flex p-2">
          <Link href="login">
            <a className="text-red-700 hover:text-red-500">
              <FontAwesomeIcon icon={faPowerOff} />
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
