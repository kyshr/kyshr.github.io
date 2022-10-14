import Layout from "../components/layout";
import HomePage from "./home/home";

const MainWrapper = () => {
  return (
    <div className="main-wrapper">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default MainWrapper;
