export interface PostsProp {
  posts: [
    {
      id: number;
      title: string;
      content: {
        text: string;
      };
      slug: string
    }
  ];
}
export interface PostProp {
  post: {
    title: string;
    content: {
      text: string;
    };
    slug: string
  };
}
