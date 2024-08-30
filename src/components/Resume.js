export default function Resume({
  personalInfo,
  professions,
  educations,
  skills,
}) {
  return (
    <div>
      <h1>Resume</h1>
      <h1>{personalInfo.fName + " " + personalInfo.lName} </h1>
      <div>
        <p>{personalInfo.tel}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.linkedIn}</p>
        <p>{personalInfo.github}</p>
      </div>
      <h2>Professional Experiences</h2>
      {professions.map((exp, index) => (
        <div key={index}>
          <h3>{exp.position}</h3>
          <h4>{exp.organization}</h4>
          <h4>{exp.startDate + "to" + exp.endDate}</h4>
        </div>
      ))}
      <h2>Education</h2>
      {educations.map((edu, index) => (
        <div key={index}>
          <h3>{edu.institutionName}</h3>
          <h3>{edu.degree + "," + edu.startYear + "-" + edu.endYear}</h3>
        </div>
      ))}
      <h2>Skills</h2>
      {skills.map((sk, index) => (
        <div key={index}>
          <h3>{sk.skill}</h3>
        </div>
      ))}
    </div>
  );
}
