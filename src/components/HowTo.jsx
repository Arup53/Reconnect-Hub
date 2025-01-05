import { Card, HR } from "flowbite-react";
import { IoMdPersonAdd } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";

function HowTo() {
  return (
    <div className="bg-gray-100 min-h-[200px] flex justify-center items-center py-12   ">
      <div className="flex flex-col justify-center items-center space-y-6 overflow-hidden ">
        <h3 className="text-center  text-2xl font-bold ">
          How to post the Ad ?
        </h3>
        <HR.Trimmed className="bg-violet-400" />

        {/*main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* step-1 */}

          <Card className="max-w-sm hover:scale-110 cursor-pointer ">
            <p className="text-4xl flex justify-center items-center">
              <IoMdPersonAdd />
            </p>

            <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Login or Register
            </h5>
            <p className="font-normal text-gray-700  dark:text-gray-400">
              You can start posting if you have already have an account, or you
              can register.
            </p>
          </Card>
          {/* step-2 */}
          <Card className="max-w-sm hover:scale-110 cursor-pointer">
            <p className="text-4xl flex justify-center items-center">
              <BiLogoTelegram />
            </p>
            <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Start Reporting
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Give proper info about the item you have lost or found.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
