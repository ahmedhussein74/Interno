import bg from "../images/hero.jpg";

const Hero = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen px-[5%] flex flex-col justify-center gap-[10px]"
    >
      <h1 className="w-full md:w-[400px] font-bold text-[#292F36] text-[40px] md:text-[50px]">
        Let Your Home Be Unique
      </h1>
      <p className="w-full md:w-[400px] text-[#292F36]">
        There are many variations of the passages of lorem Ipsum
        fromavailable,variations of the passages.
      </p>
      <button className="bg-[#292F36] text-white w-[150px] h-[50px] rounded-lg">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
