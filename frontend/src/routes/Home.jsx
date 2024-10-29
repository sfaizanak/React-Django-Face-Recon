import Hero from "../components/Hero";
import Feature from "../components/Feature";
import ScrollBehaviour from "../components/ScrollBehaviour";
const Home = () => {
  document.title = "Home";
  return (
    <>
      <ScrollBehaviour>
        <Hero />
      </ScrollBehaviour>
      <ScrollBehaviour>
        <Feature />
      </ScrollBehaviour>
    </>
  );
};

export default Home;
