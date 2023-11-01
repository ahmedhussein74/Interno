import Tips from "../components/Tips";
import bg from "../images/services.png";
import JoinUs from "../components/JoinUs";
import ServicesComponent from "../components/ServicesComponent";

const Services = () => {
  return (
    <>
      <p className="h-[60px]"></p>
      <img src={bg} className="min-h-[250px]" />
      <ServicesComponent />
      <Tips />
      <JoinUs />
    </>
  );
};

export default Services;
