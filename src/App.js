import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Landing from "./components/Landing";
import Menu from "./components/Menu";

const styleApp = {
    display: "flex",
    flexDirection: "row",
    fontFamily: "poppins",
    minWidth: "800px",
    boxSizing: "border-box"
}

function App() {
  return (
   <div style={styleApp}>
       <Menu />
     <Landing/>
   </div>
);
}

export default App;
