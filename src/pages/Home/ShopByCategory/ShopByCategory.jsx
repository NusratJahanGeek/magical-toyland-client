import { useEffect, useState } from "react";
import Toys from "../Home/Toys/Toys";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://magical-toyland-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div id="shop" className="my-20 mx-auto px-6 max-w-screen-xl">
      <h2 className="text-3xl text-center mb-6 md:mb-8" style={{ color: "#5B5F8E" }}>
        Shop By Category
      </h2>
      <Toys toys={toys} />
    </div>
  );
};

export default ShopByCategory;
