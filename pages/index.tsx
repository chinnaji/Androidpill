import MainHero from "../components/MainHero";
import Head from "next/head";
import TrendingSection from "../components/TrendingSection";
import OtherPostsSection from "../components/OtherPostsSection";
import NoticeBoard from "../components/NoticeBoard";
import NativeBanners from "../components/ads/NativeBanners";
import { postPageProps } from "../types";
import { getPosts } from "../utils/getPosts";
const Home = ({ posts }: postPageProps) => {
  // console.log(posts.slice(5, 11));
  const heroPosts = posts.slice(0, 5);

  return (
    <main className=" px-3 max-w-6xl mx-auto">
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

        <title>
          Home - Devil May cry apk mod,100 ppsspp games link,Gta v mobile%%
        </title>
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

      <MainHero heroPosts={heroPosts} />

      <TrendingSection trendingPosts={posts.slice(5, 11)} />
      <NativeBanners type={2} />
      <OtherPostsSection otherPosts={posts.slice(12)} />
      <NoticeBoard />
    </main>
  );
};

export const getStaticProps = async () => {
  const response = await getPosts("none");
  return {
    props: {
      posts: response,
    },
  };
};

export default Home;
