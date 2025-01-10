import { HR } from "flowbite-react";

function AboutUs() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-6 space-y-12">
        <h3 className="text-2xl font-bold">About us</h3>
        <div className="w-[50%] flex flex-col  md:flex-row md:justify-center md:items-center gap-12">
          <p>
            Welcome to Reconnect Hub, a platform dedicated to reuniting users
            with their lost or found belongings. Designed for simplicity and
            effectiveness, Reconnect Hub provides a convenient way for users to
            share details about items they have lost or found. By offering a
            secure and user-friendly environment, the platform ensures that
            recovery tracking is both seamless and reliable.
          </p>
        </div>
      </div>
      <HR />
    </>
  );
}

export default AboutUs;
