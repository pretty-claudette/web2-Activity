import { useState } from "react"
import Header from "./assets/component/Header" 
import Info from "./assets/component/Info" 
import Skill from "./assets/component/Skill" 
import WorkExp from "./assets/component/Workexp" 
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-100vh">
        <Header name="Claudette Lladones" />
        <Info email="claudettelladones26@gmail.com" phone="0922-222-2222" address="Orosite, Legazpi" />
        <Skill skill1="Javascript" skill2="Java" skill3="React" skill4="html" skill5='c++' />
        <WorkExp date='2018-2024' date2='2014-2016' />
      </div>
    </>
  );
}

export default App;
