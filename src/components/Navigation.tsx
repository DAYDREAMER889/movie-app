"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Moon } from "lucide-react";
import { ArrowRight } from "lucide-react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Movie = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
};

type MovieResponse = {
  results: Movie[];
};
const Navigation = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [search, setSearch] = useState<MovieResponse>({ results: [] });
  const baseUrl = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`;

  useEffect(() => {
    fetch(baseUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        console.log(data);
      });
  }, [searchValue]);
  console.log(search);

  return (
    <div className="flex justify-between items-center container h-[60px]  ">
      <Link href={"/"}>
        <div className="gap-2 flex items-center ]">
          <img src="/images/film.png" alt="first" className="h-5 w-5" />
          <p className="text-[#4338CA] italic font-bold ">Movie Z</p>
        </div>
      </Link>

      <div className=" flex   items-center  gap-3  py-[8px] px-[16px]  ">
        <div className="flex  gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white text-black hover:bg-white border-[#E4E4E7] border">
                <ChevronDown />
                Genre
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-5">
              <DropdownMenuLabel className="w-[577px] flex flex-col">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-semibold">Genres</p>
                  <p className="text-[16px]">See lists of movies by genre</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-4" />
              <DropdownMenuGroup className="w-[577px] flex gap-4 flex-wrap">
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Action
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Adventure
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Animation
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Biography
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Comedy
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Crime
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Documentary
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Drama
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Family
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Fantasy
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Film-Noir
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Game-Show
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  History
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Horror
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Music
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Musical
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Mystery
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  News
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Reality-Show
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Romance
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Sci-Fi
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Short
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Sport
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Talk-Show
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Thriller
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  War
                  <ChevronRight />
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
                  Western
                  <ChevronRight />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center  border border-[#E4E4E7] px-[12px] shadow-sm rounded-md  border-none focus-outline-none  h-[36px] w-[335px] gap-2.5 relative">
          <Search color="grey" width={16} />
          <input
            className="text-[#71717A)] w-full  bg-transparent focus:outline-none"
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="flex items-center flex-col border rounded-md shadow-sm border-input my-2 gap-2 absolute top-10 left-0 z-10 bg-[#FFF]">
            {searchValue && (
              <div className="w-[335px] h-fit p-3 gap-3 ">
                {search?.results?.slice(0, 3).map((movie) => {
                  return (
                    <div key={movie.id}>
                      <div className="flex items-center gap-1 ">
                        <div>
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt="poster"
                            className="h-[60px] w-[40px] rounded-sm bg-center"
                          />
                        </div>
                        <div>
                          <img
                            src="/images/star.png"
                            alt=""
                            className="h-4 w-4"
                          />
                        </div>
                        <div>
                          <h4 className="text-[20px] font-semibold">
                            {movie.title}
                          </h4>
                          <p>
                            <span className="text-[14px] text-[#09090B] font-semibold">
                              {movie.vote_average.toFixed(1)}
                            </span>
                            <span className="text-[12px] text-[#71717A]">
                              /10
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-[14px] font-medium">
                          {movie.release_date}
                        </p>
                        <Link href={`/movies/${movie.id}`}>
                          <div className="flex justify-center items-center gap-2">
                            <button>See more</button>
                            <ArrowRight width={16} height={16} />
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center border rounded-md shadow-sm border-input my-2 px-2 gap-2 ">
        <Moon width={16} />
      </div>
    </div>
  );
};

export default Navigation;
