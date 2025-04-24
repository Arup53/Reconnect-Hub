import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";

function UserDetails() {
  const { user, updateUser } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUser(name, photo);
      toast.success("Profile updated successfully!");
      setShowForm(false); // hide form after success
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[400px] flex flex-col justify-center items-center text-2xl font-bold">
      {user && (
        <>
          <p>Name: {user?.displayName}</p>
          <p>Email: {user?.email}</p>

          <button
            className="px-2 py-1 border-2 border-blue-500 rounded-full mt-4 text-base "
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "Update Profile"}
          </button>

          {showForm && (
            <form
              onSubmit={handleUpdate}
              className="mt-4 flex flex-col gap-4 items-start text-base bg-white p-4 rounded shadow w-80"
            >
              <label className="w-full">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full mt-1"
                  required
                />
              </label>
              <label className="w-full">
                Photo URL:
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="input input-bordered w-full mt-1"
                  required
                />
              </label>
              <button
                type="submit"
                className=" px-2 py-1 bg-blue-500 rounded-full self-end text-white"
                disabled={loading}
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default UserDetails;
