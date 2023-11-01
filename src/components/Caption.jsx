import left from "../images/left.png";
import right from "../images/right.png";

const Caption = () => {
  return (
    <section className="w-[90%] mx-auto my-[100px] lg:my-[200px] py-[30px] md:py-[50px] flex justify-between items-center gap-[10px] relative">
      <img src={left} className="absolute left-0 w-[100px] lg:w-[150px]" />
      <h1 className="font-bold italic text-[#292F36] md:text-[20px] text-center px-[10%] lg:px-[20%]">
        <i className="fa-solid fa-quote-left text-[50px] mb-[10px]"></i>
        <br />I like an interior that defies labeling. I don't really want
        someone to walk into a room and know that I did it
        <span className="block text-gray-500 font-normal mt-[10px]">BUNNY WILLIAMS</span>
      </h1>
      <img src={right} className="absolute right-0 w-[100px] lg:w-[150px]" />
    </section>
  );
};

export default Caption;
