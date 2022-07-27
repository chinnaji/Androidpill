import React from "react";
import TrendingBlock from "./TrendingBlock";
import te from "../images/asset.jpg";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import Image from "next/image";
function TrendingSection({ trendingPosts }: any) {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-zinc-100 font-bold text-xl md:text-3xl w-full  md:mb-8 px-4">
        Trending Posts 💹
      </h2>
      <div className="flex flex-wrap">
        {trendingPosts.map((trendingPost: any, index: any) => (
          <span className="w-full md:w-1/2 " key={index}>
            <TrendingBlock trendingPost={trendingPost} key={index} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;
