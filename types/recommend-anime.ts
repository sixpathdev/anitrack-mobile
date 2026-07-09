export interface Friend {
  id: string;
  username: string;
  rank: string;
  avatar: string;
  online: boolean;
}

export interface Anime {
  id: string;
  title: string;
  poster: string;
}

export interface RecommendState {
  friend?: Friend;
  anime?: Anime;
  message: string;
  search: string;
}
