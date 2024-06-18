export interface PostListType {
  posts: PostType[];
}

interface PostType {
  id: number;
  name: string;
  createdTime: string;
  like: number;
  imageUrl?: { image_url: string };
  content: string;
  tagId: number;
  tag: {
    nickname: string;
  };
}
