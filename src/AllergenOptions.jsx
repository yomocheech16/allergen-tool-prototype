import { useState } from "react";

function AllergenOptions({ data = [], title = "Select Options" }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((option) => option !== value)
    );
  };

  const clearAllSelections = () => {
    setSelectedOptions([]);
  };

  const selectedWithNumbers = data
    .filter((item) => selectedOptions.includes(item.label))
    .map((item) => `${item.number})${item.label}`);

  const selectedNumbers = data
    .filter((item) => selectedOptions.includes(item.label))
    .map((item) => `${item.number})`);

  return (
    <div>
      <h3>{title}</h3>

      <button onClick={clearAllSelections}>
        Clear All
      </button>

      <div className="checkbox-container">
        {data.map(({ label }) => (
          <div 
          className="checkbox-item"
          key={label}>
            <label>
              <input
                type="checkbox"
                value={label}
                checked={selectedOptions.includes(label)}
                onChange={handleCheckboxChange}
              />
              {label}
            </label>
          </div>
        ))}
      </div>

      <p>
        You selected:{" "}
        {selectedWithNumbers.length > 0
          ? selectedWithNumbers.join(", ")
          : "None"}
      </p>

      <p>
        Allergen Numbers:{" "}
        {selectedNumbers.length > 0 ? selectedNumbers.join(" ") : "None"}
      </p>
    </div>
  );
}

export default AllergenOptions;