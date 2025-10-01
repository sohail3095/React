import { useState } from "react";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";


function App() {
  const [count, setCount] = useState(0);

  return <>
         <Header/>
         <Layout/>
         <Footer/>
  </>;
}

export default App;
