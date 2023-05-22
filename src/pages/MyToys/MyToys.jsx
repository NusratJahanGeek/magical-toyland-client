import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UpdateToyForm from "../../components/UpdateToyForm";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const url = `http://localhost:5000/toys/?email=${user?.email}`;

  useEffect(() => {
    fetchToys();
  }, [url, sortOrder]);

  const fetchToys = () => {
    const sortedUrl = `${url}&sort=price:${sortOrder === "asc" ? 1 : -1}`;
    fetch(sortedUrl)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log("Error fetching toys:", error));
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5B5F8E",
      cancelButtonColor: "#F078B1",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://magical-toyland-server.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              setToys((prevToys) => prevToys.filter((toy) => toy._id !== _id));
            }
          })
          .catch((error) => console.error("Error deleting toy:", error));
      }
    });
  };

  const handleOpenUpdateForm = (toy) => {
    setSelectedToy(toy);
    setIsOpen(true);
  };

  const handleCloseUpdateForm = () => {
    setSelectedToy(null);
    setIsOpen(false);
  };

  const handleUpdate = () => {
    fetchToys();
    handleCloseUpdateForm();
  };

  return (
    <div className="my-8 p-4 text-center space-y-5">
      <h1 className="text-2xl font-bold mb-4">My Toys: {toys.length}</h1>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 bg-black opacity-30"></div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="p-6">
                <UpdateToyForm
                  toy={selectedToy}
                  onUpdate={() => {
                    handleCloseUpdateForm();
                    handleUpdate();
                  }}
                />
              </div>
              <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleCloseUpdateForm}
                  className="btn btn-custom"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-[#F4BBD0]">
              <th className="px-4 py-2 border">Toy</th>
              <th className="px-4 py-2 border">Toy Name</th>
              <th className="px-4 py-2 border">Seller</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Category</th>
              <th
                className="px-4 py-2 border cursor-pointer"
                onClick={handleSort}
              >
                Price{" "}
                {sortOrder === "asc" ? (
                  <span className="text-sm">&#8593;</span>
                ) : (
                  <span className="text-sm">&#8595;</span>
                )}
              </th>

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
                  <div className="btn-group btn-group-vertical space-y-3">
                    <button
                      onClick={() => handleOpenUpdateForm(toy)}
                      className="btn btn-custom"
                    >
                      Update
                    </button>
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
