import bg from '../images/kitchen.png'
import call from '../images/call.svg'

const AboutHome = () => {
  return (
    <section className="px-[5%] py-[30px] flex justify-center lg:justify-between flex-wrap gap-[20px]">
      <div className="w-full lg:w-[400px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[30px] lg:text-[40px]">
          We Create The Art Of Stylish Living Stylishly
        </h1>
        <p className="text-[20px] text-[#4D5053]">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <div className="flex items-center gap-[10px]">
          <img src={call} className="w-[80px] h-[80px]" />
          <p className="font-bold text-[20px] text-[#4D5053]">
            012345678
            <br />
            Call us
          </p>
        </div>
        <button className="bg-[#292F36] text-white w-[160px] h-[50px] rounded-lg">
          Get Free Estimate
          <i className="fa-solid fa-arrow-right text-[#CDA274] ml-1"></i>
        </button>
      </div>
      <img
        src={bg}
        className="w-full md:w-[500px] rounded-se-[45%] rounded-es-[20%]"
      />
    </section>
  );
}

export default AboutHome