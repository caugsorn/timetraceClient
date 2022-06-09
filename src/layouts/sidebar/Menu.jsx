import { Link } from "react-router-dom";

export default function Menu({ icon, link, title, isActive }) {
  return (
    <li
      className={`p-2 pl-3 pt-3 ${
        isActive
          ? "bg-purple text-white font-semibold rounded"
          : "text-silver font-light"
      }`}
    >
      <i className={`pr-2 gap-2 ${icon} `} />
      <Link to={link}>{title}</Link>
    </li>
  );
}
