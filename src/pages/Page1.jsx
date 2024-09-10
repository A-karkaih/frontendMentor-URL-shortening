const Page1 = () => {
  return (
    <div className="w-[100%] flex flex-col sm:flex-row sm:w-[700px] md:w-[1000px] sm:justify-center sm:mx-auto h-[740px] sm:h-[530px] ">
      <img
        className="sm:hidden ml-4 h-[50vh]"
        src="/illustration-working.svg"
        alt="illustration-working"
      />
      <div className="w-[100%] mt-6 flex flex-col items-center sm:w-[50%] sm:items-start sm:h-[400px]  sm:justify-center">
        <h1 className="text-center sm:text-left text-5xl font-bold sm:text-6xl">
          More than just shorter links
        </h1>
        <p className=" text-slate-500 sm:text-left font-semibold mt-4 text-lg mx-1 text-center">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-[#2BD0CC] rounded-2xl h-[40px] w-[200px]  text-white text-sm font-bold hover:opacity-85 text-center mt-4">
          Get Strated
        </button>
      </div>
      <img
        className="hidden sm:flex sm:w-[50%] ml-4 h-[400px]"
        src="/illustration-working.svg"
        alt="illustration-working"
      />
    </div>
  );
};

export default Page1;
