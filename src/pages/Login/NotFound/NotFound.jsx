import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-base-200"
      style={{
        backgroundImage:
          "url(https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1593556896598)",
      }}
    >
      <div className="w-full max-w-lg">
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 p-8">
          <div className="card-body">
            <div className="mt-5">
            <h2 className="text-center my-5 text-2xl font-bold">
                Uh-Oh! The Page You Are Trying To Search For Is Not Found!
              </h2>
              <img
                src="https://img.izismile.com/img/img6/20130730/1000/disney_characters_visit_actual_disney_theme_parks_in_real_life_01.gif"
                alt=""
                className="mx-auto"
              />
              
              <div className="flex justify-center mt-5">
                <Link
                  to="/"
                  className="btn"
                  style={{
                    backgroundColor: "#5B5F8E",
                    color: "#fff",
                    width: "60%",
                  }}
                >
                  Go Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
