export interface PostData {
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
