import modal from "/src/assets/modal.jpg";

const Hero = () => {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 h-screen gap-4 mt-3">
        {/* PERSONAL INFO */}
        <div className="flex flex-col justify-center px-6 md:px-16 items-start font-Montserrat font-bold">
          <h1 className="text-4xl md:text-6xl lg:text-8xl mb-3">Hi,</h1>
          <h1 className="text-3xl md:text-5xl lg:text-7xl uppercase">
            I am{" "}
            <span className="hover:text-indigo-500 duration-200 ">Rutba</span>{" "}
            From Pakistan
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl mt-2">
            COMPUTER ENGINEER
          </h1>
        </div>

        {/* PICTURE */}
        <div className="flex items-center justify-center">
          <img
            className="h-[50vh] w-auto md:h-[60%] lg:h-[76%] rounded"
            src={modal}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
