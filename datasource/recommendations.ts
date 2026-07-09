export type RecommendationStatus = "seen" | "pending" | "watched";

export interface Recommendation {
  id: string;
  title: string;
  poster: string;
  sender: string;
  receiverAvatar: string;
  status: RecommendationStatus;
  time: string;
}

export const recommendations: Recommendation[] = [
  {
    id: "1",
    title: "Cyber Edge: Revenant",
    status: "seen",
    sender: "Alex_Chen",
    time: "2d ago",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWRxyDmYeeunKI2qVCJ_Cf9p84jjayJOOlkE9HPWKQTr9p_R7re3LI3SZ0KFuRBu58efjf583XDNaryFrlxesRo-XF-deluYUrV0Kp8xyJwH5Y9AgL9MDrlUZckPHoy-fAnM3lwxTS5n-kQqBtCGRqinteLbfhTi0-ADcP0YR--ntnJgCPD1HAYdc9edCZDsvIPR0DNohqJgWMQyemPbls9GFCyp6-dXsWi6QSnTCzahSkIYJX8nu4SQ",
    receiverAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FO34YOGeYI9II1Pob-dQ2OHMkh1U22NFl4BHelYA086iwukSvzvZgqcvBG3HZIHuaG8dIkegKPoegh8cDipgh9CL3zmCVYjicFr4i011gdqEewABQEpILcrZ1AQSukORT5hbRDSZA7OzKzlqyaADip0QI3wp0xKcCjtS9pQdZXLH7x4aaWyLrRgZNX7y1vNEYfXKzakh0aKGewvH2BQi-HA2eDgvfbDQcQ29_3g3UmKhYb0Ejogqpw",
  },

  {
    id: "2",
    title: "Petals in the Wind",
    status: "pending",
    sender: "SakuraDreamer",
    time: "5h ago",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBx8qD1OwTZnO1GO1YZTx4TzVRAPc07zF2S6oj9qfQEnbqYAwtj55PncpMl08EcNh7dNjFP0XxP4ownjO1kY-6CCR9pcJDd0_Yn-LETQsgOkF3lZtjp5C2FLdb2SR9QE-1NrU85BhBM_yzilHtewhAWEzb-5mdUg4_FMank-GQq_g6anBYWCN_SWOSkZFVTItzYkWGSYoyITkGMT39YHGOg-99kfCaBpIRg5TsuokP2glYgmviTUdXj8A",
    receiverAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9ioyS695vOyx_5eZ3tngKwGmzAauDd5rJ5ZMtNFzRgjtwJeDNpG2tkmggflxAH1P3jDjN0mnAVfLjasme0RJ0mdOJbbz6vSWCD21DUMFzQ9UXPfeQUNz5e3hHMrra4XQNrYK-AZdLZuyIzGzKH76S9F3dy3_rpY-SKoAbfssXEi3q0QekYmNnI9lZ0soHfStlbWwzDfo4dasHA1gbaq-RV1ULfwGeXdYDq0fruZhQsyI8V7-D6LTxBw",
  },

  {
    id: "3",
    title: "Abyssal Echoes",
    status: "seen",
    sender: "NightWalker",
    time: "1w ago",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKi6DHrqolLifgWnkZy5I6gANVV2Rw_Irx1cJAvPTyk_fh9iD_V_Sdk670XxY5Tz5jpzl3PGwhWvG8bJDleizAnODRpYfGV9m0EShPDKKP0U1e2dF7Ew5HU9UL58jwRJzT1b7oyOGs_5SKv1YzTIaPFe3Ido3jP3R3zQxh4DLBrfvF_C_ex1hdDXBil-dkp40YdJHWzx71iAj-4NUsZxVDYB0y3ZU2YddLDSVpTynGMTJJfMPQPGfFog",
    receiverAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOTMOwRK3oQeUMw-P-30sdKYU7-yRw4QD4OZDkytGY26LRijZgnEDdDi8rusw871KTPvD6taL7zxWrVvfQsr32mqfn-BBF5d1m1yJxtdgNe_eLS2PjFDWdJmEkIXawfVI7kvPPFYJ0jY8U4JNu2swDR-eAJSs0deZvYbwaRJBqweKQ-nNeCbwqwSL1yDQSkH4upppeb2qeL6NT_Wl0G6wtSmOBRCkG8QeNDsotOmZ6dwfKGZrDzf7pYg",
  },

  {
    id: "4",
    title: "Full Court Press",
    status: "pending",
    sender: "GamerKing99",
    time: "2w ago",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDA2KZT3cHfHrNjVYSorpM0QMXALg8sTWnZ45JsiubnfwvmRwT6BxPWnjdwyP1eqR0XCYice-cvrxRioLpTHnszC6tISMfW4X7rjPoIdDRuhMI_df5cbbHgdj1b8nKSmPG48p1asYbcNKnW5ls8RQq2OLVqghYzPWQ6R5gNOpcekzZ2NS2tEDQy4cIdB80guintXld8IIUhrIrehlFvJMR_6XY-QARxyJ3EfgpDmVwbEPY0mLyyJs2VyA",
    receiverAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUzO8OKvTLGPgHiduXOhKO1aJpcuiaxv_oQAQkdq8MCwTkqqHSJBRM-fYV5TX9B4y20HITgkYFaJfFNJ1pGMIwIUU4Xctvdd057cloinosUk2Zm-iygbaexe1nslOqQWNEEuEU-wk88X00RJw3LtahzgmU8anQ_mGItnQsFZAnozp-itMUSgIehVjhF7WfaZXm8D_Ya0-R65odRQwZ6Qti9vPsS7fsiCf3e0BhIBZwZ06ZUblvhbGQPQ",
  },
];
