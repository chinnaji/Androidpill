import React from "react";
import { readAlsoProps } from "../types";

function ReadAlso({ url, text }: readAlsoProps) {
  return (
    <a
      href={url}
      className="bg-orange px-2 py-4 text-zinc-100 my-5 block rounded-md read-also"
    >
      <b>READ ALSO - </b> <u className="font-light">{text}</u>{" "}
    </a>
  );
}

export default ReadAlso;
