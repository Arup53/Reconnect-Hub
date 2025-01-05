import { useAuth } from "../context/AuthProvider";
import { useParams } from "react-router-dom";
import useAxiosSecure, { axiosBasicSecure } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/LoadingSpinner";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function UpdateItems() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  // getting data for update
  const { data, isLoading, error } = useQuery({
    queryKey: ["myItem", user?.email, id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/myitems/${user?.email}?id=${id}`
      );
      return data;
    },
  });

  useEffect(() => {
    if (data && data.date) {
      setStartDate(new Date(data.date));
    }
    if (data) {
      toast.success("Data Fetched Successfully");
    }
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const postType = form.posttype.value;
    const thumbnail = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const address = form.address.value;
    const date = startDate;
    const name = user?.displayName;
    const email = user?.email;

    const submitObj = {
      postType,
      thumbnail,
      title,
      description,
      category,
      address,
      date,
      name,
      email,
    };

    try {
      const { data } = await axiosSecure.put(
        `/updateItems/${id}?email=${user?.email}`,
        submitObj
      );

      toast.success("Updated Succesfully");
    } catch (err) {
      toast.error("Error on updating");
    }
  }

  return (
    <div>
      {data && (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto px-6 md:px-0">
          {/* post type */}
          <select
            name="posttype"
            defaultValue={data.postType}
            className="select select-ghost w-full  my-2"
          >
            <option value="select" disabled hidden>
              Select Lost or Found
            </option>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>

          {/* thumbnail image */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="type"
              defaultValue={data.thumbnail}
              name="image"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Thumbnail (Image Upload )
            </label>
          </div>

          {/* title */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              defaultValue={data.title}
              name="title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Title
            </label>
          </div>

          {/* description */}
          <div className="relative z-0 w-full mb-5 group">
            {/* textarea  */}
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={data.description}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your a descrpiton of the item"
            ></textarea>
          </div>

          {/* category */}
          <div className="my-2">
            <select
              name="category"
              defaultValue={data.category}
              className="select select-ghost w-full "
            >
              <option className="hidden" value="category" disabled>
                Category
              </option>
              <option value="pets">Pets </option>
              <option value="documents">Documents</option>
              <option value="gadgets">Gadgets</option>
            </select>
          </div>
          {/* address & date */}
          <div className="flex flex-col  md:flex-row gap-2">
            {/* address */}
            <div>
              <label className="text-sm text-gray-500">Address</label>

              <input
                type="text"
                name="address"
                defaultValue={data.address}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Write Incident Location "
                required
              />
            </div>

            {/* date */}
            <div className="">
              <label className="text-sm text-gray-500">Date Lost</label>
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>

          {/* username and email */}
          <div className="flex flex-col md:flex-row gap-1">
            <div>
              <label className="text-sm text-gray-500">Username</label>

              <textarea
                name="name"
                disabled
                defaultValue={data.name}
                className="textarea w-full"
                placeholder="Bio"
              ></textarea>
            </div>
            <div>
              <label className="text-sm text-gray-500">Email</label>

              <textarea
                name="email"
                disabled
                defaultValue={data.email}
                className="textarea w-full"
                placeholder="Bio"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4"
          >
            Add Post
          </button>
        </form>
      )}
    </div>
  );
}

export default UpdateItems;
