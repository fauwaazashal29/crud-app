import React, { useState } from "react";
import "../App.css";
import axios from "axios";
function Create() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");

  const postData = () => {
    axios
      .post("https://6538b11ba543859d1bb1ba7f.mockapi.io/fakeAPI1", {
        firstname,
        lastname,
        email,
      })
      .then(() => setlastname(""), setfirstname(""), setemail(""));
  };

  return (
    <div className="form">
      <div className="border">
        <div className="formdata">form creation</div>
        <div className="formdata">
          <label>firstname</label>
          <input
            type="text"
            onChange={(e) => setfirstname(e.target.value)}
            value={firstname}
          />
        </div>

        <div className="formdata">
          <label>lastname</label>
          <input
            type="text"
            onChange={(e) => setlastname(e.target.value)}
            value={lastname}
          />
        </div>

        <div className="formdata">
          <label>email</label>
          <input
            type="text"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
        </div>

        <div className="formdata">
          <button className="submit" onClick={postData}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
