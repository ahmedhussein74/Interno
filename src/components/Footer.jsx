import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="px-[5%] mt-[50px]">
      <div className="flex flex-wrap justify-center md:justify-between gap-[30px]">
        <div className="w-full md:w-[250px] flex flex-col gap-[15px] items-center lg:items-start">
          <h1 className="text-[#292F36] text-[40px] flex">
            <img src={logo} /> Interno
          </h1>
          <p className="text-[#4D5053] text-center lg:text-start">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className="flex gap-[20px]">
            <i className="fa-brands fa-facebook-f text-[#292F36] text-[30px]"></i>
            <i className="fa-brands fa-twitter text-[#292F36] text-[30px]"></i>
            <i className="fa-brands fa-linkedin-in text-[#292F36] text-[30px]"></i>
            <i className="fa-brands fa-instagram text-[#292F36] text-[30px]"></i>
          </div>
        </div>
        <ul className="w-full md:w-fit text-center text-[#292F36]">
          <li className="font-bold mb-[5px] text-[20px]">Pages</li>
          <li>About us</li>
          <li>Our Projects</li>
          <li>Our Team</li>
          <li>Contact us</li>
          <li>Services</li>
        </ul>
        <ul className="w-full md:w-fit text-center text-[#292F36]">
          <li className="font-bold mb-[5px] text-[20px]">Services</li>
          <li>Kitchen</li>
          <li>Living Room</li>
          <li>Bathroom</li>
          <li>Dinning Hall</li>
          <li>Bedroom</li>
        </ul>
        <ul className="w-full md:w-fit text-center text-[#292F36]">
          <li className="font-bold mb-[5px] text-[20px]">Contact</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </div>
      <p className="text-center text-[16px] lg:text-[20px] py-[20px]">
        Copyright © Interno | Designed by Victorflow Templates - Powered by
        Webflow
      </p>
    </footer>
  );
};

export default Footer;
