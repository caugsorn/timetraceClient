import useState from "react";

function Priority() {
  return (
    <div className="fire">
      <input type="radio" id="priority-1" name="priority" value="priority-1" />
      <label for="priority-1">
        <i className="fa-solid fa-fire" />
      </label>

      <input type="radio" id="priority-2" name="priority" value="priority-2" />
      <label for="priority-2">
        <i className="fa-solid fa-fire" />
      </label>

      <input type="radio" id="priority-3" name="priority" value="priority-3" />
      <label for="priority-3">
        <i className="fa-solid fa-fire" />
      </label>

      <input type="radio" id="priority-4" name="priority" value="priority-4" />
      <label for="priority-4">
        <i className="fa-solid fa-fire" />
      </label>

      <input type="radio" id="priority-5" name="priority" value="priority-5" />
      <label for="priority-5">
        <i className="fa-solid fa-fire" />
      </label>
    </div>
  );
}

export default Priority;
