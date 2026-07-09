import ScreenWrapper from "@/components/ScreenWrapper";
import NotificationsHeader from "@/components/notifications/NotificationsHeader";
import NotificationSection from "@/components/notifications/NotificationSection";
import { notificationSections } from "@/datasource/notifications";
import { FlatList } from "react-native";


export default function NotificationsScreen() {
  return (
    <ScreenWrapper bg="#0b1326" scroll={false} className="px-4" includeTopSafeArea={false}>
      <NotificationsHeader />
      <FlatList
        data={notificationSections}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 120,
        }}
        ListHeaderComponent={null}
        renderItem={({ item }) => <NotificationSection {...item} />}
      />
    </ScreenWrapper>
  );
}
