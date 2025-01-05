import { useParams } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { HR } from "flowbite-react";
import Modal from "../components/Modal";
import useAxiosSecure from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/LoadingSpinner";
import { useAuth } from "../context/AuthProvider";
import moment from "moment/moment";
import toast from "react-hot-toast";
import { useEffect } from "react";

function ItemDeatils() {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, error } = useQuery({
    queryKey: [id, user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/items/${id}?email=${user?.email}`
      );
      return data;
    },
  });

  useEffect(() => {
    toast.success("Data Fetched Successfully");
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  const [
    {
      title,
      address,
      category,
      date,
      description,
      email,
      name,
      postType,
      thumbnail,
    },
  ] = data;

  return (
    <section className="w-[90%] mx-auto my-6 ">
      <div className=" flex justify-center items-center">
        {data && (
          <div className="flex flex-col lg:flex-row  ">
            {/* left */}

            <div className="  rounded-xl">
              <img
                src={thumbnail}
                className=" w-[500px] h-[500px] object-cotain"
              />
            </div>

            {/* right */}

            <div className=" min-h-[500px] flex justify-center items-center lg:justify-start lg:items-start flex-col px-6 py-3 space-y-2 overflow-hidden">
              <div className="flex justify-center  md:justify-start items-center gap-1">
                <span>
                  <IoLocation />
                </span>
                <p>{address}</p>
              </div>
              <p className="text-2xl">{title}</p>

              {/* grid-data */}
              <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-3  overflow-hidden text-sm ">
                <div className="h-[100px] w-[150px] flex flex-col justify-center items-center border border-gray-300 ">
                  <p className="font-bold ">Type</p>
                  <p className="uppercase">{postType}</p>
                </div>
                <div className="h-[100px] w-[150px] flex flex-col justify-center items-center lg:border-y border-gray-300  border ">
                  <p className="font-bold">Date of Occurrence</p>
                  <p>{moment(date).format("DD/MM/YYYY")}</p>
                </div>
                <div className="h-[100px] w-[150px] flex flex-col justify-center items-center border border-gray-300 ">
                  <p className="font-bold">Category</p>
                  <p className="uppercase">{category}</p>
                </div>
              </div>

              <Modal text={postType} email={user?.email} id={id} />
            </div>
          </div>
        )}
      </div>
      <br />
      <HR.Icon />
      <p className="my-2 px-6 ">{description}</p>
      <hr className="w-full my-6" />
      <div className="flex flex-col justify-center items-center space-y-6">
        <h3>Post Added By</h3>
        <div className="flex flex-col md:flex-row md:justify-between gap-12 text-sm">
          <p>Name: {data && name}</p>
          <p>Email: {data && email}</p>
        </div>
      </div>
    </section>
  );
}

export default ItemDeatils;
