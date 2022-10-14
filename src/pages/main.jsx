import Layout from "../components/layout";
import HomePage from "./home/home";
import { HashRouter, Routes, Route } from "react-router-dom";

const MainWrapper = () => {
  return (
    <div className="main-wrapper">
      <HashRouter basename="/">
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
};

export default MainWrapper;
