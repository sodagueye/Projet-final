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
    <div className="sidebar">
      <div className="d-flex p-3">
        <IconDash icon={<AiFillDashboard />} />
        <h6 className="ms-3">Dashboard</h6>
      </div>
      <div>
        <div className="d-flex p-3">
          <IconDash icon={<IoIosSettings />} />
          <h6 className="ms-3">Components</h6>
        </div>
      </div>
      <div>
        <div className="d-flex p-3">
          <IconDash icon={<FaTools />} />
          <h6 className="ms-3">Utilities</h6>
        </div>
      </div>
  
      <div>
        <div className="d-flex p-3">
          <IconDash icon={<FaChartArea />} />
          <h6 className="ms-3">Charts</h6>
        </div>
       
        <div className="d-flex p-3">
          <IconDash icon={<LiaTableSolid />} />
          <h6 className="ms-3">Tables</h6>
        </div>
       
       
        <div className="d-flex p-3">
          <IconDash icon={<FaFolder />} />
          <h6 className="ms-3">Pages</h6>
        </div>
       
     
      </div>
    </div>
  );
}
