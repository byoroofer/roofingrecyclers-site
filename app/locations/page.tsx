import { FutureRoutePage } from "@/components/site/future-route-page";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Locations | Roofing Recyclers",
  description:
    "Future regional hub, facility, and intake location pages for Roofing Recyclers.",
  path: "/locations",
});

export default function LocationsPage() {
  return <FutureRoutePage routeKey="locations" />;
}
