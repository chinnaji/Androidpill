import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import Link from "next/link";
// import Image from "next/image";
// import MainHero from "../components/MainHero";
import Head from "next/head";
// import TrendingSection from "../components/TrendingSection";
// import OtherPostsSection from "../components/OtherPostsSection";
// import NoticeBoard from "../components/NoticeBoard";
import NativeBanners from "../components/ads/NativeBanners";
import OtherHero from "../components/OtherHero";
import { postPageProps } from "../types";
import { getPosts } from "../utils/getPosts";

const androidApps = ({ posts }: postPageProps) => {
  return (
    <main className=" px-2 max-w-6xl mx-auto">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="google-site-verification"
          content="bXuLD_w0LOKR-Gxt9xO3MsHXxrkB7ekzNvBJX-kuoPQ"
        />

        <title>Android Apps</title>
        <meta
          name="description"
          content="Download latest games &amp; Apks Gta v mobile,100 best ppsspp download games link, Shadow hunter apk mod, Asphalt nitro unlimited coins - Androidpill.com"
        />
        <link rel="canonical" href="https://www.androidpill.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Home - Devil May cry apk mod,100 ppsspp games link,Gta v mobile%%"
        />
        <meta
          property="og:description"
          content="Download latest games &amp; Apks Gta v mobile,100 best ppsspp download games link, Shadow hunter apk mod, Asphalt nitro unlimited coins - Androidpill.com"
        />
        <meta property="og:url" content="https://www.androidpill.com/" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/Androidpill/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="1 minute" />

        <link
          rel="alternate"
          type="application/rss+xml"
          title=" » Feed"
          href="https://www.androidpill.com/feed/"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title=" » Comments Feed"
          href="https://www.androidpill.com/comments/feed/"
        />

        <meta
          name="msapplication-TileImage"
          content="https://i0.wp.com/www.androidpill.com/wp-content/uploads/2021/01/cropped-Untitled-4.png?fit=270%2C270&amp;ssl=1"
        />
      </Head>
      <h1 className="text-center text-zinc-100 font-semibold text-2xl md:text-3xl my-10">
        ANDROID APPS 🍏
      </h1>
      <OtherHero pageHeroPost={posts[0]} />
      {/* <OtherPostsSection otherPosts={posts.slice(1)} /> */}

      <NativeBanners type={2} />
      {/* <OtherPostsSection otherPosts={posts.slice(1)} /> */}
    </main>
  );
};

export const getStaticProps = async () => {
  const response = await getPosts("Android Apps");

  return {
    props: {
      posts: response,
    },
  };
};

export default androidApps;
