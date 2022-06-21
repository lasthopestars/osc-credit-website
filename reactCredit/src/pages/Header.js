import React from "react";
import "./Header.css";
import PaidIcon from '@mui/icons-material/Paid';
const MenuItem = ({ active, children, to }) => (
  <div className="menu-item">{children}</div>
);

const Header = () => {
  return (
    <div>
      <div className="logo" >Osc Credit Services &nbsp;<PaidIcon className="coinloc"></PaidIcon> </div>

      </div>

  );
};

export default Header;