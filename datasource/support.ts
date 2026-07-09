import {
  UserRound,
  Settings2,
  CreditCard,
  MessageSquare,
} from "lucide-react-native";


export const supportCategories = [
  {
    id: "1",
    title: "Account Issues",
    icon: UserRound,
    goto: "/modal/support/send-report",
    type: 'account-issues',
  },
  {
    id: "2",
    title: "Technical Support",
    icon: Settings2,
    goto: "/modal/support/send-report",
    type: 'technical-support',
  },
  {
    id: "3",
    title: "Billing & Premium",
    icon: CreditCard,
    goto: "/modal/support/send-report",
    type: 'billing-premium',
  },
  {
    id: "4",
    title: "Feature Requests",
    icon: MessageSquare,
    goto: "/modal/support/send-report",
    type: 'feature-requests',
  },
];