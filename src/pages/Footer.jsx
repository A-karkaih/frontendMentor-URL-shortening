const Footer = () => {
  return (
    <div className=" bg-[#222026]  w-[100vw] ">
     <div className="flex flex-col sm:flex-row text-white pt-10 sm:py-16 items-center sm:w-[700px] md:w-[1000px] sm:mx-auto  sm:items-start  sm:gap-10 ">
      <div className="sm:mr-28">
        <h1 className="text-4xl font-bold tracking-wide">Shortly</h1>
      </div>
      <div className="mt-12 sm:mt-0 flex flex-col gap-3 font-semibold text-slate-400 sm:items-start">
        <h1 className="text-xl font-bold text-center text-white">Features</h1>
        <p className="text-center  hover:text-green-200 cursor-pointer "> Branded Links</p>
        <p className="text-center  hover:text-green-200 cursor-pointer ">Link Shortening</p>
        <p className="text-center  hover:text-green-200 cursor-pointer "> Analytics</p>
      </div>
      <div className="mt-10 sm:mt-0 flex flex-col gap-3 font-semibold text-slate-400 sm:items-start">
        <h1 className="text-xl font-bold text-center text-white">Resources</h1>
        <p className="text-center  hover:text-green-200 cursor-pointer ">Blog</p>
        <p className="text-center  hover:text-green-200 cursor-pointer ">Developers</p>
        <p className="text-center  hover:text-green-200 cursor-pointer ">Support</p>
      </div>
      <div className="mt-10 sm:mt-0 flex flex-col gap-3 font-semibold text-slate-400 sm:items-start">
        <h1 className="text-xl font-bold text-center text-white">Company</h1>
        <p className="text-center hover:text-green-200 cursor-pointer ">About</p>
        <p className="text-center hover:text-green-200 cursor-pointer ">Our Team</p>
        <p className="text-center hover:text-green-200 cursor-pointer ">Careers</p>
        <p className="text-center hover:text-green-200 cursor-pointer ">Contact</p>
      </div>
      <div className="flex  sm:mt-0 flex-row  mt-6 mx-auto   ">
        <div className="w-12 h-12 bg-[url('/icon-facebook.svg')] bg-no-repeat cursor-pointer hover:opacity-90 bg-center"></div>
        <div className="w-12 h-12 bg-[url('/icon-twitter.svg')] bg-no-repeat  cursor-pointer hover:opacity-90  bg-center"></div>
        <div className="w-12 h-12 bg-[url('/icon-pinterest.svg')] bg-no-repeat cursor-pointer hover:opacity-90  bg-center"></div>
        <div className="w-12 h-12 bg-[url('/icon-instagram.svg')] bg-no-repeat cursor-pointer hover:opacity-90  bg-center"></div>
      </div>
      </div>
      <div className="h-[30px] sm: "></div>
    </div>
  );
};

export default Footer;
