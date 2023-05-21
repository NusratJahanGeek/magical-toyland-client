import { useLoaderData, useParams } from "react-router-dom";


const ToyDetails = () => {
    const { id } = useParams();
  const singleToy = useLoaderData();
    return (
        <div className="bg-gray-100 py-12 flex justify-center gap-0">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Toy Details: {singleToy.toyName}
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
            <div className="w-full md:w-2/3 md:pl-8">
              <div className="bg-white rounded-lg shadow-md p-6 pr-8">
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Seller:</span> {singleToy.sellerName} (
                  {singleToy.sellerEmail})
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Price:</span> ${singleToy.price}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Rating:</span> {singleToy.rating}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Quantity:</span> {singleToy.quantity}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Details:</span> {singleToy.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
    );
};

export default ToyDetails;