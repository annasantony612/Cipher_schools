
import "./App.css";
import { Routes,Route } from "react-router-dom";
import Firstpg from "./components/Firstpg";

import Secondpg from "./components/Secondpg";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={ <Firstpg/>}/>
      <Route path="/Secondpg" element={ <Secondpg/>}/>
    </Routes>
  )
}
export default App;

