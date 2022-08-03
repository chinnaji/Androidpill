import React from "react";
import { downloadLinksProps } from "../types";

function DownloadLinks({ url, text }: downloadLinksProps) {
  return (
    <a
      href={url}
      className="bg-teal font-medium text-md text-zinc-900 my-5 flex items-center justify-center px-6 py-3 rounded-md hover:bg-teal/90 w-fit mx-auto"
    >
      <svg
        className="download-icon mr-2"
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="download-arrow"
          d="M13 9L9 13M9 13L5 9M9 13V1"
          stroke="#121213"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
          stroke="#121213"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>

      {text}
    </a>
  );
}

export default DownloadLinks;
