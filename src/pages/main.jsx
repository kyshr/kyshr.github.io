import Layout from "../components/layout";
import HomePage from "./home/home";
import { HashRouter, Routes, Route } from "react-router-dom";

const MainWrapper = () => {
  return (
    <div className="main-wrapper">
      <HashRouter basename="/">
        <Routes>
          <Layout>
            <Route path="/" element={<HomePage />} />
          </Layout>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default MainWrapper;
