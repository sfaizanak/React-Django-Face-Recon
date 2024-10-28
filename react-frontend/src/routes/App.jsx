import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const app = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default app;
