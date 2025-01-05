function TrustedPartner() {
  return (
    <div className="flex flex-col justify-center items-center py-6 space-y-12">
      <h3 className="text-2xl font-bold">Our Trusted Partner</h3>
      <div className="flex flex-col  md:flex-row md:justify-center md:items-center gap-12">
        <img src="./t-1.png" alt="" className="object-contain h-[60px]" />
        <img src="./t-2.png" alt="" className="object-contain h-[60px]" />
        <img src="./t-3.png" alt="" className="object-contain h-[60px]" />
      </div>

      <hr className="w-[200px] border-1 border-violet-500 " />
    </div>
  );
}

export default TrustedPartner;
