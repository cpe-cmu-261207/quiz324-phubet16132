import ItemTable from "./ItemTable";
import FormCard from "./Form";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [person, setPerson] = useState([]);

  //load locationStorage
  useEffect(() => {
    if (localStorage.getItem("person") != null) {
      const buffer = localStorage.getItem("person");
      const data_list = JSON.parse(buffer);
      setPerson(data_list);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("person", JSON.stringify(person));
  }, [person.length]);

  function renderPerson() {
    return person.map((value) => {
      return (
        <ItemTable
          {...value}
          setPerson={setPerson}
          person={person}
          key={Math.random()}
        />
      );
    });
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <div className="mb-4"></div>

        <FormCard setPerson={setPerson} person={person} />
        {/* display tables for all persons */}

        <p className="is-4 title has-text-centered">Pet List</p>
        {/* sample table */}
        {renderPerson()}

        <p>Phubet Rujirekanusorn 620610804</p>
      </div>
    </div>
  );
}

export default App;
