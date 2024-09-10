import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[100%] h-[50px] items-center sm:h-[60px]  flex px-10 sm:px-28 justify-between">
      <div className="flex items-center gap-7">
        <h1 className="sm:text-4xl text-2xl  font-bold tracking-wide">
          Shortly
        </h1>
        <div className="hidden sm:flex sm:gap-4 ">
          <p className="text-gray-500 hover:text-black cursor-pointer font-bold text-sm">
            Features
          </p>
          <p className="text-gray-500 hover:text-black cursor-pointer font-bold text-sm">
            Pricing
          </p>
          <p className="text-gray-500 hover:text-black cursor-pointer font-bold text-sm">
            Resourcers
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:gap-4 sm:items-center">
        <p className="text-gray-500 hover:text-black cursor-pointer font-bold text-sm">
          Login
        </p>
        <button className="bg-[#2BD0CC] rounded-2xl h-[30px] w-[80px] text-white text-sm font-bold hover:opacity-85 text-center">
          Sign up
        </button>
      </div>

      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1 sm:hidden cursor-pointer"
        >
          <div className="h-[5px] bg-gray-400 w-[40px] duration-500"></div>
          <div className="h-[5px] bg-gray-400 w-[40px] duration-500"></div>
          <div className="h-[5px] bg-gray-400 w-[40px] duration-500"></div>
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(false)}
          className="flex flex-col sm:hidden cursor-pointer  items-center justify-center"
        >
          <div className="h-[5px] bg-gray-400 w-[40px] transform rotate-[-45deg] origin-center duration-500"></div>
          <div className="h-[5px] bg-gray-400 w-[40px] transform rotate-[45deg] origin-center -mt-[5px] duration-500"></div>
        </div>
      )}

      {isOpen && (
        <div className="sm:hidden w-[80vw] h-[50vh] bg-[#3A3053] absolute top-[55px] rounded-xl mx-auto flex flex-col items-center gap-5 pt-[10%]">
          <p className="text-lg tracking-wider hover:text-gray-400 font-semibold cursor-pointer text-white">
            Features
          </p>
          <p className="text-lg tracking-wider hover:text-gray-400 font-semibold cursor-pointer text-white">
            Pricing
          </p>
          <p className="text-lg tracking-wider hover:text-gray-400 font-semibold cursor-pointer text-white">
            Ressources
          </p>
          <hr className="w-[80%] bg-white border-1 " />
          <p className="text-lg tracking-wider hover:text-gray-400 font-semibold cursor-pointer text-white">
            Login
          </p>
          <button className="bg-[#2BD0CC] rounded-2xl h-[40px] w-[80%] text-white text-lg font-bold hover:opacity-85 text-center">
            Sign up
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
