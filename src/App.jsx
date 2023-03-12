
import "./App.css";
import { Routes,Route } from "react-router-dom";
import Firstpg from "./components/Firstpg";
import Secondpg from "./components/Secondpg";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec5 from "./components/Sec5";
import Sec6 from "./components/Sec6";
import Sec7 from "./components/Sec7";
function App() {
  return (
    <Routes>
      
      <Route path="/" element={ <Firstpg/>}/>
      <Route path="/Secondpg" element={ <Secondpg/>}/>
      <Route path="/Sec2" element={ <Sec2/>}/>
      <Route path="/Sec3" element={ <Sec3/>}/>
      <Route path="/Sec4" element={ <Sec4/>}/>
      <Route path="/Sec5" element={ <Sec5/>}/>
      <Route path="/Sec6" element={ <Sec6/>}/>
      <Route path="/Sec7" element={ <Sec7/>}/>
    </Routes>
  )
}
export default App;


