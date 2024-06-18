export interface PostProps {
  avatarId?: number;
  name: string;
  createdAt: string;
  likeCount: number;
  imgSrc?: string;
  content: string;
}

export interface EmptyListProps {
  message: string;
}
