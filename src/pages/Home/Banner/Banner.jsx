import "./Banner.css";

const Banner = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-base-200"
      style={{
        backgroundImage:
          "url(https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1593556896598)",
      }}
    >
      <div className="w-full max-w-3xl">
        <div
          className="card flex-shrink-0 shadow-2xl"
          style={{ backgroundColor: "#5B5F8E", backdropFilter: "blur(8px)" }}
        >
          <div className="card-body p-8">
            <div className="mt-8">
              <h2 className="text-center my-4 text-4xl font-bold text-white">
                Welcome to Magical ToyLand
              </h2>
              <p className="text-center text-lg text-white mb-6">
                Step into a world of endless play and imagination. Explore our
                curated collection of toys that ignite wonder, creativity, and
                laughter.
              </p>
              <div className="flex justify-center mt-8">
                <button
                  className="btn px-8 py-3 text-lg font-bold tracking-wide rounded-full"
                  style={{
                    backgroundColor: "#FFEBDB",
                    color: "#000000",
                  }}
                  onClick={() => scrollToSection("shop")}
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
