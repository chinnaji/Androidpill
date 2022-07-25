import React from "react";
import Link from "next/link";

function CategoryPill({ type }: { type: string }) {
  return (
    // <Link passHref href={`/${type}`}>
    <span
      className={`text-zinc-50 px-2 py-1 font-semibold ${
        type == "Android Games"
          ? "bg-orange"
          : type == "Android Apps"
          ? "bg-success"
          : "bg-danger"
      }  text-xs rounded mr-3`}
    >
      {type}
    </span>
    // </Link>
  );
}

export default CategoryPill;
