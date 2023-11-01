import nattasha from "../images/nattasha.png";
import raymond from "../images/raymond.png";
import benny from "../images/benny.png";

const Rivew = () => {
  const reviews = [
    {
      img: nattasha,
      name: "Nattasha Mith",
      city: "Sydney, USA",
    },
    {
      img: raymond,
      name: "Raymond Galario",
      city: "Sydney, Australia",
    },
    {
      img: benny,
      name: "Benny Roll",
      city: "Sydney, New York",
    },
  ];
  return (
    <section className="w-[90%] mx-auto my-[30px] px-[10px] md:px-[30px] py-[30px] md:py-[50px] lg:py-[80px] bg-[#F4F0EC] rounded-[30px]">
      <h1 className="text-[#292F36] font-bold text-[30px] lg:text[50px] text-center">
        What the People Thinks About Us
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-between gap-[20px] mt-[30px]">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[250px] p-[20px] md:p-[20px] grow bg-white rounded-[10px]"
          >
            <div className="flex gap-[10px]">
              <img src={item.img} className="w-[70px] h-[70px] rounded-full" />
              <p className="text-[#4D5053]">
                <span className="font-bold text-[#292F36] text-[18px]">{item.name}</span>
                <br />
                {item.city}
              </p>
            </div>
            <p className="text-[#4D5053]">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled it to make a type book.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rivew;
