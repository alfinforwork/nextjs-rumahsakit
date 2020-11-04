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
import Layout from "../components/templates/main/Layout";

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
  return (
    <Layout>
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
    </Layout>
  );
}
