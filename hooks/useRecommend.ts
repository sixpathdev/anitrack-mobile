import { useMemo, useState } from "react";
import { animeList, friends } from "@/datasource/recommend-data";
import { Anime, Friend } from "@/types/recommend-anime";

export function useRecommend() {
  const [search, setSearch] = useState("");
  const [friend, setFriend] = useState<Friend | undefined>();
  const [anime, setAnime] = useState<Anime | undefined>();
  const [message, setMessage] = useState("");

  const filteredFriends = useMemo(() => {
    if (!search.trim()) return friends;

    return friends.filter((item) =>
      item.username.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return {
    search,
    setSearch,

    friend,
    setFriend,

    anime,
    setAnime,

    message,
    setMessage,

    filteredFriends,

    animeList,
  };
}
