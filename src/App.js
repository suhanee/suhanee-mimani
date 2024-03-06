import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Aboutme } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
