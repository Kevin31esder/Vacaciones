import { Box } from "@mui/system";
import "./App.css";
import Comentarios from "./Components/Comentarios";
import InformacionGeneral from "./Components/InformacionGeneral";
import Menus from "./Components/Menus";

function App() {
  return (
    <div className="App">
      <Menus />
      <InformacionGeneral />
      <Comentarios />
    </div>
  );
}

export default App;
