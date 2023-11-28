import { useContext } from "react";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { AuthContext } from "../../contexts/AuthContext";
import Menu from "./Menu";

export default function SideBar() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="px-5 h-screen bg-white max-w-[220px] font-sans">
      <Logo />
      <nav>
        <ul>
          <Menu
            link={"/home"}
            title={"Dashboard"}
            icon={"fa-solid fa-border-all"}
            isActive={true}
          />
          <Menu
            link={`/logs/${DateTime.now().weekNumber}`}
            title={"Log"}
            icon={"fa-regular fa-clipboard"}
          />
          {/* <Link to={``} ></Link> */}

          <Menu
            link={"/reports"}
            title={"Report"}
            icon={"fa-solid fa-chart-line"}
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
