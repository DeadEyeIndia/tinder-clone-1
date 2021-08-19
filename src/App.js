import Header from "./Components/Header";
import TinderCards from "./Components/TinderCards";
import SwipeButtons from "./Components/SwipeButtons";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
