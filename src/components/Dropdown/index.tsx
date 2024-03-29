import React, { useState } from "react";
import "./Dropdown.scss";

interface DropDownProps {
  options: any[];
  val?: any;
  onChange?: any;
}

const DropDown: React.FC<DropDownProps> = ({ options, val, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleValue = (option: string) => {
    onChange(option);
    setOpen(false);
  };
  return (
    <div className={`Dropdown-root ${open ? "is-open" : ""}`}>
      <div className="Dropdown-control" onClick={() => setOpen(!open)}>
        <div className="Dropdown-placeholder is-selected">{val}</div>
        <div className="Dropdown-arrow-wrapper">
          <span className="Dropdown-arrow" />
        </div>
      </div>
      <div className="Dropdown-menu">
        {options ? (
          options.map((item, key) => (
            <div
              onClick={() => handleValue(item)}
              key={key}
              className={`Dropdown-option ${val === item ? "is-selected" : ""}`}
            >
              {item}
            </div>
          ))
        ) : (
          <div>No Select</div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
