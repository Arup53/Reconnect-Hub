function DynamicBannerForPages({ img, title }) {
  const path = `./${img}`;

  return (
    <div
      className="relative h-[70vh] w-[100vw] bg-no-repeat bg-cover backdrop-blur-2xl"
      style={{ backgroundImage: `url(${path})` }}
    >
      <div className="absolute inset-0 bg-blue-800 bg-opacity-70"></div>
      <div className="relative h-full flex flex-col lg:flex-row justify-center items-center text-white ">
        <h3 className="text-4xl font-bold">{title ? title : "Blank"}</h3>
      </div>
    </div>
  );
}

export default DynamicBannerForPages;
