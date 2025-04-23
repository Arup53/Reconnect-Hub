import { useQuery } from "@tanstack/react-query";
import { axiosBasic } from "../hooks/useAxios";
import LoadingSpinner from "./LoadingSpinner";
import LatestItemCard from "./LatestItemCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function LatestItems() {
  const axiosCustom = axiosBasic;
  const [showAll, setShowAll] = useState(true);

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ["limitedItems"],
    queryFn: async () => {
      const { data } = await axiosCustom.get(`/allItems?limit='true'`);
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      toast.success("Data Fetched Successfully");
    }
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  function isShowAll() {
    setShowAll(!showAll);
  }

  return (
    <div className="space-y-6 md:w-[90%] md:mx-auto  ">
      <h3 className="text-center  text-2xl font-bold  ">
        Latest Find & Lost Items
      </h3>

      {/* items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {data &&
          data
            .slice(0, showAll ? data.length : 3)
            .map((item) => <LatestItemCard key={item._id} item={item} />)}
      </div>

      <div className="flex flex-col md:flex-row  justify-center items-center gap-6 ">
        <Link
          to={"/allitems"}
          className="btn w-52  bg-blue-600 text-white text-2xl rounded-full"
        >
          See More
        </Link>
        <button
          className=" btn w-52 text-clip bg-blue-600 text-white text-2xl rounded-full"
          onClick={isShowAll}
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
}

export default LatestItems;
