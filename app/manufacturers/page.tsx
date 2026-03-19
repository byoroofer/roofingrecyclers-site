import { FutureRoutePage } from "@/components/site/future-route-page";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Manufacturers | Roofing Recyclers",
  description:
    "Future manufacturer engagement and circular-material partnership routes for Roofing Recyclers.",
  path: "/manufacturers",
});

export default function ManufacturersPage() {
  return <FutureRoutePage routeKey="manufacturers" />;
}
