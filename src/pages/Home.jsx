import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { axiosBasic } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Banner from "../components/Banner";
import LatestItems from "../components/LatestItems";
import HowTo from "../components/HowTo";
import TrustedPartner from "../components/TrustedPartner";
import DynamicBannerForPages from "../components/DynamicBannerForPages";

function Home() {
  const axiosCustom = axiosBasic;

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["jobs"],
  //   queryFn: async () => {
  //     const { data } = await axiosCustom.get(`/jobs`);
  //     return data;
  //   },
  // });

  // if (isLoading) return <LoadingSpinner />;

  //

  async function handleClick() {}

  return (
    <div className="min-h-[calc(100vh-362px)]">
      {/* banner slider */}
      <Banner />
      {/* latest find & solution section */}
      <section className=" py-12 ">
        <LatestItems />
      </section>
      {/* how to tutuorial */}
      <section>
        <HowTo />
      </section>
      {/* trusted partner */}
      <section>
        <TrustedPartner />
      </section>
    </div>
  );
}

export default Home;
