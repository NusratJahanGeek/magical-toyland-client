import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const rating = form.rating.value;
    const selectedCategory = form.category.value;
    const details = form.detail.value;
    const picture = form.picture.value;
    const price = form.price.value;

    const newToy = {
      name,
      quantity,
      seller,
      email,
      rating,
      category: selectedCategory,
      details,
      picture,
      price
    };
    console.log(newToy);

    

     fetch("https://magical-toyland-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonColor: "#5B5F8E",
            confirmButtonText: "Cool",
          });
        }
      });
    form.reset(); 
  };

  return (
    <div className="py-12 px-4 md:px-32">
      <h2 className="text-2xl font-bold text-center mb-6">Add Toy</h2>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Picture URL</label>
            <input
              type="text"
              name="picture"
              placeholder="Picture URL"
              className="input input-bordered w-full" required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Toy Name</label>
            <input
              type="text"
              name="name"
              placeholder="Toy Name"
              className="input input-bordered w-full" required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Seller Name</label>
            <input
              type="text"
              name="seller"
              defaultValue={user.displayName}
              placeholder="Seller Name"
              className="input input-bordered w-full" required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Seller Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              placeholder="Seller Email"
              className="input input-bordered w-full" required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Category</label>
            <select
              name="category"
              className="input input-bordered w-full"
              defaultValue="Disney Pricesses"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Disney Princesses">Disney Princesses</option>
              <option value="Disney Fairies">Disney Fairies</option>
              <option value="Disney Frozen">Disney Frozen</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full" required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
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
              placeholder="Available Quantity"
              className="input input-bordered w-full" required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold">
              Detail Description
            </label>
            <textarea
              name="detail" 
              placeholder="Detail Description"
              className="input input-bordered w-full h-32 resize-none"
              rows="4" required
            ></textarea>
          </div>
        </div>
        <input
          className="btn w-1/4 block mt-8 mx-auto font-semibold rounded-md cursor-pointer"
          type="submit"
          value="Add Toy"
        />
      </form>
    </div>
  );
};

export default AddToy;
