import Swal from "sweetalert2";
import { useState } from "react";

const UpdateToyForm = ({ toy, onUpdate }) => {
  const [quantity, setQuantity] = useState(toy.quantity);
  const [details, setDetails] = useState(toy.details);
  const [price, setPrice] = useState(toy.price);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const updatedData = {
      quantity,
      details,
      price,
    };

    fetch(`https://magical-toyland-server.vercel.app/toys/${toy._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonColor: "#5B5F8E",
            confirmButtonText: "Cool",
          });
          onUpdate(updatedData); // Call the callback to update the toy list in the parent component
        } else {
          Swal.fire("Error!", "Failed to update toy.", "error");
        }
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
        Swal.fire("Error!", "Failed to update toy.", "error");
      });

    event.target.reset();
  };

  return (
    <div className="py-12 px-4 md:px-12">
      <h2 className="text-2xl font-bold text-center mb-6">Update Toy</h2>
      <form onSubmit={handleUpdateToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Available Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold">
              Detail Description
            </label>
            <textarea
              name="detail"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Detail Description"
              className="input input-bordered w-full h-40 resize-none"
              rows="4"
            ></textarea>
          </div>
        </div>
        <input
          className="btn block px-6 py-2 mt-6 mx-auto font-semibold rounded-md cursor-pointer"
          type="submit"
          value="Update Toy"
        />
      </form>
    </div>
  );
};

export default UpdateToyForm;
