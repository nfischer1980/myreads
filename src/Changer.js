import { useState } from "react";
import ShelfOptions from "./ShelfOptions";
import PropTypes from "prop-types";

const Changer = ({ shelf, onStatusChange }) => {
  const [selected, setSelected] = useState(shelf);
  console.log("current shelf:" + shelf);

  const handleChange = (selectedOption) => {
    selectedOption.preventDefault();
    setSelected(selectedOption.target.value);
    onStatusChange(selectedOption.target.value);
    console.log(selectedOption.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={selected ?? "none"}>
        <option value="move" disabled>
          Move to...
        </option>
        {ShelfOptions.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Changer.propTypes = {
  shelf: PropTypes.string,
  onStatusChange: PropTypes.func,
};

export default Changer;
