import "./App.css";
import Body from "./components/Body.jsx";
import BurgerMenu from "./components/Common/BurgerMenu.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <BurgerMenu />
      <Sidebar />
      <Body className="ml-88 overflow-y-auto flex-1" />
    </div>
  );
}

export default App;
