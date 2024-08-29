import { useState } from "react";
import "./styles/SkillsInfo.css";

export default function SkillsInfo(skills, setSkills) {
  const [skill, setSkill] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSkill(value);
  };

  function handleSubmit() {}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Skills</h2>
        <input
          type="text"
          name="skills"
          placeholder="Skills"
          value={skill}
          onChange={handleChange}
        />
        <button type="submit">Add Skills</button>
      </form>
    </div>
  );
}
