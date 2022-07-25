import React from "react";
import Image from "next/image";
import te from "../images/asset.jpg";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineAccessTime } from "react-icons/md";
import Nb from "./ads/NativeBanners";

function SearchResults({ searchResults }: any) {
  const router = useRouter();
  const { searchQuery } = router.query;
  return (
    <>
      <Nb type={3} />
      <h1 className="text-center text-zinc-100 font-semibold text-2xl md:text-3xl my-10">
        Found <span className="underline">{searchResults.nodes.length}</span>{" "}
        Search Results for <span className="underline">{searchQuery}</span>
      </h1>
    </>
  );
}

export default SearchResults;
