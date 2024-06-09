import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import "./global.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import FinalPaymentBody from "./Components/FinalPaymentBody";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <FinalPaymentBody></FinalPaymentBody>
      <Footer></Footer>
    </>
  );
}

export default App;
