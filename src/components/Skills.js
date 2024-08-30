import { useState } from "react";

export default function Skills({ skills, setSkills }) {
  const [skill, setSkill] = useState({
    id: "",
    skill: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill((current) => {
      return {
        ...current,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (skill.id) {
      setSkills((currentSkill) => {
        currentSkill.map((sk) => (sk.id === skill.id ? skill.id : sk.id));
      });
    } else {
      setSkills((currentSkill) => {
        return [...currentSkill, { ...skill, id: crypto.randomUUID() }];
      });
    }
    setSkill({
      id: "",
      skill: "",
    });
  };
  return (
    <div>
      <h2>Skills:</h2>
      <input
        name="skill"
        type="text"
        id="skill"
        placeholder="Skill"
        onChange={handleChange}
        value={skill.skill}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
