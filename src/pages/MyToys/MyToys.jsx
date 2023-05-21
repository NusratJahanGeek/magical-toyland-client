import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `http://localhost:5000/toys/?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.error("Error fetching toys:", error));
  }, [url]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              // Remove the deleted toy from the state
              setToys(prevToys => prevToys.filter(toy => toy._id !== _id));
            }
          })
          .catch((error) => console.error("Error deleting toy:", error));
      }
    });
  };

  return (
    <div className="my-8 p-4 text-center space-y-5">
      <h1 className="text-2xl font-bold mb-4">My Toys: {toys.length}</h1>
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-[#F4BBD0]">
              <th className="px-4 py-2 border">Toy</th>
              <th className="px-4 py-2 border">Toy Name</th>
              <th className="px-4 py-2 border">Seller</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Available Qty</th>
              <th className="px-4 py-2 border">Details</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy._id}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 border">{toy.name}</td>
                <td className="px-4 py-2 border">{toy.seller || "N/A"}</td>
                <td className="px-4 py-2 border">{toy.email}</td>
                <td className="px-4 py-2 border">{toy.category}</td>
                <td className="px-4 py-2 border">${toy.price}</td>
                <td className="px-4 py-2 border">{toy.rating}</td>
                <td className="px-4 py-2 border">{toy.quantity}</td>
                <td className="px-4 py-2 border">{toy.details}</td>
                <td className="px-4 py-2 border">
                  <div className="btn-group btn-group-vertical">
                    <Link to={`/toy/${toy._id}`}>
                      <button className="btn btn-custom">View Details</button>
                    </Link>
                    <button className="btn btn-custom">Update</button>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-custom"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;