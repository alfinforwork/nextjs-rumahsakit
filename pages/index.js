import {
  faArrowAltCircleUp,
  faCartPlus,
  faCoffee,
  faHome,
  faPowerOff,
  faTachometerAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { Collapse } from "react-collapse";

const Card = () => (
  <div className="col-span-1 m-2 rounded overflow-hidden shadow-lg hover:bg-gray-100">
    <img
      className="w-1/2 m-auto"
      src="gambar/logo/kompis_blue.png"
      alt="Sunset in the mountains"
    />
    <div className=" py-4 text-center md:text-left md:px-6">
      <div className="font-bold text-xl mb-2">Katalog</div>
      <p className="text-gray-700 hidden md:inline lg:inline">
        Lorem ipsum dolor
      </p>
    </div>
    <div className="pt-4 pb-2 text-center">
      <Link href="/">
        <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">
          Selengkapnya
        </a>
      </Link>
    </div>
  </div>
);

export default function Home() {
  let jumlahcard = [1, 2, 3, 4];
  let laporan = false;
  return (
    <div className="flex">
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
                  laporan = !laporan;
                  console.log(laporan);
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
              <Collapse isOpened={laporan}>
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
      <div style={{ flex: 4 }}>
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

        {/* content */}
        <div id="content" style={{ minHeight: "80vh" }} className="p-6">
          {/* card */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {jumlahcard.map((v) => (
              <Card />
            ))}
          </div>
          {/* end */}

          {/* Main */}
          <div className="mt-4 rounded overflow-hidden shadow-md">
            <div className=" py-4 text-center md:text-left md:px-6">
              <div className="font-bold text-xl mb-2">Katalog</div>
              <p className="text-gray-700 hidden md:inline lg:inline">
                Lorem ipsum dolor
              </p>
            </div>
          </div>
        </div>
        {/* end content */}

        {/* footer */}
        <div id="footer" className="bg-gray-100 shadow-inner p-4">
          <span className="text-gray-600">
            <b>Copyright @ alfin 2020. All right receved</b>
          </span>
        </div>
        {/* <Cbutton background="bg-blue" onClick={() => alert("hello")}>
          Hello
        </Cbutton> */}
      </div>
    </div>
  );
}
