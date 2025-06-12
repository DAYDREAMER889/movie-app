"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

type Movie = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
};

type MovieResponse = {
  results: Movie[];
};

import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Card from "../../components/Card";

const MovieCards = () => {
  const [popular, setPopular] = useState<MovieResponse>({ results: [] });
  const [first, setFirst] = useState(0);
  const baseUrl = "https://api.themoviedb.org/3/movie";

  useEffect(() => {
    fetch(`${baseUrl}/popular?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center gap-12  ">
      <Navigation />

      <div className="h-fit w-[1536px]">
        <div className="flex justify-between items-center px-40">
          <p className="text-2xl font-semibold">Popular</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5">
        {popular?.results?.slice(first, first + 10).map((movie) => {
          return (
            <Card
              key={movie.id}
              title={movie.title}
              rate={movie.vote_average}
              image={movie.poster_path}
              id={movie.id}
            />
          );
        })}
      </div>

      <div className="h-[114px] container">
        <div className="flex gap-1 justify-end items-center">
          <div className="flex gap-2 px-4 py-2">
            <ChevronLeft color="grey" />
            <button
              onClick={() => {
                setFirst(first - 10);
              }}
              className="text-[grey]"
            >
              Previous
            </button>
          </div>
          <div className="flex p-2.5 gap-2">
            <button className="w-10 h-10">1</button>
            <button className="w-10 h-10">2</button>
          </div>
          <div className="flex px-4 py-2 gap-2">
            <button
              onClick={() => {
                setFirst(first + 10);
              }}
            >
              Next
            </button>
            <ChevronRight />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieCards;
