import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    fetch("https://magical-toyland-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data);
      });
  }, []);
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filterToys();
  };

  const filterToys = () => {
    const filtered = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredToys(filtered);
  };

  return (
    <div className="my-8 p-4 text-center space-y-5">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Search Your Preferred Toy"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-2 py-1 mr-2"
        />
        <button
          type="submit"
          className="btn btn-custom rounded-md px-8 py-0 mb-5"
        >
          Search
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
          <tr className="bg-[#F4BBD0]">
              <th className="px-4 py-2 border">Seller</th>
              <th className="px-4 py-2 border">Toy Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Available Qty</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <tr key={toy.id}>
                <td className="px-4 py-2 border">{toy.seller || "N/A"}</td>
                <td className="px-4 py-2 border">{toy.name}</td>
                <td className="px-4 py-2 border">{toy.category}</td>
                <td className="px-4 py-2 border">${toy.price}</td>
                <td className="px-4 py-2 border">{toy.quantity}</td>
                <td className="px-4 py-2 border">
                  <Link to={`/toy/${toy._id}`}>
                    <button className="btn btn-custom rounded-md px-4 py-2">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
