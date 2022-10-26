import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Menu from "./Views/Menu";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
