// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import EducationInfo from "./components/EducationInfo";
import SkillsInfo from "./components/SkillsInfo";

function App() {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    location: "",
    title: "",
  });

  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <div>
      <PersonalInfo
        personalData={personalData}
        setPersonalData={setPersonalData}
      />
      <ExperienceInfo
        experiences={experiences}
        setExperiences={setExperiences}
      />
      <EducationInfo educations={educations} setEducations={setEducations} />
      <SkillsInfo skills={skills} setSkills={setSkills} />
    </div>
  );
}

export default App;
