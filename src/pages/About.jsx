import Caption from "../components/Caption";
import bg from "../images/about.png";

const About = () => {
  return (
    <>
      <p className="h-[60px]"></p>
      <img src={bg} className="min-h-[250px]" />
      <Caption />
    </>
  );
};

export default About;
