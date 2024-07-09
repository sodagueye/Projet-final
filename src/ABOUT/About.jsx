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
      <div className="container  w-75 p-1   bgcolor ">
        <div className="row pt-3">
          <div className="col-12 col-md-2 text-start">
            <RiErrorWarningLine className="fs-2 ms-5" />
          </div>
          <div className="col-12 col-md-10">
            <h4 className="text-start">Quelques mots sur Keur Yaay Soda</h4>
            <div className="text-start">
              Bienvenue chez Keur Yaay Soda, une oasis culinaire au cœur de
              Grand Yoff. Notre restaurant est bien plus qu'un simple lieu de
              repas ; c'est une célébration de la culture et des saveurs
              africaines, spécialement inspirées des traditions sénégalaises.
              "Keur Yaay" signifie "la maison de maman" en wolof, et ici, nous
              nous efforçons de recréer l'ambiance chaleureuse et accueillante
              d'un repas familial sénégalais. Chez Keur Yaay Soda, chaque plat
              est préparé avec amour et passion, en utilisant des ingrédients
              frais et authentiques pour vous offrir une expérience
              gastronomique inoubliable. Notre menu varié propose une sélection
              de plats traditionnels tels que le Thieboudienne, le Yassa, et le
              Mafé, tous cuisinés selon des recettes transmises de génération en
              génération. Que vous soyez un amateur de cuisine africaine ou un
              novice curieux, nos plats sont conçus pour ravir vos papilles et
              vous transporter au Sénégal le temps d'un repas.
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
            <div className="img  text-start ">
              <div className="">
                <img src={about3} className="p-2 rounded-4 col-12 col-md-3" alt="" />
                <img src={about2} className="p-2 rounded-4 col-12 col-md-3" alt="" />
                <img src={about3} className="p-2 rounded-4 col-12 col-md-3" alt="" />
              </div>
              <div className="">
                <img src={about3} className="p-2 rounded-4 col-12 col-md-3" alt="" />
                <img src={about1} className="p-2 rounded-4 col-12 col-md-3" alt="" />
                <img src={about1} className="p-2 rounded-4 col-12 col-md-3" alt="" />
              </div>
              <div className="">
                <img src={about1} className="p-2 rounded-4 col-12 col-md-3" alt=""/>
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
