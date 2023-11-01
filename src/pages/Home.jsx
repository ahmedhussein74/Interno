import Hero from "../components/Hero";
import Work from "../components/Work";
import AboutHome from "../components/AboutHome";
import Rivew from "../components/Rivew";
import Clients from "../components/Clients";
import ProjectsHome from "../components/ProjectsHome";
import Stats from "../components/Stats";
import Articles from "../components/Articles";
import JoinUs from "../components/JoinUs";
import art1 from "../images/article1.png";
import art2 from "../images/article2.png";
import art3 from "../images/article3.png";

const Home = () => {
  const articles = [
    {
      imgUrl: art1,
      description: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022 ",
    },
    {
      imgUrl: art2,
      description: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "28 December,2022 ",
    },
    {
      imgUrl: art3,
      description: "Best For Any Office & Business Interior Solution",
      date: "30 December,2022 ",
    },
  ];
  return (
    <>
      <Hero />
      <Work />
      <AboutHome />
      <Rivew />
      <Clients />
      <ProjectsHome />
      <Stats />
      <Articles articles={articles} />
      <JoinUs />
    </>
  );
};

export default Home;
