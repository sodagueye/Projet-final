import React from "react";
import AboutTitles from "./AboutTitles";
import Icons from "./Icons";
import Text from "./Text";
import { PiWarningCircleLight } from "react-icons/pi";
import { RiMapPin2Line } from "react-icons/ri";
import { LuClock } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";


import img1 from "./img4.jpg";

export default function Container() {
  return (
    <div className="bg-white p-3">
      <div className="row">
        <div className="col-lg-1 col-sm-0 col-md-0">
          <Icons icon={<PiWarningCircleLight />} />
        </div>
        <div className="col-lg-11">
          <AboutTitles titre="Few words about McDonald's" />
          <Text texte="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel est eget tortor eleifend ultrices. Morbi ac libero luctus, accumsan tortor at, fermentum libero. Nunc posuere mauris est, a blandit massa rhoncus id. Pellentesque nec tincidunt velit. Etiam ornare pulvinar urna. Curabitur vitae finibus purus. Nam feugiat, magna id venenatis tempor, est tortor congue sapien, sed dapibus erat est in diam. Praesent non aliquet purus. Etiam consectetur, sapien scelerisque auctor maximus, felis erat pretium libero, sit amet mattis odio odio in neque. Suspendisse id ipsum lobortis, tincidunt libero nec, rhoncus risus. Integer aliquet sem id massa efficitur dictum. Curabitur non fermentum erat, eleifend tempor neque. Ut eu enim turpis." />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1 col-sm-0">
          <Icons icon={<RiMapPin2Line />} />
        </div>
        <div className="col-lg-11">
          <AboutTitles titre="Address" />
          <Text texte="2810 South Figueroa Street, Los Angeles, CA, USA" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1 col-sm-0 col-md-0">
          <Icons icon={<LuClock />} />
        </div>
        <div className="col-lg-11">
          <AboutTitles titre="Opening hours" />
          <h6 className="title-accordion">Today</h6>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Today 1:00 PM - 11:55 PM
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div className="d-flex justify-content-between">
                    <p>Monday</p>
                    <p>1:00 AM - 11:55 PM</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Tuesday</p>
                    <p>1:00 AM - 11:55 PM</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Wednesday</p>
                    <p>1:00 AM - 11:55 PM</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Thursday</p>
                    <p>1:00 AM - 11:55 PM</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Friday</p>
                    <p>1:00 AM - 11:55 PM</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Saturday</p>
                    <p>1:00 AM - 11:55 PM</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Sunday</p>
                    <p>1:00 AM - 11:55 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1 col-sm-0 col-md-0">
          <Icons icon={<GrGallery />} />
        </div>
        <div className="col-lg-11">
          <AboutTitles titre="Gallery" />
          <div className="d-flex gap-2">
            <div className="div-img">
              <img src={img1} alt="" className="rounded-3" />
            </div>
            <div className="div-img">
              <img src={img1} alt="" className="rounded-3" />
            </div>
            <div className="div-img">
              <img src={img1} alt="" className="rounded-3" />
            </div>
          </div>
          <div className="d-flex gap-2 mt-2">
            <div className="div-img">
              <img src={img1} alt="" className="rounded-3" />
            </div>
            <div className="div-img">
              <img src={img1} alt="" className="rounded-3" />
            </div>
            <div className="div-img">
              <img src={img1} alt="" className="rounded-3" />
            </div>
          </div>
          <div className="d-flex gap-2 mt-2">
            <div className="div-img">
              <img src={img1} alt="" className="rounded-3" />
            </div>
            <div className="div-img">
              <img src={img1} alt="" className="rounded-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
