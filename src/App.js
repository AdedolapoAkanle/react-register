import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Menu from "./Views/Menu";
import Update from "./Views/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Home />
            </div>
          }
        ></Route>
        <Route
          path="/menu"
          element={
            <div className="container">
              <Menu />
            </div>
          }
        ></Route>
        <Route
          path="/update"
          element={
            <div className="container">
              <Update />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
