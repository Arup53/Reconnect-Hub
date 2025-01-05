import { Table, Tooltip } from "flowbite-react";
import useAxiosSecure from "../hooks/useAxios";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthProvider";
import { useEffect, useState } from "react";
import MyRecoveredTableRow from "../components/MyRecoveredTableRow";
import MyRecoveredItemCardLayout from "../components/MyRecoveredItemCardLayout";
import { BiSolidGrid } from "react-icons/bi";
import { MdTableRows } from "react-icons/md";
import DynamicBannerForPages from "../components/DynamicBannerForPages";

function AllRecovered() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isCard, setCard] = useState(true);

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ["myRecoveredItems", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/recoveredItems?email=${user?.email}`
      );
      return data;
    },
  });

  useEffect(() => {
    if (error) return toast.error("Something went wrong");
    if (data && data.length > 0) toast.success("Data Fetched Succesfully");
  }, [data, error]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="overflow-hidden">
      <DynamicBannerForPages
        img="myrecovered.jpg"
        title="Your Recovered Items"
      />
      <div className="md:w-[90%] md:mx-auto flex flex-col gap-6 my-6 overflow-x-auto">
        {/* layout change button */}

        <button
          disabled={data.length === 0 && true} // disable if no data
          onClick={() => setCard(!isCard)}
          className="btn  self-end"
        >
          {isCard ? (
            <span className="text-lg">
              <MdTableRows />
            </span>
          ) : (
            <span className="text-lg">
              <BiSolidGrid />
            </span>
          )}
        </button>

        {/* card or table */}

        {data.length > 0 ? (
          isCard ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {data &&
                data.map((item) => (
                  <MyRecoveredItemCardLayout key={item._id} item={item} />
                ))}
            </div>
          ) : (
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Person name</Table.HeadCell>
                <Table.HeadCell>Recover Address</Table.HeadCell>
                <Table.HeadCell>Recover Date</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {data &&
                  data.map((item) => (
                    <MyRecoveredTableRow key={item._id} item={item} />
                  ))}
              </Table.Body>
            </Table>
          )
        ) : (
          // Show this when there is no data
          <div className="h-[400px] w-full flex justify-center items-center">
            <p className="text-3xl font-bold text-center">
              Sorry, You Haven't Recovered Anything
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllRecovered;
