import React from "react";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import Image from "next/image";
import { pageHeroPost } from "../types";

function OtherHero({ pageHeroPost }: pageHeroPost) {
  // console.log("pageHeroPost", pageHeroPost);
  return (
    <section className="flex flex-wrap md:my-10 text-zinc-100">
      <span className="block relative w-full md:h-[500px] h-[350px] rounded">
        <Image
          src={pageHeroPost.frontMatter.thumbnailUrl}
          // firstPostItem.node.featuredImage.node.sourceUrl
          layout="fill"
          alt={pageHeroPost.frontMatter.title}
          className="rounded-md"
          objectFit="cover"
        />
        <div className="absolute inset-0 p-4  rounded from-dark bg-gradient-to-t flex items-end">
          <span className="block">
            <div>
              <CategoryPill type={pageHeroPost.frontMatter.category} />
            </div>

            <Link passHref href={`/${pageHeroPost.slug}`}>
              <a>
                <h3 className="font-semibold text-xl mt-3 mb-2 hover:text-teal cursor-pointer">
                  {pageHeroPost.frontMatter.title}
                </h3>
              </a>
            </Link>
            <p className="text-sm mb-3 text-zinc-200">
              {pageHeroPost.frontMatter.description}
            </p>
          </span>
        </div>
      </span>
      {/* <div className="p-2 w-full md:w-1/2 flex flex-wrap"></div> */}
    </section>
  );
}

export default OtherHero;
