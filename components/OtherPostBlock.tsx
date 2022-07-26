import React from "react";
import Image from "next/image";
import te from "../images/asset.jpg";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import { MdOutlineAccessTime } from "react-icons/md";
import { otherPostProp } from "../types";

function OtherPostBlock({ otherPost }: otherPostProp) {
  return (
    <section
      className="flex flex-wrap md:justify-between justify-center items-center text-zinc-200 md:my-0 my-10  
    ease-out transition transform "
    >
      {/* thumbnail */}
      <div className="block relative w-full lg:w-1/4 my-5 lg:my-2 p-2 md:h-[350px] lg:h-[220px] h-[250px] rounded">
        <span className="block relative w-full p-2 h-full ">
          <Image
            src={otherPost.frontMatter.thumbnailUrl}
            layout="fill"
            alt={otherPost.frontMatter.title}
            className="rounded"
            // objectFit="cover"
          />
        </span>
      </div>
      {/* content */}
      <span className="p-2  w-full lg:w-1/2 lg:-ml-5">
        <CategoryPill type={otherPost.frontMatter.category} />{" "}
        <Link passHref href={`/${otherPost.slug}`}>
          <a>
            <h3 className="font-semibold text-xl text-md mt-3 mb-2 cursor-pointer hover:text-teal">
              {otherPost.frontMatter.title}
            </h3>
          </a>
        </Link>
        <p className="text-zinc-400 text-sm">
          {otherPost.frontMatter.description}
        </p>
      </span>
      {/* ad space */}
      <div className=" md:block hidden relative w-full lg:w-1/5 p-2 h-[180px] md:h-[150px] rounded mdmy-0 my-16">
        <span className="block relative w-full p-2 h-full ">
          {/* <Image
            src={te}
            layout="fill"
            alt="rr"
            className="rounded"
            // objectFit="cover"
          /> */}
        </span>
        {/* <p className="text-sm text-center text-zinc-400 underline mt-3">
          Advertisement
        </p> */}
      </div>
    </section>
  );
}

export default OtherPostBlock;
