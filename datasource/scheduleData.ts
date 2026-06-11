export interface ScheduleAnime {
  id: string;
  title: string;
  episode: string;
  time: string;
  image: string;
  badge: string;
  badgeType: "secondary" | "tertiary";
}

export const scheduleData: ScheduleAnime[] = [
  {
    id: "1",
    title: "Solo Leveling",
    episode: "Ep 12 Finale",
    time: "In 1h 45m",
    badge: "Ep 12 Finale",
    badgeType: "secondary",
    image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  },
  {
    id: "2",
    title: "Demon Slayer",
    episode: "New Release",
    time: "In 4h 20m",
    badge: "New Release",
    badgeType: "tertiary",
    image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  },
  {
    id: "3",
    title: "Attack on Titan",
    episode: "Ep 04",
    time: "In 7h 05m",
    badge: "Ep 04",
    badgeType: "secondary",
    image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  },
  {
    id: "4",
    title: "One Piece",
    episode: "Ep 24",
    time: "In 11h 30m",
    badge: "Ep 24",
    badgeType: "tertiary",
    image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  },
  {
    id: "5",
    title: "Attack on Titan",
    episode: "Ep 04",
    time: "In 7h 05m",
    badge: "Ep 04",
    badgeType: "secondary",
    image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  },
  {
    id: "6",
    title: "One Piece",
    episode: "Ep 24",
    time: "In 11h 30m",
    badge: "Ep 24",
    badgeType: "tertiary",
    image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  },
];
