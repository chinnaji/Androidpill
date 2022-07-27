import React from "react";
import Image from "next/image";
import te from "../images/asset.jpg";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import { MdOutlineAccessTime } from "react-icons/md";

function TrendingBlock({ trendingPost }: any) {
  return (
    <div className="flex text-zinc-50 my-3 md:my-5">
      <span className="block relative w-1/3 p-2 h-[120px] rounded">
        <span className="block relative w-full p-2 h-full ">
          <Image
            src={trendingPost.frontMatter.thumbnailUrl}
            layout="fill"
            alt={trendingPost.frontMatter.title}
            className="rounded"
          />
        </span>
      </span>

      <span className="p-2 w-2/3 ml-5  flex flex-col justify-center">
        <CategoryPill type={trendingPost.frontMatter.category} />

        <Link passHref href={`/${trendingPost.slug}`}>
          <a>
            <h3 className="font-semibold text-md mt-2 mb-2  hover:text-teal cursor-pointer">
              {trendingPost.frontMatter.title}
            </h3>
          </a>
        </Link>
        {/* <p className="text-sm text-zinc-500 flex items-center ">
          <MdOutlineAccessTime className="mr-2 text-xl" />{" "}
          <span>{trendingPost.frontMatter.date}</span>
        </p> */}
      </span>
    </div>
  );
}

export default TrendingBlock;
