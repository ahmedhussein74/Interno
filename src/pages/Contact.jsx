import map from "../images/map.png";
import bg from "../images/contact.png";
import Message from "../components/Message";

const Contact = () => {
  return (
    <>
      <p className="h-[60px]"></p>
      <img src={bg} className="min-h-[250px]" />
      <Message />
      <img
        src={map}
        className="min-h-[250px] w-[90%] mx-auto my-[30px] rounded-[30px]"
      />
    </>
  );
};

export default Contact;
