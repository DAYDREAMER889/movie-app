const Upcoming = () => {
  return (
    <div className="h-[900px] w-full bg-no-repeat flex items-center">
      <img className="absolute" src="./images/Feature.png" alt="" />
      <div className="flex flex-col color-[#FFF] absolute px-80">
        <div className="text-[#FFF]">
          <p className="text-[16px]">Now Playing:</p>
          <p className="text-[36px]">Wicked</p>

          <div className="flex items-center">
            <img
              className="w-[28px] h-[28px] gap-1 "
              src="./images/star.png"
              alt=""
            />
            <p className="font-semibold text-[18px]">6.9</p>
            <p className="text-[#71717A] text-[16px]">/10</p>
          </div>
        </div>
        <div className="w-[302px] text-[#FAFAFA] pt-4 ">
          <p className="text-[16px]">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </p>
        </div>
        <div className="pt-4">
          <div className="border  border-[#E4E4E7] w-fit h-[45px] flex justify-center items-center py-2 px-4 bg-[#F4F4F5]  rounded-md  ">
            <img
              className="flex items-center h-4 w-4  "
              src="./images/play.png"
              alt=""
            />
            <p className="text-[#18181B ">Watch Trailer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Upcoming;
