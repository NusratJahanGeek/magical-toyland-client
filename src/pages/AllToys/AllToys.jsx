import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [toysPerPage] = useState(20);

  useEffect(() => {
    fetch("https://magical-toyland-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data.slice(0, toysPerPage));
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
    setFilteredToys(filtered.slice(0, toysPerPage));
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(toys.length / toysPerPage);

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      const startIndex = (nextPage - 1) * toysPerPage;
      const endIndex = Math.min(startIndex + toysPerPage, toys.length);
      setFilteredToys(toys.slice(startIndex, endIndex));
      setCurrentPage(nextPage);
    }
  };

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      const startIndex = (previousPage - 1) * toysPerPage;
      const endIndex = Math.min(startIndex + toysPerPage, toys.length);
      setFilteredToys(toys.slice(startIndex, endIndex));
      setCurrentPage(previousPage);
    }
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
          className="btn rounded-md px-8 py-0 mb-5"
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
                    <button className="btn rounded-md px-4 py-2">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-4">
        <button
          className="btn rounded-md px-4 py-2"
          onClick={handleClickPrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn rounded-md px-4 py-2 ml-2"
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllToys;
