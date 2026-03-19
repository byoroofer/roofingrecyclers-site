import { FutureRoutePage } from "@/components/site/future-route-page";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Certification | Roofing Recyclers",
  description:
    "Future contractor certification and participation standards for Roofing Recyclers.",
  path: "/certification",
});

export default function CertificationPage() {
  return <FutureRoutePage routeKey="certification" />;
}
