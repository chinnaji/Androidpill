import React from "react";
import TrendingBlock from "./TrendingBlock";
import te from "../images/asset.jpg";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import Image from "next/image";
function TrendingSection({ trendingPosts }: any) {
  return (
    <div>
      <h2 className="text-zinc-100 font-bold text-xl md:text-3xl w-full  md:mb-8 px-4">
        Trending Posts 💹
      </h2>
    </div>
  );
}

export default TrendingSection;
