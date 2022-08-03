export type searchProps = {
  setIsSearch: (isSearch: boolean) => void;
};

interface frontMatter {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  author: string;
  imageFolder: string;
}

export interface postData {
  frontMatter: frontMatter;
  slug: string;
}

export interface postProps {
  heroPosts: postData[];
}
export interface postPageProps {
  posts: postData[];
}
export interface pageHeroPost {
  pageHeroPost: postData;
}

export interface otherPostProp {
  otherPost: postData;
}

export interface readAlsoProps {
  url: string;
  text: string;
}
export interface categoryPillProps {
  type: string;
}
