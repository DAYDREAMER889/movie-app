"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Poster from "../components/Poster";
import Footer from "../components/Footer";

export default function Home() {
  const [upcoming, setUpcoming] = useState<MovieResponse>({ results: [] });
  const [popular, setPopular] = useState<MovieResponse>({ results: [] });
  const [top, setTop] = useState<MovieResponse>({ results: [] });
  const baseUrl = "https://api.themoviedb.org/3/movie";

  useEffect(() => {
    fetch(`${baseUrl}/upcoming?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUpcoming(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/popular?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/top_rated?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setTop(data);
      });
  }, []);

  // console.log("movies", movies);
  return (
    <div className="flex flex-col items-center gap-12  ">
      <Navigation />

      <Poster></Poster>

      <div className="h-fit w-[1536px]">
        <div className="flex justify-between items-center px-30">
          <p className="text-2xl font-semibold">Upcoming</p>

          <Link href={"/upcoming"}>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[14px] ">See more</p>
              <ArrowRight width={16} height={16} />
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5">
        {upcoming?.results?.slice(0, 10).map((movie) => {
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

      <div className="h-fit w-[1536px]">
        <div className="flex justify-between items-center px-30">
          <p className="text-2xl font-semibold ">Popular </p>
          <Link href={"/popular"}>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[14px] ">See more</p>
              <ArrowRight width={16} height={16} />
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5">
        {popular?.results?.slice(0, 10).map((movie) => {
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

      <div className="h-fit w-[1536px]">
        <div className="flex justify-between items-center px-30">
          <p className="text-2xl font-semibold">Top rated </p>
          <Link href={"/top-rated"}>
            <div className="flex justify-center items-center gap-2 ">
              <p className="text-[14px]">See more</p>
              <ArrowRight width={16} height={16} />
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5">
        {top?.results?.slice(0, 10).map((movie) => {
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

      <Footer />
    </div>
  );
}
