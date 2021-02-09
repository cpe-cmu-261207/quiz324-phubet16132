import { useState } from "react";

const FormCard = (porps) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  function addPerson() {
    const person = { name, gender, age };
    props.setPerson([...props.person, person]);
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Coco"
            //update related state based on event
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            className="input"
            type="text"
            placeholder="Please select .."
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 5"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          ></input>
        </div>

        <button
          className="button is-danger is-fullwidth"
          onClick={(e) => {
            addPerson(e);
            setName("");
            setGender("");
            setAge("");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormCard;
