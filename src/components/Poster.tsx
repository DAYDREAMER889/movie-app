import { Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type MovieResponse = {
  results: Movie[];
};

type Movie = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path?: string;
};

const nowUrl =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Poster = () => {
  const [nowPlaying, setNowPlaying] = useState<MovieResponse>({ results: [] });
  useEffect(() => {
    fetch(`${nowUrl}/now_playing?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setNowPlaying(data);
      });
  }, []);
  // console.log(nowPlaying);
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex overflow-x-scroll overflow-y-clip snap-x w-screen">
      {nowPlaying?.results?.slice(0, 3).map((movie) => {
        return (
          <Link
            key={movie.id}
            href={`/movies/${movie.id}`}
            className="w-screen shrink-0"
          >
            <div
              key={movie.id}
              className="h-[900px] w-full bg-center bg-no-repeat flex items-center shrink-0 relative snap-center"
            >
              <img
                className="absolute flex shrink-0 gap-0 "
                src={`${imageUrl}${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="flex flex-col  color-[#FFF] absolute px-80">
                <div className="text-[#FFF]">
                  <p className="text-[16px]">Now Playing:</p>
                  <p className="text-[36px] font-semibold">{movie.title}</p>

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
                  <p className="text-[16px]">{movie.overview}</p>
                </div>
                <div className="pt-4">
                  <button className="border  border-[#E4E4E7] w-fit h-[45px] flex justify-center items-center py-2 px-4 bg-[#F4F4F5]  rounded-md gap-2  ">
                    <Play width={16} height={16} />

                    <p className="text-[#18181B ">Watch Trailer</p>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Poster;
