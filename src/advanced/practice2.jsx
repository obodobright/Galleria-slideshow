import React from "react";
import './practice.css'
const UI = (props) => {
  const { login, avatar_url, html_url } = props.users;

  return (
    <React.Fragment>
      <div>
        <div className="container">
          <div>
            <img src={avatar_url} alt={login} />
          </div>
          <div className="user-info">
            <h3>{login}</h3>
            <a
              href={html_url}
              className="link-profile"
              style={{ color: "black", textDecoration: "none", fontSize: "bold" }}
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default UI;
