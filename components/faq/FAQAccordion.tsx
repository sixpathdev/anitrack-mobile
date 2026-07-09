import { faqItems } from "@/datasource/faq";
import FAQItem from "@/components/faq/FAQItem";

export default function FAQAccordion() {
  return (
    <>
      {faqItems.map((item) => (
        <FAQItem key={item.id} {...item} />
      ))}
    </>
  );
}
