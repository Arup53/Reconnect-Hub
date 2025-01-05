import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure, { axiosBasicSecure } from "../hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

function MyitemsTableRow({ item }) {
  const queryClient = useQueryClient();
  const { _id, title, category, address, email } = item || {};
  const axiosSecure = axiosBasicSecure;
  const axiosC = useAxiosSecure();

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: async (id) => {
      const response = await axiosC.delete(`/myitems/${id}?email=${email}`);
      return response.data;
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["myItems"] });
    },

    onError: (err) => {},
  });

  async function handleDelete(id) {
    // const response = await mutateAsync(id);
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await mutateAsync(id);
        if (response.deletedCount) {
          await Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.message,
      });
    }
  }

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className=" text-sm  dark:text-white">{title}</Table.Cell>
      <Table.Cell>{category}</Table.Cell>
      <Table.Cell>{address}</Table.Cell>

      <Table.Cell>
        <div className="flex flex-row gap-1 items-center">
          {/* update */}
          <Link className="btn btn-xs" to={`/updateItems/${_id}`}>
            <span className="flex flex-row md:flex-col md:items-center md:justify-center  gap-1 ">
              <p className="flex text-green-500 items-center gap-[2px]">
                Edit
                <FiEdit />
              </p>
            </span>
          </Link>
          {/* delete */}

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-xs flex text-xs text-red-500 items-center gap-[2px]"
          >
            Delete
            <RiDeleteBin6Line />
          </button>
        </div>
      </Table.Cell>
    </Table.Row>
  );
}

export default MyitemsTableRow;
