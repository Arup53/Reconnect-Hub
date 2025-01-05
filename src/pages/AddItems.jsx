import { Dropdown } from "flowbite-react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "../hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import DynamicBannerForPages from "../components/DynamicBannerForPages";

function AddItems() {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: async (submitData) => {
      const response = await axiosSecure.post(`/additems`, submitData);
      return response.data;
    },

    onSuccess: (data) => {
      //   queryClient.invalidateQueries({ queryKey: ["items"] });
    },

    onError: (err) => {},
  });

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
      const response = await mutateAsync(submitObj);

      form.reset();
      toast.success("Congrats!!! Your Post Added Successfully");
      //   navigate("/my-posted-jobs");
    } catch (err) {
      console.error("Error posting data:", err.response.data.message);
      toast.error(err.response.data.message);
    }
  }

  return (
    <div className="space-y-6   overflow-hidden">
      <DynamicBannerForPages
        img="postLosting.jpg"
        title="Report Your Listings"
      />

      <form
        onSubmit={handleSubmit}
        className="md:max-w-md md:mx-auto px-4 md:px-0  overflow-hidden "
      >
        {/* post type */}
        <select
          name="posttype"
          defaultValue="select"
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
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your a descrpiton of the item"
          ></textarea>
        </div>

        {/* category */}
        <div className="my-2">
          <select
            name="category"
            defaultValue="category"
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
        <div className="flex gap-1 flex-col md:flex-row">
          <div>
            <label className="text-sm text-gray-500">Username</label>

            <textarea
              name="name"
              disabled
              defaultValue={user?.displayName}
              className="textarea w-full"
              placeholder="Bio"
            ></textarea>
          </div>
          <div>
            <label className="text-sm text-gray-500">Email</label>

            <textarea
              name="email"
              disabled
              defaultValue={user?.email}
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
    </div>
  );
}

export default AddItems;
