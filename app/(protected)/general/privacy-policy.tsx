import ScreenWrapper from "@/components/ScreenWrapper";
import PrivacyHero from "@/components/privacy-policy/PrivacyHero";
import PrivacySection from "@/components/privacy-policy/PrivacySection";
import LastUpdatedCard from "@/components/privacy-policy/LastUpdatedCard";
import { privacySections } from "@/datasource/privacyPolicy";

export default function PrivacyPolicyScreen() {
  return (
    <ScreenWrapper bg="#0b1326" scroll className="px-5 pt-5">
      <PrivacyHero />

      {privacySections.map((section) => (
        <PrivacySection
          key={section.id}
          title={section.title}
          body={section.body}
        />
      ))}

      <LastUpdatedCard />
    </ScreenWrapper>
  );
}
