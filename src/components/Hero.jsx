import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center mt-20 h-96">
        <div className="w-6xl flex items-center">
          <div className="left w-2/3 text-center">
            <h1 className="text-7xl">
              Welcome To <br />
              <span className="font-extrabold">MOVIE MANIA</span>
            </h1>
            <p className="mt-8 text-2xl font-bold">
              Experience movies like never before !
            </p>
          </div>
          <div className="right h-full w-1/2">
            <img
              src={heroImage}
              alt="image.jpg"
              className="w-full h-full object-contain bg-transparent"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
