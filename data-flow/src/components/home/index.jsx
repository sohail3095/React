import { useState } from "react";

const Home = ({ getTitleData, getColorData, getAboutData, getContactData }) => {
  const [color, setColor] = useState(localStorage.getItem("selectedColor"));
  const [title, setTitle] = useState(localStorage.getItem("selectedTitle"));
  const [about, setAbout] = useState(localStorage.getItem("selectedAbout"));
  const [contact, setContact] = useState(localStorage.getItem("selectedContact"));

  const handleColorChange = (e) => {
    const Cvalue = e.target.value;
    setColor(Cvalue);
    getColorData(color);
  };
  const handleSetTitle = (e) => {
    const Tvalue = e.target.value;
    setTitle(Tvalue);
    getTitleData(title);
    console.log(title);
  };
  const handleAboutData = (e) => {
    const Abvalue = e.target.value;
    setAbout(Abvalue);
    getAboutData(about);
  };
  const handleContactData = (e) => {
    const ContactValue = e.target.value;
    setContact(ContactValue);
    getContactData(contact);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("selectedColor", color);
    localStorage.setItem("selectedTitle", title);
    localStorage.setItem("selectedAbout", about);
    localStorage.setItem("selectedContact", contact);
  };

  const handelOnReset = (e) => {
    e.preventDefault();
    localStorage.removeItem("selectedColor");
    localStorage.removeItem("selectedTitle");
    localStorage.removeItem("selectedAbout");
    localStorage.removeItem("selectedContact");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleOnSubmit}>
        <div>
          <label> Choose a theme color </label>
          <input type="color" placeholder="Set Title" value={color} onChange={handleColorChange} />
        </div>
        <div>
          <label> Set Title </label>
          <input type="text" placeholder="Set Title" value={title} onChange={handleSetTitle} />
        </div>
        <div>
          <label>About </label>
          <textarea name="user_comment" value={about} onChange={handleAboutData} rows="5" cols="40" placeholder="Enter your about us here..."></textarea>
        </div>
        <div>
          <label>Contact </label>
          <textarea name="user_comment" value={contact} onChange={handleContactData} rows="5" cols="40" placeholder="Enter your contact us here..."></textarea>
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="btn" style={{ background: color }}>
            Submit
          </button>
          <button className="btn" style={{ background: color }} onClick={handelOnReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
