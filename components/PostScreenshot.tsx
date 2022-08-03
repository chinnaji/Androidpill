import React from "react";
import Image from "next/image";
import { postScreenshotProps } from "../types";
function PostScreenshot({ imageData }: postScreenshotProps) {
  return (
    <section className="flex flex-wrap my-10">
      {imageData.map((item: any, index: any) => (
        <a
          href={item.url}
          className="p-3 md:w-1/2 w-full  h-[250px] md:h-[300px]  md:my-5 hover:scale-[1.02] transition-all ease-in-out duration-500"
          key={index}
        >
          <div className="relative   h-full w-full mx-auto   ">
            <Image
              src={item.url}
              layout="fill"
              alt={item.alt + `screenshot ${index}`}
              className="rounded "
              objectFit="cover"
            />
          </div>
        </a>
      ))}
    </section>
  );
}

export default PostScreenshot;
