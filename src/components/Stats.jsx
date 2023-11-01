import line from "../images/line.png";

const Stats = () => {
  return (
    <section className="px-[5%] py-[30px] bg-[#F4F0EC] min-h-[450px] flex flex-col md:flex-row justify-around items-center">
      <div className="flex flex-col items-center">
        <span className="text-[#CDA274] text-[80px]">12</span>
        <p className="text-[#4D5053]">Years Of Experiance</p>
      </div>
      <img src={line} className="hidden md:block" />
      <div className="flex flex-col items-center">
        <span className="text-[#CDA274] text-[80px]">85</span>
        <p className="text-[#4D5053]">Success Project</p>
      </div>
      <img src={line} className="hidden md:block" />
      <div className="flex flex-col items-center">
        <span className="text-[#CDA274] text-[80px]">15</span>
        <p className="text-[#4D5053]">Active Project</p>
      </div>
      <img src={line} className="hidden md:block" />
      <div className="flex flex-col items-center">
        <span className="text-[#CDA274] text-[80px]">95</span>
        <p className="text-[#4D5053]">Happy Customers</p>
      </div>
    </section>
  );
};

export default Stats;
