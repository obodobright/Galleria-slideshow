import React, { useState, Fragment } from "react";

const FacebookForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email) {
      const person = { username: username, email: email };
      console.log(person);
    } else {
      console.log("empty value");
    }
  };
  return (
    <Fragment>
      <div style={formBody}>
        <div style={formContainer}>
          <h1 style={{ textAlign: "center" }}>Facebook</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username : </label>
              <input
                type="text"
                name="Username"
                value={username}
                style={inputStyle}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" style={{ marginLeft: "2em" }}>
                Email :{" "}
              </label>
              <input
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>
            <button type="submit" style={loginBtn}>
              Login
            </button>
            <p>
              <a href="#">New to facebook</a>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const loginBtn = {
  padding: "8px 16px",
  outline: "none",
  background: "blue",
  color: "white",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  margin: "auto",
  marginLeft: "0.5em",
  marginTop: "0.7em",
  borderRadius: "0.3em",
};

const inputStyle = {
  padding: "0.4em",
  borderRadius: "0.2em",
  borderColor: "blue",
  margin: "0.5em",
  outline: "none",
  width: "200px",
};
const formContainer = {
  background: "whitesmoke",
  padding: "2em 4em",
  width: "auto",
  borderRadius: "0.4em",
};
const formBody = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "blue",
};
export default FacebookForm;
