import { useQuery } from "@tanstack/react-query";
import { axiosBasic } from "../hooks/useAxios";
import LoadingSpinner from "../components/LoadingSpinner";
import ItemCard from "../components/ItemCard";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

function AllItems() {
  const axiosCustom = axiosBasic;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      try {
        const { data } = await axiosCustom.get(`/allItems?search=${search}`);
        setData(data);

        if (isFirstLoad.current || search !== "") {
          toast.success("Data Fetched Successfully");
        }

        isFirstLoad.current = false;
      } catch (err) {
        toast.error("Error");
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, [search]);

  return (
    <div className="w-[90%] mx-auto my-6 space-y-12 flex flex-col items-center">
      <h3 className="text-3xl md:self-start font-bold">All Listings</h3>

      {/* search button */}
      <form>
        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search By Title"
          />

          {/* <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button> */}
        </div>
      </form>

      {isLoading && <LoadingSpinner />}
      {/* main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data && data?.map((item) => <ItemCard key={item._id} item={item} />)}
      </div>
    </div>
  );
}

export default AllItems;
