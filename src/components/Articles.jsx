import arrow from "../images/arrow.svg";

const Articles = (props) => {
  return (
    <section className="px-[5%] py-[30px]">
      <h1 className="font-bold text-[35px] md:text-[60px] text-[#292F36] text-center">
        Articles & News
      </h1>
      <p className="w-full md:w-[600px] mx-auto text-center text-[#4D4F52]">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <div className="gt justify-between gap-[30px] lg:gap-[20px] xl:gap-[50px] mt-[30px] ">
        {props.articles.map((e, index) => (
          <div
            key={index}
            className="border rounded-[35px] w-full p-[15px] grow max-w-[400px]"
          >
            <img src={e.imgUrl} className="rounded-t-[20px] w-full" />
            <p className="font-bold text-[20px] text-[#292F36]">
              {e.description}
            </p>
            <div className="flex justify-between items-center mt-[20px]">
              <span className="text-[#4D4F52]">{e.date}</span>
              <img src={arrow} className="w-[40px] h-[40px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
