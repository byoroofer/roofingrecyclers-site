import { FutureRoutePage } from "@/components/site/future-route-page";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Contractors | Roofing Recyclers",
  description:
    "Future contractor participation, certification, and recycling network pathways for Roofing Recyclers.",
  path: "/contractors",
});

export default function ContractorsPage() {
  return <FutureRoutePage routeKey="contractors" />;
}
