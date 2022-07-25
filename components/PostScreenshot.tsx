import React from "react";
import Image from "next/image";
function PostScreenshot({ imageData }: any) {
  return (
    <section className="flex flex-wrap my-10">
      {imageData.map((item: any, index: any) => (
        <div
          className="p-3 md:w-1/2 w-full  h-[250px] md:h-[300px]  md:my-5 "
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
        </div>
      ))}
    </section>
  );
}

export default PostScreenshot;
