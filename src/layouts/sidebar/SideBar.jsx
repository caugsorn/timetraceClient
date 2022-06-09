import Logo from "./Logo";
import Menu from "./Menu";

export default function SideBar() {
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
          <Menu link={"/logs"} title={"Log"} icon={"fa-regular fa-clipboard"} />
          <Menu
            link={"/reports"}
            title={"Report"}
            icon={"fa-solid fa-chart-line"}
          />
          <Menu link={"/"} title={"Settings"} icon={"fa-solid fa-gear"} />
        </ul>
      </nav>
    </div>
  );
}
