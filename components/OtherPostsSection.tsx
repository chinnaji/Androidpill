import React, { useState } from "react";
import OtherPostBlock from "./OtherPostBlock";
import { CgPushDown, CgPushUp } from "react-icons/cg";
import Nb from "./ads/NativeBanners";

function OtherPostsSection({ otherPosts }: any) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const partitionPosts = otherPosts.slice(start, end);

  // const showMore = () => {
  //   setEnd((prevState) => prevState + 10);
  // };
  // const showLess = () => {
  //   setEnd((prevState) => prevState - 10);
  // };

  return (
    <section className="my-10 py-10 max-w-6xl mx-auto ">
      {partitionPosts.map((partitionPost: any, index: any) => (
        <div key={index}>
          {index === 10 ? (
            <>
              <Nb type={3} />
            </>
          ) : null}
          <OtherPostBlock otherPost={partitionPost} key={index} />
        </div>
      ))}{" "}
      <div className="mt-10">
        {" "}
        <Nb type={2} />
      </div>
    </section>
  );
}

export default OtherPostsSection;
