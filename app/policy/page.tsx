import { FutureRoutePage } from "@/components/site/future-route-page";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Policy | Roofing Recyclers",
  description:
    "Future policy, incentive, and legislative resource pages for Roofing Recyclers.",
  path: "/policy",
});

export default function PolicyPage() {
  return <FutureRoutePage routeKey="policy" />;
}
