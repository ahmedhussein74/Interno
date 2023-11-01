import pro1 from "../images/pro1.png";
import pro2 from "../images/pro2.png";
import pro3 from "../images/pro3.png";
import pro4 from "../images/pro4.png";
import arrow from "../images/arrow.svg";

const ProjectsHome = () => {
  const projects = [pro1, pro2, pro3, pro4];
  return (
    <section className="px-[5%] py-[30px]">
      <h1 className="font-bold text-[35px] lg:text-[50px] text-[#292F36] text-center">
        Follow Our Projects
      </h1>
      <p className="w-full md:w-[600px] mx-auto text-[#4D4F52] text-center text-[20px]">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <div className="flex flex-wrap justify-center lg:justify-around gap-[40px] mt-[30px]">
        {projects.map((e, index) => (
          <div key={index} className="w-fit lg:w-[400px] xl:w-[500px]">
            <img src={e} />
            <div className="flex justify-between items-center pt-2">
              <p className="text-[4D4F52]">
                <span className="font-bold text-[292F36] text-[25px]">
                  Modern Kitchan
                </span>
                <br />
                Decor / Artchitecture
              </p>
              <img src={arrow} className="w-[50px] h-[50px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsHome;
