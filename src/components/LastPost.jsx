import arrow from "../images/arrow.svg";
import bg from "../images/latestPost.png";

const LastPost = () => {
  return (
    <section className="px-[5%] py-[30px]">
      <h1 className="font-bold text-[30px] lg:text-[40px]">Latest Post</h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[30px] mt-[10px]">
        <img src={bg} className="w-full md:w-[400px] xl:w-[500px] rounded-[30px]" />
        <div className="w-full lg:w-[450px]">
          <h2 className="font-bold text-[20px] text-[#292F36]">
            Low Cost Latest Invented Interior Designing Ideas
          </h2>
          <p className="text-[#4D5053]">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
            <br />
            <br /> Lorem Ipsum is not simply random text. It has roots in a
            piece of classica.
          </p>
          <div className="flex justify-between items-center mt-[20px]">
            <span className="text-[#4D4F52]">26 December,2022</span>
            <img src={arrow} className="w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastPost;
