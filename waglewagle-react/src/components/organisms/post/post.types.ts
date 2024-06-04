export interface PostProps {
  avatarId?: string;
  name: string;
  createdAt: string;
  likeCount: number;
  imgSrc?: string;
  content: string;
}
export interface PostListDataProps {
  id: number;
  avatarId?: string;
  name: string;
  createdTime: string;
  like: number;
  imageUrl?: string;
  content: string;
  tagId: number;
  tag: {
    nickname: string;
  };
}

export interface EmptyListProps {
  message: string;
}
