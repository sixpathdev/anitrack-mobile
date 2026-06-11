export interface ContinueWatchingData {
  id: string;
  title: string;
  episode: string;
  progress: number;
  image: string;
}

export const ContinueWatching: ContinueWatchingData[] = [
  {
    id: "1",
    title: "One Piece",
    episode: "Ep 1128 • 8m left",
    progress: 85,
    image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
  },
  {
    id: "2",
    title: "Solo Leveling",
    episode: "Ep 12 • 5m left",
    progress: 75,
    image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  },
  {
    id: "3",
    title: "Demon Slayer",
    episode: "Ep 08 • 12m left",
    progress: 60,
    image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
  },
  {
    id: "4",
    title: "Attack on Titan",
    episode: "Ep 21 • 3m left",
    progress: 92,
    image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
  },
  {
    id: "5",
    title: "Jujutsu Kaisen",
    episode: "Ep 17 • 10m left",
    progress: 40,
    image: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
  },
];
