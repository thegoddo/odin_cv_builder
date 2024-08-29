import { useState } from "react";
import "./styles/ProfessionalInfo.css";

export default function ExperienceInfo(experiences, setExperiences) {
  const [experience, setExperience] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit() {}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Professional Experience</h2>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Position Title"
          value={experience.title}
          onChange={handleChange}
        />
        <label>Company Name:</label>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={experience.company}
          onChange={handleChange}
        />
        <label>Start Date: </label>
        <input type="date" name="startDate" onChange={handleChange} />
        <label>End Date: </label>
        <input type="date" name="endDate" onChange={handleChange} />
        <button type="submit">Add More</button>
      </form>
    </div>
  );
}
