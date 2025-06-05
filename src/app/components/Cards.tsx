const Cards = ({
  title,
  image,
  rate,
}: {
  title: string;
  image?: string;
  rate: number;
}) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="">
      <img
        src={`${imageUrl}${image}`}
        alt=""
        className=" h-[300px] w-[200px] rounded-md"
      />
      <div className="flex flex-col rounded-lg bg-[#F4F4F5] w-[200px] h-[96px]">
        <div className="flex items-center gap-1 px-3 py-2">
          <img src="/images/star.png" alt="" className="w-4 h-4" />
          <div className="flex items-center">
            <p className="text-[14px]">{Math.floor(rate / 0.1) / 10}</p>
            <p className=" flex items-center text-[12px] text-[#71717A]">/10</p>
          </div>
        </div>
        <div>
          <p className="text-[18px] flex items-center">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
