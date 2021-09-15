import React, { useState, Fragment, useEffect } from "react";
import UI from "./practice2";

const Practice = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = "https://api.github.com/users";
  // const userData = async () => {
  //   setLoading(true);
  //   const response = await fetch(url);
  //   const user = await response.json();
  //   console.log(user);
  //   setUser(user);
  //   setLoading(false);
  // };


  useEffect(()=>{
updataSearch()
  }, [])
  useEffect(() => {
    fetch(url)
    .then((res)=> {
      if(res.status >=200 && res.status <= 299){
        return res.json()
      }
      else{
        setLoading(false)
        setIsError(true)
      }
    }
    )
    .then((user)=>{
      setUser(user)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error);
     setIsError(true)
    })
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>FETCHING USER...</h1>;
  }

  if (isError) {
    return (
      <div>
        <h1>An error occured </h1>
      </div>
    );
  }

  return (
    <Fragment>
      <div style={styleContainer}>
        {user.map((users) => (
          <UI key={users.id} users={users} />
        ))}
      </div>
    </Fragment>
  );
};

const styleContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1em",
};
export default Practice;
