import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

//check
export default App;
