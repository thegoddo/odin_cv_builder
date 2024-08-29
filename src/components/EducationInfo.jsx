import { useState } from "react";
import "./styles/EducationInfo.css";

export default function EducationInfo(educations, setEducations) {
  const [education, setEducation] = useState({
    degree: "",
    startDate: "",
    endDate: "",
    institutionName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <h2>Education</h2>
        <label>Degree: </label>
        <input
          type="text"
          name="degree"
          value={education.degree}
          placeholder="Degree"
          onChange={handleChange}
        />
        <label>Start Date: </label>
        <input
          type="date"
          name="startDate"
          value={education.startDate}
          placeholder="Start Date"
          onChange={handleChange}
        />
        <label>End Date: </label>
        <input
          type="date"
          name="endDate"
          value={education.endDate}
          placeholder="End Date"
          onChange={handleChange}
        />
        <label>Institution Name: </label>
        <input
          type="text"
          name="intitutionName"
          value={education.institutionName}
          placeholder="Institution Name"
          onChange={handleChange}
        />
        <button type="submit">Add More</button>
      </form>
    </div>
  );
}
