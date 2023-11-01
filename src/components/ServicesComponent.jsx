const ServicesComponent = () => {
  const services = [
    "Project Plan",
    "Interior Work",
    "Retail Design",
    "2d/3d Art Work",
    "Interior Work",
    "Decoration Work",
  ];
  return (
    <section className="w-[90%] xl:w-[70%] mx-auto py-[50px] flex flex-wrap justify-center lg:justify-between gap-[35px]">
      {services.map((e, index) => (
        <div
          key={index}
          className="w-full md:w-[250px] xl:w-[300px] hover:bg-gray-300 duration-500 rounded-lg p-2"
        >
          <h2 className="text-[20px] font-bold text-[292F36] text-center mb-[10px]">
            {e}
          </h2>
          <p className="text-[4D4F52] text-center">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="text-[#292F36] w-[150px] h-[40px] rounded-lg block mx-auto mt-[10px]">
            Read More
            <i className="fa-solid fa-arrow-right text-[#CDA274] ml-1"></i>
          </button>
        </div>
      ))}
    </section>
  );
};

export default ServicesComponent;
