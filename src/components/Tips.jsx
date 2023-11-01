import s1 from "../images/services1.png";
import s2 from "../images/services2.png";
import s3 from "../images/services3.png";
import s4 from "../images/services4.png";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";

const Tips = () => {
  const tips = [
    {
      imgUrl: s1,
      icon: icon1,
      title: "Concept & Details",
    },
    {
      imgUrl: s2,
      icon: icon2,
      title: "Idea for Work",
    },
    {
      imgUrl: s3,
      icon: icon3,
      title: "Design",
    },
    {
      imgUrl: s4,
      icon: icon4,
      title: "Perfection",
    },
  ];
  return (
    <section className="w-[90%] mb-[80px] mx-auto py-[30px] lg:py-[50px] px-[30px] rounded-[30px] bg-[#F4F0EC]">
      <h1 className="font-bold text-[25px] lg:text-[50px] text-center text-[#363B41]">
        How We Work
      </h1>
      <p className="text-center w-full lg:w-[600px] mx-auto text-[#4D5053]">
        It is a long established fact will be distracted.Lorem Ipsum is simply
        dummy text of the printing and typesetting industry.
      </p>
      <div className="flex flex-col gap-[50px] mt-[30px]">
        {tips.map((e, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between xl:justify-center gap-[30px] lg:gap-[50px] xl:gap-[70px] ${
              index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <img
              src={e.imgUrl}
              className="w-full md:w-[300px] lg:w-[400px] max-w-[550px] grow rounded-es-[50%] rounded-se-[20%]"
            />
            <div className="w-full md:w-[300px] lg:w-[400px] max-w-[550px] grow flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <img
                  src={e.icon}
                  className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
                />
                <span className="text-white text-[60px]">0{index + 1}</span>
              </div>
              <div className="mt-[15px] lg:mt-[30px]">
                <h2 className="font-bold text-[25px] text-[#292F36]">
                  {e.title}
                </h2>
                <p className="text-[#4D5053]">
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
