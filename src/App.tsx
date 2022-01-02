import { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./styles/main.scss";

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const updateSize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.onresize = updateSize;
  }, []);

  return (
    <Home
      windowWidth={windowWidth}
    />
  );
}

export default App;