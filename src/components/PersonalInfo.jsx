import "./styles/PersonalInfo.css";

export default function PersonalInfo({ personalData, setPersonalData }) {
  const handleData = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        {" "}
        <h2>Personal Info</h2>
        <label>First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={personalData.firstName}
          onChange={handleData}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={personalData.lastName}
          onChange={handleData}
        />
        <label>Phone: </label>
        <input
          type="number"
          placeholder="Phone Number"
          name="tel"
          value={personalData.tel}
          onChange={handleData}
        />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={personalData.email}
          onChange={handleData}
        />
        <label>Location: </label>
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={personalData.location}
          onChange={handleData}
        />
        <label>Professional Title: </label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={personalData.title}
          onChange={handleData}
        />
      </form>
    </div>
  );
}
