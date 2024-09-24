import React, { useState } from "react";
import "./style.css";

const CustomSelect = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [openOptions, setOpenOptions] = useState(false);

  // console.log(selectedOption,'selectedOption')
  return (
    <div className="custom-select">
      <div
        className="selected-option"
        onClick={() => setOpenOptions(!openOptions)}
      >
        {selectedOption.label}
        <span
          className={`arrow ${selectedOption === "open" ? "arrow-open" : ""}`}
        >
          <svg
            className="option-arrow"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.45 5.59375L8.37499 9.66875C7.89374 10.15 7.10624 10.15 6.62499 9.66875L2.54999 5.59375"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {/* &#9660; */}
        </span>
      </div>
      {openOptions && (
        <div className="options">
          {options.map((option, index) => (
            <span
              key={option.value}
              className={`option`}
              style={{
                backgroundColor:
                  selectedOption.value === option.value
                    ? "#ccc"
                    : "transparent",
              }}
              onClick={() => {
                setSelectedOption(option);
                setOpenOptions(!openOptions);
              }}
            >
              {option.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
