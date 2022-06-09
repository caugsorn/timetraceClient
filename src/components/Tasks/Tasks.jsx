export default function Task({ id, title, completed, isClicked }) {
  return (
    <div className="w-full my-1">
      <li className="list-none flex justify-between items-center overflow-auto">
        <i className={`mr-2 fa-regular fa-circle`} />
        {title}
        <div className="">
          {/* <i className={`fa-solid fa-toggle-${completed ? "on" : "off"}`} />
          <i className="fa-regular fa-trash-can" /> */}
        </div>
      </li>
    </div>
  );
}
