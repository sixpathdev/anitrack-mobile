export interface ProfileTabListingData {
  id: string;
  title: string;
  screen: string;
  icon?: string;
}

export const ProfileTabListing: ProfileTabListingData[] = [
  {
    id: "1",
    title: "Account Settings",
    screen: "/profile/edit",
    icon: "edit",
  },
  {
    id: "2",
    title: "Manage Notifications",
    screen: "/notifications",
    icon: "notifications",
  },
  {
    id: "3",
    title: "Favorites",
    screen: "/general/favorites",
    icon: "favorite",
  },
  {
    id: "8",
    title: "Recommendations Sent",
    screen: "/recommend-friend/recommendations-sent",
    icon: "favorite",
  },
  {
    id: "4",
    title: "FAQ",
    screen: "/general/faq",
    icon: "help-circle",
  },
  {
    id: "5",
    title: "Contact Support",
    screen: "/general/support",
    icon: "headset",
  },
  {
    id: "6",
    title: "Privacy Policy",
    screen: "/general/privacy-policy",
    icon: "lock-closed",
  },
  {
    id: "7",
    title: "About AniTrack",
    screen: "/general/about",
    icon: "information-circle",
  },
];
