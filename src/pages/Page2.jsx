import axios from "axios";
import { useState } from "react";

const Page2 = () => {
  const [isfull, setIsfull] = useState(true);
  const [shortend, setShortend] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingShorting, setLoadingShorting] = useState(false);
  const [shortendLink, setShortendLink] = useState("");
  const [errorShortendLink, setErrorShortendLink] = useState("");
  const [blenkError, setBlenkError] = useState('')

  const handleClick = async () => {
   setBlenkError('')
    setErrorShortendLink('')
    if(shortend === '') {
      setBlenkError('Dont let the field emty')
    }else{
      setLoadingShorting(true);
      await axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten",
        {
          url: shortend,
        }
      )
      .then((response) => {
        setShortendLink(response.data.result_url);
        setLoadingShorting(false);
      })
      .catch((error) => {
        setErrorShortendLink("Error try another link :)");
        console.error(error.message);
        setTimeout(() => {
          setLoadingShorting(false);
        }, 1000);
        
      });
    }
   
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortendLink).then(
      () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      },
      (error) => {
        console.error("Copy failed!", error);
      }
    );
  };
  return (
    <div className="bg-slate-200 w-[100vw] flex flex-col  ">
      <div className="w-[90vw]  h-[150px] rounded-md bg-[#3A3053] mx-auto sm:w-[700px] md:w-[1000px] relative top-[-60px] flex flex-col items-center justify-center gap-3 sm:flex-row shadow-lg shadow-slate-800 bg-[url('/bg-boost-desktop.svg')]">
        <input
         
          value={shortend}
          onChange={(e) => setShortend(e.target.value)}
          type="text"
          placeholder={blenkError || "Shorten link here..."}
          className="h-[30%] w-[90%] rounded-md sm:w-[70%] pl-5 "
        />
        <button
          onClick={handleClick}
          className="h-[30%] w-[90%] sm:w-[20%] bg-[#2BD0CC] rounded-md text-lg font-bold text-white hover:opacity-75"
        >
          {loadingShorting ? "Waiting.." : " Shorten it"}
        </button>
      </div>
      <p className="text-red-600 text-center"> {errorShortendLink}</p>
      {shortendLink !== "" && (
        <div className="w-[90vw] h-[50px] rounded-md bg-white mx-auto mt-[-40px] shadow-lg sm:w-[700px] md:w-[1000px] flex items-center justify-between  px-6">
          <p className="text-lg font-semibold"> {shortendLink}</p>

          <button
            disabled={loading}
            onClick={copyToClipboard}
            className={`${
              shortendLink === "" && "hidden"
            } w-[150px] h-[35px] text-white font-bold hover:opacity-80 rounded-lg   ${
              loading ? "bg-blue-600" : "bg-[#2BD0CC]"
            }`}
          >
            {loading ? "Copied!" : "Copy"}
          </button>
        </div>
      )}

      <div
        className={`mx-auto w-[80vw] text-center sm:w-[450px] ${
          isfull && "mt-7"
        }`}
      >
        <h1 className="text-2xl text-black font-bold">Advanced Statistics</h1>
        <p className="text-base font-semibold text-slate-500">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="w-[100%] flex flex-col sm:flex-row sm:relative  justify-center items-center mt-8 sm:mt-0 sm:w-[1000px] sm:mx-auto h-[1200px] sm:h-[600px]">
        <div className="w-[90%] mx-auto h-[300px] sm:h-[400px] relative ">
          <div className="w-[70px] h-[70px] bg-[url('icon-brand-recognition.svg')] rounded-full bg-[#3A3053] bg-no-repeat bg-center mx-auto relative z-10  sm:mx-10"></div>
          <div className="h-[280px] sm:h-[340px] rounded-md shadow-lg  bg-white mt-[-40px] z-0 relative flex justify-center ">
            <div className="absolute top-[70px] w-[70%] flex flex-col gap-3">
              <h1 className="text-2xl font-bold  text-center sm:text-start">
                Brand Recognition
              </h1>
              <p className="text-lg font-semibold text-slate-500 text-center sm:text-start">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[60px] w-[10px] sm:h-[10px] sm:w-[80px] bg-[#2BD0CC] rounded "></div>

        <div className="w-[90%] mx-auto h-[300px] sm:h-[400px]  relative mt-[-2px] sm:top-10">
          <div className="w-[70px] h-[70px] bg-[url('icon-detailed-records.svg')] rounded-full bg-[#3A3053] bg-no-repeat bg-center mx-auto relative z-10  sm:mx-10 "></div>
          <div className="h-[280px] sm:h-[340px] rounded-md shadow-lg bg-white mt-[-40px] z-0 relative flex justify-center ">
            <div className="absolute top-[70px] w-[70%] flex flex-col gap-3">
              <h1 className="text-2xl font-bold  text-center sm:text-start ">
                Detailed Records
              </h1>
              <p className="text-lg font-semibold text-slate-500 text-center sm:text-start">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[60px] w-[10px] sm:h-[10px] sm:w-[80px] bg-[#2BD0CC] rounded "></div>

        <div className="w-[90%] mx-auto h-[300px] sm:h-[400px]  relative mt-[-2px] sm:top-24">
          <div className="w-[70px] h-[70px] bg-[url('icon-fully-customizable.svg')] rounded-full bg-[#3A3053] bg-no-repeat bg-center mx-auto relative z-10  sm:mx-10"></div>
          <div className="h-[280px] sm:h-[340px] rounded-md shadow-lg bg-white mt-[-40px] z-0 relative flex justify-center ">
            <div className="absolute top-[70px]  w-[70%] flex flex-col gap-3">
              <h1 className="text-2xl font-bold  text-center sm:text-start">
                Fully Customizable
              </h1>
              <p className="text-lg font-semibold text-slate-500 text-center sm:text-start">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[250px] bg-[#3A3053] flex flex-col items-center justify-center gap-4 sm:gap-8 bg-[url('/bg-boost-desktop.svg')]">
        <h1 className="text-3xl text-white font-bold sm:text-5xl shadow-md">
          Boost your links today
        </h1>
        <button className="bg-[#2BD0CC] text-xl text-white w-[230px] rounded-2xl h-[50px] text-center hover:opacity-80">
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Page2;
