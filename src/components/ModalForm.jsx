import { useState } from "react";
import DatePicker from "react-datepicker";
import { useAuth } from "../context/AuthProvider";

import toast from "react-hot-toast";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxios";

function ModalForm({ setOpenModal, id }) {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: async (submitData) => {
      const response = await axiosSecure.post(`/items`, submitData);
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
    const location = form.location.value;
    const date = startDate;
    const email = form.email.value;
    const name = form.name.value;
    const photo = user?.photoURL;
    const eventItemId = id;

    const dataObj = { location, date, email, name, photo, eventItemId };

    try {
      await mutateAsync(dataObj);
      form.reset();
      toast.success("Congrats!!! Recovery Successful");
      setOpenModal(false);
      //   navigate("/my-posted-jobs");
    } catch (err) {
      console.error("Error posting data:", err);
      if (err.response.status === 401)
        return toast.error(err.response.data.message);
      toast.error(err.response.data);
      setOpenModal(false);
    }
  }

  return (
    <div className="hero  ">
      <div className="hero-content ">
        <div className="card bg-base-100 w-full   shrink-0 ">
          {/* form */}
          {user && (
            <form
              onSubmit={handleSubmit}
              className="card-body grid grid-cols-1 md:grid-cols-2"
            >
              {/* location */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recovered location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Recovered Location"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <div className="">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>

              {/* email */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Recovered Person Email</span>
                </label>

                <textarea
                  name="email"
                  disabled
                  defaultValue={user?.email}
                  className="textarea"
                  placeholder="Bio"
                ></textarea>
              </div>

              {/* name */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text ">Recovered Person Name</span>
                </label>

                <textarea
                  disabled
                  name="name"
                  defaultValue={user?.displayName}
                  className="textarea"
                ></textarea>
              </div>

              {/* photo */}
              <div className="form-control  md:col-span-2">
                <label className="label">
                  <span className="lg:relative lg:left-36  text-sm text-center">
                    Recovered Person Image
                  </span>
                </label>

                <figure>
                  <img
                    name="photo"
                    className="w-[40px] h-[40px] rounded-full "
                    src={user?.photoURL}
                    alt=""
                  />
                </figure>
              </div>

              <div className="form-control mt-6 md:col-span-2">
                <button className="btn ">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
