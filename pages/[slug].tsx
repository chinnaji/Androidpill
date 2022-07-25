import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { MdOutlineAccessTime } from "react-icons/md";
import PostScreenshot from "../components/PostScreenshot";
import DownloadLinks from "../components/DownloadLinks";
import NativeBanners from "../components/ads/NativeBanners";
import Head from "next/head";
// import { Nav, Button } from '../../components'

const components = { Image, PostScreenshot, DownloadLinks, NativeBanners };

const PostPage = ({
  frontMatter: { title, description, date, thumbnailUrl, imageFolder },
  mdxSource,
  slug,
}: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://www.androidpill.com/${slug}`}
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/Androidpill/"
        />

        <meta
          property="og:image"
          content={`https://www.androidpill.com/${imageFolder}/thumbnail.jpg`}
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="chibuike Nnaji" />
        <meta name="twitter:label2" content="Est. reading time" />
      </Head>
      <main className="mt-4 max-w-6xl mx-auto p-2 blogpost">
        <h1 className="lg:text-4xl text-3xl font-semibold mt-16 lg:mt-10 mb-5 text-zinc-100 text-center">
          {title}
        </h1>
        <p className="text-sm text-zinc-400 flex items-center  justify-center mb-10">
          <MdOutlineAccessTime className="mr-2 text-xl" />{" "}
          <span className="fon-semibold">{date}</span>
        </p>
        <div className="relative w-full mt-5 mb-10 h-[250px] md:h-[300px] mx-auto lg:h-[500px]  ">
          <Image
            src={thumbnailUrl}
            layout="fill"
            alt={title}
            className="rounded "
            objectFit="cover"
          />
        </div>
        {/* Native banner advertisement type 2 */}
        {/* <NativeBanners type={2} /> */}
        <MDXRemote {...mdxSource} components={components} />

        {/* Native banner advertisement type 1 */}
        <NativeBanners type={1} />
      </main>
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
