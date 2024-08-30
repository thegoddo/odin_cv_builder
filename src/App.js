// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import ProfessionalInfo from "./components/ProfessionalInfo";
import Skills from "./components/Skills";
import Resume from "./components/Resume";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fName: "",
    lName: "",
    tel: "",
    email: "",
    linkedIn: "",
    github: "",
  });

  const [professions, setProfessions] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <div>
      <div className="split left">
        {" "}
        <PersonalInfo
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <EducationInfo educations={educations} setEducations={setEducations} />
        <ProfessionalInfo
          professions={professions}
          setProfessions={setProfessions}
        />
        <Skills skills={skills} setSkills={setSkills} />
      </div>
      <div className="split right">
        {" "}
        <Resume
          personalInfo={personalInfo}
          professions={professions}
          educations={educations}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default App;
