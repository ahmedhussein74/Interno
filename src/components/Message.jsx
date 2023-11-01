import call from "../images/call2.svg";
import mail from "../images/mail.svg";
import earth from "../images/earth.svg";

const Message = () => {
  return (
    <section className="px-[5%] py-[30px]">
      <h1 className="w-full md:w-[600px] mx-auto text-[#292F36] font-bold text-center text-[25px] lg:text-[40px]">
        We love meeting new people and helping them.
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-around gap-[30px] mt-[30px]">
        <div className="rounded-[20px] bg-[#F4F0EC] p-[20px] w-full md:w-[350px] flex flex-col gap-[30px]">
          <div className="flex gap-[15px] items-center">
            <img src={mail} className="w-[50px] h-[50px]" />
            <p className="text-[#4D5053] text-[18px]">info@yourdomain.com</p>
          </div>
          <div className="flex gap-[15px] items-center">
            <img src={call} className="w-[50px] h-[50px]" />
            <p className="text-[#4D5053] text-[18px]">+1 (378) 400-1234</p>
          </div>
          <div className="flex gap-[15px] items-center">
            <img src={earth} className="w-[50px] h-[50px]" />
            <p className="text-[#4D5053] text-[18px]">www.yourdomain.com</p>
          </div>
          <div className="flex gap-[20px]">
            <i className="fa-brands fa-facebook-f text-[#292F36] text-[20px]"></i>
            <i className="fa-brands fa-twitter text-[#292F36] text-[20px]"></i>
            <i className="fa-brands fa-linkedin-in text-[#292F36] text-[20px]"></i>
            <i className="fa-brands fa-instagram text-[#292F36] text-[20px]"></i>
          </div>
        </div>
        <form className="w-full md:w-[500px] flex flex-col gap-[20px]">
          <input
            type="text"
            placeholder="First Name"
            className="h-[40px] outline-none border-b bg-stone-50 pl-2 rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="h-[40px] outline-none border-b bg-stone-50 pl-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-[40px] outline-none border-b bg-stone-50 pl-2 rounded"
          />
          <textarea
            placeholder="Type your message"
            className="min-h-[150px] outline-none border bg-stone-50 pl-2 rounded"
          />
          <button className="mx-auto h-[50px] w-[150px] font-bold rounded text-white bg-[#292F36]">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Message;
