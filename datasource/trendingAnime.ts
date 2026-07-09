export interface TrendingAnime {
  id: string;
  title: string;
  genres: string;
  rating: string;
  image: string;
}

export const trendingAnime: TrendingAnime[] = [
  {
    id: "1",
    title: "One Piece",
    genres: "Adventure • Fantasy • 1100+ Episodes",
    rating: "9.0",
    image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  },
  {
    id: "2",
    title: "Attack on Titan",
    genres: "Action • Dark Fantasy • 89 Episodes",
    rating: "9.1",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
  },
  {
    id: "3",
    title: "Demon Slayer",
    genres: "Action • Supernatural • 63 Episodes",
    rating: "8.8",
    image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
  },
  {
    id: "4",
    title: "Solo Leveling",
    genres: "Action • Fantasy • 25 Episodes",
    rating: "8.9",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
  },
  // {
  //   id: "5",
  //   title: "Jujutsu Kaisen",
  //   genres: "Action • Supernatural • 47 Episodes",
  //   rating: "8.7",
  //   image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
  // },
  // {
  //   id: "6",
  //   title: "Naruto Shippuden",
  //   genres: "Action • Adventure • 500 Episodes",
  //   rating: "8.9",
  //   image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  // },
  // {
  //   id: "7",
  //   title: "Chainsaw Man",
  //   genres: "Action • Horror • 12 Episodes",
  //   rating: "8.6",
  //   image:
  //     "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  // },
  // {
  //   id: "8",
  //   title: "My Hero Academia",
  //   genres: "Action • Superhero • 150+ Episodes",
  //   rating: "8.4",
  //   image:
  //     "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
  // },
];
