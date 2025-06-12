import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Cards from "@/components/Cards";
import { Key } from "react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export default async function Page({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const responses = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const responseData = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const data = await response.json();
  const datas = await responses.json();
  const dataResponse = await responseData.json();

  console.log(dataResponse);
  const director = dataResponse.crew.find(
    (member: { job: string }) => member.job === "Director"
  );
  const writer = dataResponse.crew.filter(
    (member: { job: string }) => member.job === "Writer"
  );
  const stars = dataResponse.cast.slice(0, 3);
  console.log("director", director);
  console.log("writer", writer);
  console.log("stars", stars);

  return (
    <div className="items-center flex gap-8 flex-col">
      <Navigation />
      <div className="flex flex-col gap-6">
        <div className="flex justify-between text-[#09090B] h-[72px] pr-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-bold">{data.title}</h2>
            <p className="text-[18px] leading-7 font-normal">
              {data.release_date} <span>· PG ·</span>{" "}
              <span>{data.runtime}</span>
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xs font-medium">Rating</p>
            <div className="flex h-12 items-center gap-1 self-stretch">
              <div>
                <img src="/images/star.png" alt="" className="w-7 h-7" />
              </div>
              <div>
                <p>
                  <span className="text-[18px] text-[#09090B] font-semibold">
                    {data?.vote_average.toFixed(1)}
                  </span>
                  <span className="text-[16px] text-[#71717A]">/10</span>
                </p>
                <p className="text-xs">{data.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
            alt="poster"
            className=" w-[290px] h-[428px] rounded-sm bg-center "
          />
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
            alt="poster"
            className=" w-[760px] h-[428px] rounded-sm bg-center"
          />
        </div>
      </div>
      <div className="flex flex-col w-[1080px] items-start gap-5">
        <div className="flex gap-2.5">
          {data?.genres?.map(
            (genre: {
              id: Key | null | undefined;
              name: string | number | bigint | boolean | null | undefined;
            }) => {
              return (
                <Badge
                  className="bg-white text-black rounded-full border border-solid border-[#E4E4E7] px-2.5 py-0.5"
                  key={genre.id}
                >
                  {genre.name}
                </Badge>
              );
            }
          )}
        </div>
        <p className="text-[16px] leading-6">{data.overview}</p>
        <div className="flex gap-1 flex-col">
          <div className="flex gap-[53px]">
            <h2 className="font-bold text-[16px]">Director</h2>
            <p>{director?.name}</p>
          </div>
          <DropdownMenuSeparator className="my-2 h-[1px] bg-[#E4E4E7] " />
          <div className="flex gap-[53px]">
            <h2 className="font-bold text-[16px] w-16">Writers</h2>
            <div className="flex  gap-2">
              {writer?.map(
                (writer: { id: Key | null | undefined; name: string }) => {
                  return (
                    <p key={writer.id} className="text-[16px]">
                      {writer.name}
                    </p>
                  );
                }
              )}
            </div>
          </div>
          <DropdownMenuSeparator className="my-2 h-[1px] bg-[#E4E4E7]" />
          <div className="flex gap-[53px] w-[1080px]">
            <h2 className="font-bold w-16 text-[16px]">Stars</h2>
            <div className="flex gap-2">
              {stars?.map(
                (star: { id: Key | null | undefined; name: string }) => {
                  return (
                    <p key={star.id} className="text-[16px]">
                      {star.name}
                    </p>
                  );
                }
              )}
            </div>
          </div>
          <DropdownMenuSeparator className="my-2  h-[1px]  bg-[#E4E4E7]" />
        </div>
      </div>
      <div className="hfit w-[1080px]">
        <div className="flex justify-between items-center">
          <p className="font-semibold h-8 text-[32px]">More like this</p>
          <Link href={`/morethis/${movieId}`}>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[14px] font-medium ">See more</p>
              <ArrowRight width={16} height={16} />
            </div>
          </Link>
        </div>
        <div>
          <div className="grid grid-cols-5 pt-5">
            {datas?.results
              ?.slice(0, 5)
              .map(
                (movie: {
                  id: Key | null | undefined;
                  title: string;
                  vote_average: number;
                  poster_path: string | undefined;
                }) => {
                  return (
                    <Link href={`/movies/${movie.id}`} key={movie.id}>
                      <Cards
                        key={movie.id}
                        title={movie.title}
                        rate={movie.vote_average}
                        image={movie.poster_path}
                      />
                    </Link>
                  );
                }
              )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
