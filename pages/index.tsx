import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import MainHero from "../components/MainHero";
import Head from "next/head";

export interface postData {
  frontMatter: FrontMatter;
  slug: string;
}
export interface FrontMatter {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  author: string;
  category: string;
}

interface indexProps {
  posts: postData[];
}

const Home = ({ posts }: indexProps) => {
  const heroPosts = posts.slice(0, 5);
  // console.log(posts);
  return (
    <>
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
    </>
    // <div className="mt-5">
    //   {posts.map((post: any, index: any) => (
    //     <>
    //       <Link href={"/" + post.slug} passHref key={index}>
    //         <a className="text-black">dsdsds</a>
    //       </Link>

    //       <Link href={"/" + post.slug} passHref key={index}>
    //         <div className="card mb-3 pointer" style={{ maxWidth: "540px" }}>
    //           <div className="row g-0">
    //             <div className="col-md-8">
    //               <div className="card-body">
    //                 <h5 className="card-title">{post.frontMatter.title}</h5>
    //                 <p className="card-text">{post.frontMatter.description}</p>
    //                 <p className="card-text">
    //                   <small className="text-muted">
    //                     {post.frontMatter.date}
    //                   </small>
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="col-md-4 m-auto">
    //               <Image
    //                 src={post.frontMatter.thumbnailUrl}
    //                 className="img-fluid mt-1 rounded-start"
    //                 alt="thumbnail"
    //                 width={500}
    //                 height={400}
    //                 objectFit="cover"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     </>
    //   ))}
    // </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
