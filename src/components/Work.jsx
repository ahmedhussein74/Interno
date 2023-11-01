const Work = () => {
  const work = [
    {
      title: "Project Plan",
    },
    {
      title: "Interior Work",
    },
    {
      title: "Realization",
    },
  ];
  return (
    <section className="py-[50px] lg:py-[100px] px-[5%] flex flex-wrap justify-center lg:justify-between gap-[30px]">
      {work.map((item, index) => (
        <div
          key={index}
          className="w-full md:w-[280px] flex flex-col items-center gap-[10px] grow text-[#292F36]"
        >
          <h2 className="font-bold text-[25px]">{item.title}</h2>
          <p className="text-center">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <span>
            Read More <i className="fa-solid fa-arrow-right text-[#CDA274]"></i>
          </span>
        </div>
      ))}
    </section>
  );
};

export default Work;
