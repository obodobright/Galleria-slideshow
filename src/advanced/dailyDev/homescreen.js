import React, { useState, useEffect } from "react";
import "./homescreen.css";
import moment from "moment";
import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";
import { MdMoodBad } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaHandPeace } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Homescreen = () => {
  // Creating the application state
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userQuote, setUserQuote] = useState("");
  const [files, setFiles] = useState("https://via.placeholder.com/150");

  // Upload image function
  const handleUploadImage = (e) => {
    const fileHolder = e.target.files[0];
    const saveImage = URL.createObjectURL(fileHolder);
    setFiles(saveImage);
  };

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: data.length + 1,
      name: userName,
      quote: userQuote,
      image: files,
      time: Date.now(),
    };
    setData([...data, newUser]);
    setUserName("");
    setUserQuote("");
    setFiles("https://via.placeholder.com/150");
  };

  // delete function
  const handleDelete = (id) => {
    const delUser = data.filter((datum) => datum.id !== id);
    setData(delUser);
  };
  //  useEffect for storage  of Data
  useEffect(() => {
    localStorage.setItem("fileHolder", JSON.stringify(data));
  }, [data]);

  // useEffect for getting data
  useEffect(() => {
    const getStoredData = JSON.parse(localStorage.getItem("fileHolder"));
    setData(getStoredData);
  }, []);

  // Rendering the UI
  return (
    <section>
      <div className="navbar">
        <a href="/" className="navbar-brand">
          What's on your mind <RiQuestionnaireFill />
        </a>
      </div>
      <div className="welcome-intro">
        <h1>
          Hello there <FaHandPeace />
        </h1>
        <h3>We want to hear your stories, as it holds a unique inspiration for another </h3>
      </div>
      <div className="container">
        {/* Form input container */}
        <form className="inputContainer">
          <img className="inputImage" src={files} alt="uploadImage" />
          <div className="inputStyle">
            <div>
              <input type="file" onChange={handleUploadImage} />
            </div>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="What's on your mind ?"
                value={userQuote}
                onChange={(e) => setUserQuote(e.target.value)}
              />
            </div>
            <button className="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
        {/* Result container */}
        <div className="containerWrapper">
          {data.map((user) => (
            <div className="containerCard" key={user.id}>
              <div className="containerCardRow">
                <div className="containerCardRowCancel" onClick={() => handleDelete(user.id)}>
                  <FaTimes />
                </div>
                <img className="containerCardRowImage" src={user.image} />
              </div>
              <FaQuoteLeft />
              <div className="containerCardQuote">{user.quote}</div>
              <FaQuoteRight />
              <div className="containerCardName">{user.name}</div>
              <div className="containerCardTime">{moment(user.time).fromNow()}</div>
            </div>
          ))}
          {/* Condition rendering to state if there are post in the application */}
          {data.length === 0 && (
            <div className="text-center m-4" style={{ color: "#000064" }}>
              <IconContext.Provider value={{ className: "moodBtn" }}>
                <MdMoodBad />
              </IconContext.Provider>

              <h1>No available post</h1>
              <h3>Create new Post</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Homescreen;
