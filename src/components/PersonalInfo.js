import "./styles/Personal.css";

export default function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((currentPersonalInfo) => {
      return {
        ...currentPersonalInfo,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <h2>Personal Info: </h2>
      <label for="fName">First Name:</label>
      <input
        name="fName"
        type="text"
        id="fName"
        placeholder="First Name"
        onChange={handleChange}
        value={personalInfo.fName}
      />
      <label for="lName">Last Name:</label>
      <input
        name="lName"
        type="text"
        id="lName"
        placeholder="Last Name"
        onChange={handleChange}
        value={personalInfo.lName}
      />
      <label for="tel">Tel:</label>
      <input
        name="tel"
        type="text"
        id="tel"
        placeholder="Telephone"
        onChange={handleChange}
        value={personalInfo.tel}
      />
      <label for="email">Email:</label>
      <input
        name="email"
        type="email"
        id="email"
        placeholder="E-Mail"
        onChange={handleChange}
        value={personalInfo.email}
      />
      <label for="linkedIn">LinkedIn:</label>
      <input
        name="linkedIn"
        type="text"
        id="linkedIn"
        placeholder="Linked In"
        onChange={handleChange}
        value={personalInfo.linkedIn}
      />
      <label for="github">Github:</label>
      <input
        name="github"
        type="text"
        id="github"
        placeholder="Github"
        onChange={handleChange}
        value={personalInfo.github}
      />
    </div>
  );
}
