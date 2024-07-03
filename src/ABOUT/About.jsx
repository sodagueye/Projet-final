import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi2";
import { GrGallery } from "react-icons/gr";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import Maps from "./map";
import "./about.css";

function About() {
  return (
    <div className=" w-100 test">
      <div className="container  w-75 p-1   bgcolor shadow rounded">
        <div className="row pt-3">
          <div className="col-12 col-md-2 text-start">
            <RiErrorWarningLine className="fs-2 ms-5" />
          </div>
          <div className="col-12 col-md-10  ">
            <h4 className="text-start">Quelques mots sur Keur Yaay Soda</h4>
            <div className="  text-start ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vel est eget tortor eleifend ultrices. Morbi ac libero luctus,
              accumsan tortor at, fermentum libero. Nunc posuere mauris est, a
              blandit massa rhoncus id. Pellentesque nec tincidunt velit. Etiam
              ornare pulvinar urna. Curabitur vitae finibus purus. Nam feugiat,
              magna id venenatis tempor, est tortor congue sapien, sed dapibus
              erat est in diam. Praesent non aliquet purus. Etiam consectetur,
              sapien scelerisque auctor maximus, felis erat pretium libero, sit
              amet mattis odio odio in neque. Suspendisse id ipsum lobortis,
              tincidunt libero nec, rhoncus risus. Integer aliquet sem id massa
              efficitur dictum. Curabitur non fermentum erat, eleifend tempor
              neque. Ut eu enim turpis.
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-2 text-start">
            <IoLocationOutline className="fs-2 ms-5" />
          </div>
          <div className="col-12 col-md-10 ">
            <h4 className="text-start">Addresse</h4>
            <p className="text-start">
              2810 South Figueroa Street, Los Angeles, CA, USA
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-2 text-start">
            <HiOutlineClock className="fs-2 ms-5 " />
          </div>
          <div className="col-12 col-md-10">
            <h4 className="text-start">Horaires d'ouvertures</h4>
            <div className="">
              <select
                className="form-select border-0"
                aria-label="Default select example"
              >
                <option selected>Today</option>
                <option value="0">Open 1:00AM - 11:55PM</option>
                <option value="1">
                  Lundi <span className="">1:00AM - 11:55PM</span>
                </option>
                <option value="2">
                  Mardi <span>1:00AM - 11:55PM</span>
                </option>
                <option value="3">
                  Mercredi <span>1:00AM - 11:55PM</span>
                </option>
                <option value="4">
                  Jeudi <span>1:00AM - 11:55PM</span>
                </option>
                <option value="5">
                  Vendredi <span>1:00AM - 11:55PM</span>
                </option>
                <option value="6">
                  Samedi <span>1:00AM - 11:55PM</span>
                </option>
                <option value="7">
                  Dimanche <span>1:00AM - 11:55PM</span>
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-2 text-start">
            <GrGallery className="fs-2 ms-5" />
          </div>
          <div className="col-12 col-md-10">
            <h4 className="text-start">Gallery</h4>
            <div className="img row text-start">
              <div className="">
                <img src={about3} className="p-2 rounded-4" alt="" />
                <img src={about2} className="p-2 rounded-4" alt="" />
                <img src={about3} className="p-2 rounded-4" alt="" />
              </div>
              <div className="">
                <img src={about3} className="p-2 rounded-4" alt="" />
                <img src={about1} className="p-2 rounded-4" alt="" />
                <img src={about1} className="p-2 rounded-4" alt="" />
              </div>
              <div className="">
                <img src={about1} className="p-2 rounded-4" alt="" />
              </div>
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
