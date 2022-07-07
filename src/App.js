import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Socials from './pages/Socials';
import Discography from './pages/Discography';
import StreamingPlatforms from './pages/StreamingPlatforms';
import ContactMe from './pages/ContactMe';
function App() {
  return (
    <div className="main-container">
      <Navbar/>
      <div className="route-container">
        <Routes>
          <Route exact path="/" element={<Socials />}/>
          <Route path="/discography" element={<Discography/>}/>
          <Route path="/streamingPlatforms" element={<StreamingPlatforms/>}/>
          <Route path="/contactme" element={<ContactMe/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
