import { useLoaderData, useParams } from "react-router-dom";
import './ToyDetails.css'

const ToyDetails = () => {
  const { id } = useParams();
  const singleToy = useLoaderData();

  return (
    <div className="bg-white pt-20 flex justify-center items-center custom-bg">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#5B5F8E]">
            Toy Name: {singleToy.name}
          </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 md:p-8">
          <div className="w-full md:w-1/3">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={singleToy.picture}
                alt="Toy"
                className="object-cover object-center rounded-lg w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 md:pl-8">
            <div className="bg-white rounded-lg shadow-md py-14 px-8">
              <h4 className="text-gray-700 leading-relaxed text-xl mb-1">
                Seller: {singleToy.seller}
              </h4>
              <p className="text-gray-700 mb-4"><em>({singleToy.email})</em></p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Price:</span> ${singleToy.price}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Rating:</span> {singleToy.rating}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Available Quantity:</span> {singleToy.quantity}
              </p>
              <p className="text-gray-700 leading-8">
                <span className="font-semibold">Details:</span> {singleToy.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
