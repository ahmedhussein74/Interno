import brand from "../images/brand.svg";
import classic from "../images/classic.svg";
import home from "../images/home.svg";
import natural from "../images/natural.svg";
import vs from "../images/vs.svg";

const Clients = () => {
  return (
    <section className="py-[30px] md:py-[50px] px-[5%] flex flex-col md:flex-row justify-center md:justify-between items-center gap-[50px] md:gap-0">
      <img src={home} className="w-[130px] h-[40px]" />
      <img src={vs} className="w-[100px] h-[100px]" />
      <img src={brand} className="w-[160px] h-[40px]" />
      <img src={natural} className="w-[145px] h-[45px]" />
      <img src={classic} className="w-[115px] h-[45px]" />
    </section>
  );
};

export default Clients;
