import { FutureRoutePage } from "@/components/site/future-route-page";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "News | Roofing Recyclers",
  description:
    "Future announcements, insights, and authority-building content for Roofing Recyclers.",
  path: "/news",
});

export default function NewsPage() {
  return <FutureRoutePage routeKey="news" />;
}
