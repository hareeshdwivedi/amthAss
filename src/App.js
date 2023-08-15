import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu/menu.components";
import Header from "./components/header/header.components";
import Body from "./components/body/body.components";

import { NavProvider } from "./context/navContext";

export const teniaryHandler = (condition, trueValue, falseValue) => {
  return condition ? trueValue : falseValue;
};
function App() {
  return (
    <>
      <div className="container">
        <NavProvider>
          <Header />
          <Body />
          <Menu />
        </NavProvider>
      </div>
    </>
  );
}

export default App;
