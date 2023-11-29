import { useContext } from "react";
import { DateTime } from "luxon";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { AuthContext } from "../../contexts/AuthContext";
import Menu from "./Menu";

export default function SideBar() {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const isLinkActive = (link) => {
    return location.pathname === link;
  };

  return (
    <div className="px-5 h-screen bg-white max-w-[220px] font-sans">
      <Logo />
      <nav>
        <ul>
          <Menu
            link={"/home"}
            title={"Dashboard"}
            icon={"fa-solid fa-border-all"}
            isActive={isLinkActive("/home")}
          />
          <Menu
            link={`/logs/${DateTime.now().weekNumber}`}
            title={"Log"}
            icon={"fa-regular fa-clipboard"}
            isActive={isLinkActive(`/logs/${DateTime.now().weekNumber}`)}
          />
          <Menu
            link={"/reports"}
            title={"Report"}
            icon={"fa-solid fa-chart-line"}
            isActive={isLinkActive("/reports")}
          />
          <Menu
            link={"/login"}
            title={"logout"}
            icon={"fa-solid fa-gear"}
            onClick={() => logout}
          />
        </ul>
      </nav>
    </div>
  );
}
