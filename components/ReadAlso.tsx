import React from "react";

function ReadAlso({ url, text }: any) {
  return (
    <a
      href={url}
      className="bg-orange px-2 py-4 text-zinc-100 my-5 block rounded-md"
    >
      <b>READ ALSO - </b> <u className="font-light">{text}</u>{" "}
    </a>
  );
}

export default ReadAlso;
