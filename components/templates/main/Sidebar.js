import {
  faArrowAltCircleUp,
  faCartPlus,
  faHome,
  faTachometerAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Component } from "react";
import { Collapse } from "react-collapse";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laporan: false,
    };
  }
  render() {
    return (
      <div style={{ flex: 1, minHeight: "100vh" }} className="bg-gray-800 p-2">
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
          <div className="bg-gray-800 max-w-sm rounded overflow-hidden shadow-md">
            <img
              className="w-full m-auto"
              style={{ maxWidth: 100 }}
              src="favicon.ico"
              alt="Sunset in the mountains"
            />
            <p className="text-gray-100 text-center mb-2">Alfin</p>
          </div>
        </div>
        <div id="menu" className="mt-3">
          {/* <h1 className="text-white pl-2 mt-6">MENU</h1> */}
          <ul className="list-reset">
            <li>
              <Link href="/login">
                <a className="block text-center lg:text-left shadow-md p-4 text-white font-bold border-purple hover:bg-gray-700 rounded border-r-4">
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  <span className="hidden md:block lg:inline xl:inline">
                    {" "}
                    Dashboard
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="block text-center lg:text-left shadow-md p-4 text-white font-bold border-purple hover:bg-gray-700 rounded">
                  <FontAwesomeIcon icon={faTrash} />
                  <span className="hidden md:block lg:inline xl:inline">
                    {" "}
                    List Sampah
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="block text-center lg:text-left shadow-md p-4 text-white font-bold border-purple hover:bg-gray-700 rounded">
                  <FontAwesomeIcon icon={faHome} />
                  <span className="hidden md:block lg:inline xl:inline">
                    {" "}
                    Gudang Sampah
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="block text-center lg:text-left shadow-md p-4 text-white font-bold border-purple hover:bg-gray-700 rounded">
                  <FontAwesomeIcon icon={faCartPlus} />
                  <span className="hidden md:block lg:inline xl:inline">
                    {" "}
                    Katalog
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block text-center lg:text-left shadow-md p-4 text-white font-bold border-purple hover:bg-gray-700 rounded  border-r-4"
                onClick={() => {
                  this.state.laporan = !this.state.laporan;
                  console.log(this.state.laporan);
                }}
              >
                <FontAwesomeIcon icon={faCartPlus} />
                <span className="hidden md:block lg:inline xl:inline">
                  {" "}
                  Laporan
                </span>
                <FontAwesomeIcon
                  icon={faArrowAltCircleUp}
                  className="float-right"
                />
              </a>
              <Collapse isOpened={this.state.laporan}>
                <ul className="ml-2 block text-center lg:text-left shadow-md text-white font-bold border-purple">
                  <li>
                    <Link href="/login">
                      <a className="block text-center lg:text-left shadow-md p-4 text-white font-bold border-purple bg-gray-800 hover:bg-gray-700 rounded">
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span className="hidden md:block lg:inline xl:inline">
                          {" "}
                          Katalog
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
