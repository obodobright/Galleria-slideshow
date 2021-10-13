import React, { useState } from "react";

const Finder = () => {
    const [text, setText] = useState("")
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false)

const searchUser = async (text) =>{
    const url = `https://api.github.com/search/users?q=${text}`
    setLoading(true)
    const response = await fetch(url)
    const user = await response.json()
    setUser(user.items)
    setLoading(false)
}

  const handleSearch = (e) =>{
e.preventDefault()
searchUser(text)
setText("")
  }



  return (
    <>
      <div className="container">
          
        <form onSubmit={handleSearch} style={{ margin: "2em 0" }}>
          <input
            type="text"
            placeholder="Search users..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
          />
          <input type="submit" value="Search" className="btn btn-primary btn-lg btn-block" />
        </form>
        
        {loading === true && <h1 className="text-danger">Loading...</h1>}
        <div style={container} className="container">
          {user.map((users) => {
            return (
              <div style={userContactContainer} key={users.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={imgContainer}>
                    <img src={users.avatar_url} alt={user.id} style={img} />
                  </div>
                  <div style={userLogin}>{users.login}</div>
                  <a href={users.html_url} style={userLink}>
                    More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const userLink = {
  textDecoration: "none",
  color: "white",
  padding: "4px 8px",
  background: "black",
  margin: "4px 0",
  borderRadius: "5px",
};
const userLogin = {
  fontFamily: "cursive",
  fontSize: "20px",
};
const imgContainer = {
  display: "flex",
  justifyContent: "center",
  marginTop:'10px'
};
const img = {
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  margin: "5px 0",
};
const container = {
  width: "100%",
  minHeight: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1px",
};
const userContactContainer = {
  width: "200px",
  height: "250px",
  background: "blue",
borderRadius: "10px",
  color: "white",
  padding:'10px',
  margin:'4px'
};
export default Finder;
