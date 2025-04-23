import { Carousel } from "flowbite-react";
import { easeOut, motion } from "framer-motion";

function Banner() {
  return (
    <div className="w-full   ">
      <div className="w-full   ">
        <div className=" h-[60vh] ">
          <Carousel
            slideInterval={9000}
            theme={{
              control: {
                base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 group-hover:bg-yellow-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-white hover:scale-105 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10 hidden md:flex ",
                icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
              },

              indicators: {
                active: {
                  off: "bg-white  hover:bg-yellow-300",
                  on: "bg-orange-500 hover:scale-125 hover:bg-yellow-300 ",
                },
                base: "h-3 w-3 rounded-full",
                wrapper:
                  "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
              },
              scrollContainer: {
                base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth ",
                snap: "snap-x",
              },
            }}
          >
            {/* slider-1 */}
            <div
              className="relative h-full bg-no-repeat bg-cover backdrop-blur-2xl"
              style={{ backgroundImage: `url(./B-1.jpg)` }}
            >
              <div className="absolute inset-0 bg-blue-800 bg-opacity-70"></div>
              <div className="relative h-full flex flex-col lg:flex-row justify-center items-center ">
                {/* left-side */}
                <div className="flex flex-col ">
                  <p className="z-10 md:px-14  text-3xl md:text-5xl text-white text-center lg:text-left  font-bold tracking-wider leading-normal">
                    Lost Something Important?
                    <br /> We’re Here to <br /> Help You Reunite.
                  </p>
                  <p className="text-sm text-white my-2 break-all"></p>
                </div>
                {/* right side */}
                <figure>
                  <motion.img
                    animate={{ x: [0, 50, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: easeOut,
                    }}
                    className="object-contain h-[200px] max-w-sm rounded-lg"
                    src="./banner-1.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            {/* slider-2 */}
            <div
              className="relative h-full bg-no-repeat bg-cover backdrop-blur-2xl"
              style={{ backgroundImage: `url(./B-2.jpg)` }}
            >
              <div className="absolute inset-0 bg-blue-800 bg-opacity-70 "></div>
              <div className="relative h-full flex flex-col lg:flex-row justify-center items-center ">
                {/* left-side */}
                <div className="flex flex-col ">
                  <p className="z-10 md:px-14  text-3xl md:text-5xl text-white text-center lg:text-left  font-bold tracking-wider leading-normal">
                    Found an Item? Post It and{" "}
                    <br className="hidden lg:block" /> Make Someone’s Day!
                  </p>
                  <p className="text-sm text-white my-2 break-all"></p>
                </div>
                {/* right side */}
                <figure>
                  <motion.img
                    animate={{ x: [0, 50, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: easeOut,
                    }}
                    className="object-contain h-[200px] max-w-sm rounded-lg"
                    src="./banner-2.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            {/* slider-3 */}
            <div
              className="relative h-full bg-no-repeat bg-cover backdrop-blur-2xl"
              style={{ backgroundImage: `url(./B-3.jpg` }}
            >
              <div className="absolute inset-0 bg-blue-800 bg-opacity-70"></div>
              <div className="relative h-full flex flex-col lg:flex-row justify-center items-center ">
                {/* left-side */}
                <div className="flex flex-col ">
                  <p className="z-10 md:px-14  text-3xl md:text-5xl text-white text-center lg:text-left  font-bold tracking-wider leading-normal">
                    Together, We Make a Difference.
                  </p>
                  <p className="text-sm text-white my-2 break-all"></p>
                </div>
                {/* right side */}
                <figure>
                  <motion.img
                    animate={{ x: [0, 50, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: easeOut,
                    }}
                    className="object-contain h-[200px] max-w-sm rounded-lg"
                    src="./banner-3.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Banner;
