import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
   if(firstName && email){
       const person = {firstName, email}
      setUser((user) =>{
          return [...user, person]
      })
   }
   else{
       console.log('empty value')
   }
setLoading(true)
  };
  if(loading){
      return <p>Loading</p>
  }
  return (
    <React.Fragment>
      <form style={form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={formControl}
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={formControl}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      <div style={formOutput}>
          <h3>Ouput</h3>
        <p>
          {user.map((users) => (
            <div>
              <h4>{users.firstName}</h4>
              <span>{users.email}</span>
            </div>
          ))}
        </p>
      </div>
    </React.Fragment>
  );
};
const formOutput={
    background:'pink',
    padding:'0.5em',
    margin:'2em',
    borderRadius:'0.5em',
    width:'200px'
}
const form = {
  padding: "2em",
  margin: "2em",
  background: "grey",
  borderRadius: "0.7em",
  width: "fit-content",
  color: "white",
};
const formControl = {
  padding: "0.5em 0.8em",
  margin: "0.7em",
  width: "250px",
  borderRadius: "0.5em",
  border: "none",
  outline: "none",
  marginLeft: "1em",
};
export default Form;
