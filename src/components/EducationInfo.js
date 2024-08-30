import { useState } from "react";

export default function EducationInfo({ educations, setEducations }) {
  const [education, setEducation] = useState({
    id: "",
    institutionName: "",
    startYear: "",
    endYear: "",
    degree: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((currentEdu) => {
      return {
        ...currentEdu,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (education.id) {
      setEducations((currentEdu) => {
        currentEdu.map((ce) => (ce.id === education.id ? education.id : ce.id));
      });
    } else {
      setEducations((currentEdu) => {
        return [
          ...currentEdu,
          {
            ...education,
            id: crypto.randomUUID(),
          },
        ];
      });
    }
    setEducation({
      id: "",
      institutionName: "",
      startYear: "",
      endYear: "",
      degree: "",
    });
  };
  return (
    <div>
      <h2>Educational Info:</h2>
      <label for="institutionName">Institution: </label>
      <input
        name="institutionName"
        type="text"
        id="institutionName"
        placeholder="Institution"
        onChange={handleChange}
        value={education.institutionName}
      />
      <label for="startYear">Start Year:</label>
      <input
        name="startYear"
        type="date"
        id="startYear"
        placeholder="Start Year"
        onChange={handleChange}
        value={education.startYear}
      />
      <label for="endYear">End Year:</label>
      <input
        name="endYear"
        type="date"
        id="endYear"
        placeholder="End Year"
        onChange={handleChange}
        value={education.endYear}
      />
      <label for="degree">Degree:</label>
      <input
        name="degree"
        type="text"
        id="degree"
        placeholder="Degree"
        onChange={handleChange}
        value={education.degree}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
