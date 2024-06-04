import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { LiaTableSolid } from "react-icons/lia";
import IconDash from "./IconDash";
export default function Sidebar() {
  return (
    <div className="sidebar shadow">
      <div className="d-flex justify-content-start mb-3">
        <div>
          <IconDash icon={<AiFillDashboard />} />
        </div>
        <h6>Dashboard</h6>
      </div>

      <div>
        <div className="d-flex justify-content-start mb-3">
          <IconDash icon={<IoIosSettings />} />
          <h6>Components</h6>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-start mb-3">
          <IconDash icon={<FaTools />} />
          <h6>Utilities</h6>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-start mb-3">
          <IconDash icon={<FaFolder />} />
          <h6>Pages</h6>
        </div>
        <div className="d-flex justify-content-start mb-3">
          <IconDash icon={<LiaTableSolid />} />
          <h6>Tables</h6>
        </div>
        <div className="d-flex justify-content-start mb-3">
          <IconDash icon={<FaChartArea />} />
          <h6>Charts</h6>
        </div>
      </div>
    </div>
  );
}
