export const notificationSections = [
  {
    id: "releases",
    title: "NEW RELEASES",
    icon: "new-releases",
    color: "#ddb7ff",
    count: "2 UPDATES",
    notifications: [
      {
        id: "1",
        title: "Cyber Odyssey: Zero",
        time: "2M AGO",
        message:
          'Episode 12 "The Final Glitch" is now streaming. Watch the season finale now!',
        actionText: "WATCH NOW",
        type: "primary",
      },
      {
        id: "2",
        title: "Eternal Echoes",
        time: "5H AGO",
        message: "A new OVA special has been added to your watchlist.",
        read: true,
      },
    ],
  },
  {
    id: "reminders",
    title: "REMINDERS",
    icon: "alarm",
    color: "#ffb690",
    notifications: [
      {
        id: "3",
        title: "Airing Today",
        time: "NOW",
        message:
          '3 shows from your "Must Watch" list are airing in the next 2 hours.',
      },
    ],
  },
  {
    id: "friends",
    title: "FRIEND ACTIVITY",
    icon: "people",
    color: "#adc6ff",
    notifications: [
      {
        id: "4",
        title: "Alex Chen",
        time: "1H AGO",
        message:
          "Started watching Neon Genesis: Rebirth. They gave it a 9.5/10!",
        actionText: "VIEW PROFILE",
        type: "secondary",
      },
      {
        id: "5",
        title: "Sarah J.",
        time: "3H AGO",
        message: "Sent you a recommendation: Ghost in the Shell (2024).",
        read: true,
      },
    ],
  },
];
