import { useState } from "react";
import "./styles/Professional.css"

export default function ProfessionalInfo({ professions, setProfessions }) {
  const [profession, setProfession] = useState({
    id: "",
    organization: "",
    startDate: "",
    endDate: "",
    position: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfession((currentProfession) => {
      return {
        ...currentProfession,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (profession.id) {
      setProfessions((currentProfession) => {
        currentProfession.map((cp) =>
          cp.id === profession.id ? profession.id : cp.id
        );
      });
    } else {
      setProfessions((currentProfession) => {
        return [
          ...currentProfession,
          { ...profession, id: crypto.randomUUID() },
        ];
      });
    }
    setProfession({
      id: "",
      organization: "",
      startDate: "",
      endDate: "",
      position: "",
    });
  };
  return (
    <div>
      <h2>Professional Info:</h2>
      <label for="organization">Organization:</label>
      <input
        name="organization"
        type="text"
        id="organization"
        placeholder="Organization"
        onChange={handleChange}
        value={profession.organization}
      />
      <label for="startDate">Start Date:</label>
      <input
        name="startDate"
        type="date"
        id="startDate"
        placeholder="Start Date"
        onChange={handleChange}
        value={profession.startDate}
      />
      <label for="endDate">End Date:</label>
      <input
        name="endDate"
        type="date"
        id="endDate"
        placeholder="End Date"
        onChange={handleChange}
        value={profession.endDate}
      />
      <label for="position">Designation:</label>
      <input
        name="position"
        type="text"
        id="position"
        placeholder="Designation"
        onChange={handleChange}
        value={profession.position}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
