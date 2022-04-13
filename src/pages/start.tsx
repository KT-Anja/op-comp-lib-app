import { Link, Route, Routes } from "react-router-dom";
import Alerts from "./alerts";
import Buttons from "./buttons";
import Forms from "./forms";
import Icons from "./icons";
import Links from "./links";

const Start = () => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
          <img id="op-logo" src="01_1_Onlineprinters_Logo_RGB.png"></img>
        </div>
        <div className="list-group list-group-flush">
          <Link to="/" className="list-group-item list-group-item-action">
            Home
          </Link>
          <Link
            to="/buttons"
            className="list-group-item list-group-item-action"
          >
            Buttons
          </Link>
          <Link to="/alerts" className="list-group-item list-group-item-action">
            Alerts
          </Link>
          <Link to="/forms" className="list-group-item list-group-item-action">
            Forms
          </Link>
          <Link to="/links" className="list-group-item list-group-item-action">
            Links
          </Link>
          <Link to="/icons" className="list-group-item list-group-item-action">
            Icons
          </Link>
        </div>
      </div>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <h1 className="mb-5">React Component Library</h1>
          <Routes>
            <Route path="/" element={Alerts} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/links" element={<Links />} />
            <Route path="/icons" element={<Icons />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Start;
