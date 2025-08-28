import { Route, Routes } from "react-router";
import { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState(localStorage.getItem("selectedTitle") || "Set Title");
  const [color, setColor] = useState(localStorage.getItem("selectedColor") || "#cccccc");
  const [about, setAbout] = useState(localStorage.getItem("selectedAbout") || "About");
  const [contact, setContact] = useState(localStorage.getItem("selectedContact") || "Contact");
  const getTitleData = (titileData) => {
    setTitle(titileData);
  };
  const getColorData = (colorData) => {
    setColor(colorData);
  };
  const getAboutData = (aboutData) => {
    setAbout(aboutData);
    console.log("about us content", aboutData);
  };
  const getContactData = (contactData) => {
    setContact(contactData);
    console.log("contact us content", contact);
  };
  return (
    <>
      <Header title={title} color={color} />

      <Routes>
        <Route path="/" element={<Home getTitleData={getTitleData} getColorData={getColorData} getAboutData={getAboutData} getContactData={getContactData} />} />
        <Route path="/about" element={<About about={about} />} />
        <Route path="/contact" element={<Contact contact={contact} />} />
      </Routes>
    </>
  );
};

export default App;
