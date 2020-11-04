import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cbutton from "../components/atoms/Cbutton";
import Layout from "../components/templates/login/Layout";
import { axios } from "../konstanta";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {
        username: "",
        password: "",
      },
    };
  }

  validation = (name, value) => {
    let errors = this.state.errors;
    switch (name) {
      case "password":
        errors.password =
          value.length < 8 ? "Password harus kurang dari 8 karakter!" : "";
        this.setState({ password: value });
        break;
      case "username":
        errors.username = value.length < 1 ? "Username harus diinputkan!" : "";
        this.setState({ username: value });
        break;

      default:
        break;
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios()
      .get("/")
      .then((res) => {
        console.log(res);
      });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // validasi
    this.validation(name, value);
    // log
    console.log(this.state);
  };

  render() {
    return (
      <Layout>
        <div className="w-1/2 my-6 m-auto rounded overflow-hidden shadow-md">
          <div className="bg-white py-4 text-center md:text-left md:px-6">
            <div className="font-bold text-xl mb-2">Login</div>
          </div>
          <div className="">
            <form
              className="bg-white rounded px-8 pt-6 pb-8"
              onSubmit={this.handleSubmit}
            >
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
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
                {this.state.errors.username.length > 0 && (
                  <span className="text-red-500 text-xs italic">
                    {this.state.errors.username}
                  </span>
                )}
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
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                {this.state.errors.password.length > 0 && (
                  <span className="text-red-500 text-xs italic">
                    {this.state.errors.password}
                  </span>
                )}
                {/* <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p> */}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="pt-4 pb-2 text-center bg-white">
            <Link href="/lupapassword">
              <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">
                Lupa password
              </a>
            </Link>
            <Link href="/register">
              <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">
                Register
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}
