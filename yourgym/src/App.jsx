import Bottomcards from "./Bottomcards";
import Maincontent from "./Maincontent";
import Navbar from "./Navbar";
import "./styles/mainpage.css"

function App() {
  return (
    <>
      <div className="main-page">
        <Navbar />
        <Maincontent />
        <Bottomcards />
      </div>
    </>
  );
}

export default App;
