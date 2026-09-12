import { useState } from "react";

function Chk() {

  const [subjects, setSubjects] = useState([]);

  const handleCheckbox = (e) => {

    const value = e.target.value;

    if (e.target.checked) {

      // Add value
      setSubjects([...subjects, value]);

    } else {

      // Remove value
      setSubjects(
        subjects.filter((item) => item !== value)
      );

    }
  };


  return (
    <div>

      <h2>Select Subjects</h2>

      <label>
        <input
          type="checkbox"
          value="JavaScript"
          onChange={handleCheckbox}
        />
        JavaScript
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="React"
          onChange={handleCheckbox}
        />
        React
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="Python"
          onChange={handleCheckbox}
        />
        Python
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="C#"
          onChange={handleCheckbox}
        />
        C#
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="Java"
          onChange={handleCheckbox}
        />
        Java
      </label>


      <h3>Selected Subjects:</h3>

      <p>
        {subjects.join(", ")}
      </p>
      <h1>
        {
            subjects.map((m)=>{
                return m;
            })
        }
      </h1>

    </div>
  );
}

export default Chk;