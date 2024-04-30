interface Post {
  tag_id: number;
}

export interface Station {
  station_id: number;
  station_name: string;
  post: Post[];
}
