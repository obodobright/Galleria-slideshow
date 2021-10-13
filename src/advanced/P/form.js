import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState([]);
  const [person, setPerson] = useState({
    firstname: "",
    email: "",
    age: "",
  });
  
  const handleOnChange = (e) =>{
      const name = e.target.name
      const value = e.target.value
      setPerson({...person,[name]:value})
  }

  const handleSubmit = (e) =>{
e.preventDefault()
if(person.firstname && person.email && person.age){
  const newPerson = {...person, id: new Date().getTime().toString()}
  setUser([...user, newPerson])
}
setPerson({
  firstname:'',
  email:'',
  age:''
})
  }
  return (
    <React.Fragment>
      <form style={form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            name="firstname"
            id="firstName"
            value={person.firstname}
            onChange={handleOnChange}
            style={formControl}
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleOnChange}
            style={formControl}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name="age"
            id="age"
            value={person.age}
            onChange={handleOnChange}
            style={formControl}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      <div style={formOutput}>
        <h3>Ouput</h3>

        {user.map((users) => (
          <div key={users.id}>
            <h5>{users.firstname}</h5>
            <span>{users.email}</span>
            <p>{users.age}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
const formOutput = {
  background: "pink",
  padding: "0.5em",
  margin: "2em",
  borderRadius: "0.5em",
  width: "200px",
};
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
