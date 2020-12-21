import "./App.css";
import TopBar from "./components/TopBar";
import GameBox from "./components/GameBox";
import Footer from "./components/Footer";
import GitHubIcon from "@material-ui/icons/GitHub";

function App() {
  return (
    <div className="App">
      <TopBar />
      <GameBox />
      <div className="githIcon">
        <GitHubIcon
          fontSize="large"
          onClick={(event) => window.open("https://github.com/anurag-pratik", "_blank")
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
