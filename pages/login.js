import React, { Component } from "react";
import Link from "next/link";
import Cbutton from "../components/atoms/Cbutton";

export default class login extends Component {
  render() {
    return (
      <div className="bg-gray-100">
        <div style={{ minHeight: "20vh" }} className="bg-green-500 p-4">
          <img
            src="gambar/logo/logo kompis full white.png"
            className="w-56 m-auto"
          />
        </div>
        <div className="w-1/2 my-6 m-auto rounded overflow-hidden shadow-md">
          <div className="bg-white py-4 text-center md:text-left md:px-6">
            <div className="font-bold text-xl mb-2">Login</div>
          </div>
          <div className="pt-4 pb-2 ">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="pt-4 pb-2 text-center">
            <Link href="/">
              <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">
                Lupa password
              </a>
            </Link>
            <Link href="/">
              <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">
                Register
              </a>
            </Link>
          </div>
        </div>
        <div style={{ minHeight: "10vh" }} className="bg-green-500 p-5">
          <span className="text-gray-100">
            <b>Copyright @ alfin 2020. All right receved</b>
          </span>
        </div>
      </div>
    );
  }
}
