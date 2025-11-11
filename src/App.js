import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Home from "./components/home/home.js";
import Projects from "./components/projects/projects.js";
import Education from "./components/education/education.js";

import { useState } from "react";

function App() {

  const [active, setActive] = useState("Home");
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active={active} setActive={setActive}/>
       <main className="flex-grow">
        {active === "Home" && <Home />}
        {active === "Projects" && <Projects />}
        {active === "Education" && <Education />}
      </main>
      <Footer/>
    </div>
  );
}

export default App;