import { useQuery } from "@tanstack/react-query";

import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "../hooks/useAxios";
import LoadingSpinner from "../components/LoadingSpinner";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import MyitemsTableRow from "../components/MyitemsTableRow";
import { useEffect } from "react";
import toast from "react-hot-toast";
import DynamicBannerForPages from "../components/DynamicBannerForPages";

function MyItems() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // /myitems/:email

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ["myItems"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/myitems/${user?.email}`);
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      toast.success("Data Fetched Successfully");
    }
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="overflow-hidden">
      <DynamicBannerForPages img="myitems.jpg" title="Your Posts" />

      <div className="md:w-[80%] md:mx-auto overflow-x-auto">
        {/* banner */}

        {/* table */}

        {data.length > 0 ? (
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Item name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Event Address</Table.HeadCell>

              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data &&
                data.map((item) => (
                  <MyitemsTableRow key={item._id} item={item} />
                ))}
            </Table.Body>
          </Table>
        ) : (
          <div className="h-[400px] w-full flex justify-center items-center">
            <p className="text-3xl font-bold text-center">
              Sorry, You Haven't Added Any Post Yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyItems;
