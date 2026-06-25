import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive advisory solutions including business consultancy, talent and HR advisory, training and development, and strategic advisory.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
